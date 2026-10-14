const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function createIcoFromPngBuffers(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * numImages;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(numImages, 4); // number of images

  const entries = [];
  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // image offset in file
    entries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([
    header,
    ...entries,
    ...pngBuffers.map((p) => p.buffer),
  ]);
}

async function generateFavicons() {
  const rootDir = path.join(__dirname, '..');
  const logoPath = path.join(rootDir, 'public', 'logo.png');

  if (!fs.existsSync(logoPath)) {
    console.error('logo.png not found at', logoPath);
    process.exit(1);
  }

  // Extract the tree emblem (leaves, book, children, star, Tamil letter) for optimal clarity in tiny favicon sizes
  const treeEmblem = sharp(logoPath).extract({
    left: 130,
    top: 0,
    width: 967,
    height: 870,
  });

  // Make square with transparent padding
  const maxDim = 967;
  const squareEmblem = sharp({
    create: {
      width: maxDim,
      height: maxDim,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  }).composite([
    {
      input: await treeEmblem.toBuffer(),
      top: Math.round((maxDim - 870) / 2),
      left: 0,
    },
  ]);

  const squareBuffer = await squareEmblem.png().toBuffer();

  // Generate PNG buffers for ICO (16x16, 32x32, 48x48)
  const sizes = [16, 32, 48];
  const pngBuffers = [];

  for (const size of sizes) {
    const buf = await sharp(squareBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ width: size, height: size, buffer: buf });
  }

  const icoBuffer = createIcoFromPngBuffers(pngBuffers);

  // Targets for favicon.ico
  const appFaviconPath = path.join(rootDir, 'src', 'app', 'favicon.ico');
  const publicFaviconPath = path.join(rootDir, 'public', 'favicon.ico');
  fs.writeFileSync(appFaviconPath, icoBuffer);
  fs.writeFileSync(publicFaviconPath, icoBuffer);
  console.log('Updated favicon.ico (multi-resolution 16x16, 32x32, 48x48)');

  // Generate icon.png (32x32)
  const appIcon32Path = path.join(rootDir, 'src', 'app', 'icon.png');
  const publicIconPath = path.join(rootDir, 'public', 'icon.png');
  const icon32Buffer = await sharp(squareBuffer)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(appIcon32Path, icon32Buffer);
  fs.writeFileSync(publicIconPath, icon32Buffer);
  console.log('Updated icon.png (32x32)');

  // Generate public/favicon-32x32.png and public/favicon-16x16.png
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-32x32.png'), icon32Buffer);
  const icon16Buffer = await sharp(squareBuffer)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public', 'favicon-16x16.png'), icon16Buffer);

  // Generate apple-icon.png (180x180)
  const appAppleIconPath = path.join(rootDir, 'src', 'app', 'apple-icon.png');
  const publicAppleIconPath = path.join(rootDir, 'public', 'apple-icon.png');
  const appleIconBuffer = await sharp(squareBuffer)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(appAppleIconPath, appleIconBuffer);
  fs.writeFileSync(publicAppleIconPath, appleIconBuffer);
  fs.writeFileSync(path.join(rootDir, 'public', 'apple-touch-icon.png'), appleIconBuffer);
  console.log('Updated apple-icon.png (180x180)');

  // Clean test files if any
  const test1 = path.join(rootDir, 'public', 'test-tree-icon.png');
  const test2 = path.join(rootDir, 'public', 'test-tree-icon2.png');
  if (fs.existsSync(test1)) fs.unlinkSync(test1);
  if (fs.existsSync(test2)) fs.unlinkSync(test2);

  console.log('All favicon & icon assets successfully generated from school logo!');
}

generateFavicons().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
