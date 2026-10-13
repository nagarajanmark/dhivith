const fs = require('fs');
const path = require('path');

const TEACHER_MAP = {
  'eswari.webp': 'mrs-d-eswari-kg-montessori-teacher-kinathukadavu-coimbatore.webp',
  'ramyadevi.webp': 'mrs-k-ramyadevi-kindergarten-educator-pollachi-kinathukadavu.webp',
  'vinothini.jpg': 'mrs-k-vinothini-daycare-caregiver-specialist-kinathukadavu.jpg',
  'rajamanickam.webp': 'mr-s-rajamanickam-campus-safety-caretaker-vadapudur.webp',
};

const teachersDir = path.join(__dirname, '..', 'public', 'teachers');

for (const [oldName, newName] of Object.entries(TEACHER_MAP)) {
  const oldPath = path.join(teachersDir, oldName);
  const newPath = path.join(teachersDir, newName);
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied ${oldName} -> ${newName}`);
  }
}

// Update references in src
const rootDir = path.join(__dirname, '..');
function updateReferences(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      updateReferences(fullPath);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      for (const [oldName, newName] of Object.entries(TEACHER_MAP)) {
        content = content.split(`/teachers/${oldName}`).join(`/teachers/${newName}`);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated paths in: ${path.relative(rootDir, fullPath)}`);
      }
    }
  }
}

updateReferences(path.join(rootDir, 'src'));
console.log('Teacher images SEO copy & update complete!');
