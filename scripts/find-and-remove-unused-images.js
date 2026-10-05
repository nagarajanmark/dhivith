const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const srcDir = path.join(projectRoot, 'src');

// 1. Gather all text in src files
function getAllSrcContent(dir) {
  let content = '';
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      content += getAllSrcContent(fullPath);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') || entry.name.endsWith('.css') || entry.name.endsWith('.json')) {
      content += ' ' + fs.readFileSync(fullPath, 'utf8');
    }
  }
  return content;
}

const allSrcText = getAllSrcContent(srcDir);

// 2. Scan public directory and identify unused files (specifically old .jpg.jpeg files and superseded .png files)
let deletedCount = 0;
let bytesFreed = 0;

function cleanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      cleanDir(fullPath);
    } else if (entry.isFile()) {
      // Remove all legacy .jpg.jpeg files (since all are converted to .webp)
      if (entry.name.endsWith('.jpg.jpeg')) {
        const size = fs.statSync(fullPath).size;
        bytesFreed += size;
        fs.unlinkSync(fullPath);
        deletedCount++;
        console.log(`Deleted legacy file: ${entry.name} (${(size / 1024 / 1024).toFixed(2)} MB)`);
      } 
      // Remove superseded png files if webp version exists and png is not referenced in src
      else if (entry.name.endsWith('.png') && !allSrcText.includes(entry.name)) {
        const baseName = path.parse(entry.name).name;
        const webpSibling = path.join(dir, `${baseName}.webp`);
        if (fs.existsSync(webpSibling)) {
          const size = fs.statSync(fullPath).size;
          bytesFreed += size;
          fs.unlinkSync(fullPath);
          deletedCount++;
          console.log(`Deleted superseded PNG: ${entry.name} (${(size / 1024 / 1024).toFixed(2)} MB)`);
        }
      }
    }
  }
}

cleanDir(publicDir);
console.log(`\nCleanup complete! Removed ${deletedCount} unused files, freed ${(bytesFreed / 1024 / 1024).toFixed(2)} MB of disk space.`);
