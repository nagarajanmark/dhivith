const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') || entry.name.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Replace /school_images/XXXXX.jpg.jpeg with /school_images/XXXXX.webp
      content = content.replace(/\/school_images\/([a-zA-Z0-9_-]+)\.jpg\.jpeg/g, '/school_images/$1.webp');
      content = content.replace(/\/school_images\/([a-zA-Z0-9_-]+)\.jpg/g, '/school_images/$1.webp');
      content = content.replace(/\/school_images\/([a-zA-Z0-9_-]+)\.jpeg/g, '/school_images/$1.webp');

      // Replace common png assets
      content = content.replace(/about-bg\.png/g, 'about-bg.webp');
      content = content.replace(/sitting\.png/g, 'sitting.webp');
      content = content.replace(/together\.png/g, 'together.webp');
      content = content.replace(/tree\.png/g, 'tree.webp');
      content = content.replace(/clouds\.png/g, 'clouds.webp');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated image paths in: ${entry.name}`);
      }
    }
  }
}

const srcDir = path.join(__dirname, '..', 'src');
processDir(srcDir);
console.log('All image paths updated to .webp successfully!');
