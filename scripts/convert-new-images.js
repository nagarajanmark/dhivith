const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertNewImages() {
  const rootDir = path.join(__dirname, '..');
  const publicDir = path.join(rootDir, 'public');
  const schoolImagesDir = path.join(publicDir, 'school_images');

  const mappings = [
    {
      source: 'WhatsApp Image 2026-10-13 at 23.13.24.jpeg',
      target: 'happy-montessori-children-uniform-steps-kinathukadavu.webp',
      maxWidth: 1920,
    },
    {
      source: 'WhatsApp Image 2026-10-13 at 23.13.27.jpeg',
      target: 'morning-assembly-activity-outdoor-turf-coimbatore.webp',
      maxWidth: 1920,
    },
    {
      source: 'WhatsApp Image 2026-10-13 at 23.13.34.jpeg',
      target: 'joyful-circle-time-celebration-preschool-pollachi.webp',
      maxWidth: 1920,
    },
    {
      source: 'WhatsApp Image 2026-10-13 at 23.13.35.jpeg',
      target: 'cheerful-preschool-students-group-lawn-dhivith.webp',
      maxWidth: 1920,
    },
  ];

  for (const item of mappings) {
    const srcPath = path.join(publicDir, item.source);
    const destPath = path.join(schoolImagesDir, item.target);

    if (!fs.existsSync(srcPath)) {
      console.warn(`Source not found: ${srcPath}`);
      continue;
    }

    const originalSize = fs.statSync(srcPath).size;
    await sharp(srcPath)
      .resize({ width: item.maxWidth, withoutEnlargement: true })
      .webp({ quality: 86, effort: 6 })
      .toFile(destPath);

    const newSize = fs.statSync(destPath).size;
    console.log(`Converted: ${item.source} -> ${item.target} (${(originalSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB)`);
  }

  console.log('Conversion of new school images complete!');
}

convertNewImages().catch((err) => {
  console.error('Error converting images:', err);
  process.exit(1);
});
