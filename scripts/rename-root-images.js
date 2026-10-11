const fs = require('fs');
const path = require('path');

const ROOT_IMAGE_MAP = {
  'public/sitting.webp': 'public/happy-children-sitting-dhivith-edu-care-kinathukadavu.webp',
  'public/together.webp': 'public/children-learning-together-montessori-coimbatore.webp',
  'public/tree.webp': 'public/holistic-nature-learning-tree-dhivith.webp',
  'public/teachers/tharani.png': 'public/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png',
};

const URL_REPLACE_MAP = {
  '/sitting.webp': '/happy-children-sitting-dhivith-edu-care-kinathukadavu.webp',
  '/together.webp': '/children-learning-together-montessori-coimbatore.webp',
  '/tree.webp': '/holistic-nature-learning-tree-dhivith.webp',
  '/teachers/tharani.png': '/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png',
};

const rootDir = path.join(__dirname, '..');

for (const [srcRel, destRel] of Object.entries(ROOT_IMAGE_MAP)) {
  const src = path.join(rootDir, srcRel);
  const dest = path.join(rootDir, destRel);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${srcRel} -> ${destRel}`);
  }
}

function updateReferences(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      updateReferences(fullPath);
    } else if (
      entry.name.endsWith('.ts') ||
      entry.name.endsWith('.tsx') ||
      entry.name.endsWith('.json')
    ) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      for (const [oldUrl, newUrl] of Object.entries(URL_REPLACE_MAP)) {
        content = content.split(oldUrl).join(newUrl);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated paths in: ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
}

updateReferences(path.join(rootDir, 'src'));
console.log('Root images SEO renaming complete!');
