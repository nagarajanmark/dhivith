const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      // Match .jpg, .jpeg, .png, and double extensions like .jpg.jpeg
      if (entry.name.endsWith('.jpg.jpeg') || ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        let baseName = entry.name;
        if (baseName.endsWith('.jpg.jpeg')) {
          baseName = baseName.replace(/\.jpg\.jpeg$/, '');
        } else {
          baseName = path.parse(entry.name).name;
        }

        const outPath = path.join(dirPath, `${baseName}.webp`);
        const originalSize = fs.statSync(fullPath).size;

        try {
          await sharp(fullPath)
            .resize({ width: 1920, withoutEnlargement: true })
            .webp({ quality: 86, effort: 6 })
            .toFile(outPath);

          const newSize = fs.statSync(outPath).size;
          const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
          console.log(`Converted: ${entry.name} -> ${baseName}.webp | ${(originalSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB (${savings}% saved)`);
        } catch (err) {
          console.error(`Error converting ${entry.name}:`, err.message);
        }
      }
    }
  }
}

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  console.log('Starting WebP conversion for public directory:', publicDir);
  await processDirectory(publicDir);
  console.log('WebP conversion completed successfully!');
}

run();
