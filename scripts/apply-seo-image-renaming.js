const fs = require('fs');
const path = require('path');

const IMAGE_SEO_MAP = {
  // Programs
  '1000223388.webp': 'dhivith-daycare-preschool-haven-kinathukadavu.webp',
  '1000227830.webp': 'dhivith-playgroup-early-learning-coimbatore.webp',
  '1000227847.webp': 'dhivith-pre-kg-montessori-curriculum-pollachi.webp',
  '1000228329.webp': 'dhivith-lkg-kindergarten-foundation-palladam.webp',
  '1000245525.webp': 'dhivith-ukg-primary-readiness-tirupur.webp',

  // Core Pillars / Learning Areas
  '1000264797.webp': 'montessori-practical-life-motor-skills-kinathukadavu.webp',
  '1000264802.webp': 'montessori-sensorial-tactile-learning-coimbatore.webp',
  '1000306293.webp': 'montessori-phonics-language-immersion-pollachi.webp',
  '1000309031.webp': 'montessori-mathematics-number-reasoning-kinathukadavu.webp',
  '1000364177.webp': 'montessori-cultural-science-geography-tirupur.webp',
  '1000380645.webp': 'montessori-creative-expression-art-palladam.webp',

  // Environment Hotspots
  '1000404467.webp': 'sunlit-prepared-montessori-classroom-kinathukadavu.webp',
  '1000404470.webp': 'sensorial-geometry-math-sanctuary-coimbatore.webp',
  '1000410342.webp': 'cozy-literature-reading-library-nook-pollachi.webp',
  '1000438373.webp': 'botanical-nature-garden-terrace-kinathukadavu.webp',
  '1000449027.webp': 'child-sized-activity-culinary-studio-palladam.webp',

  // Gallery & Activities
  '1000453992.webp': 'paper-cup-pyramid-stacking-activity-kinathukadavu.webp',
  '1000449608.webp': 'sensory-ball-sorting-color-trays-coimbatore.webp',
  '1000452018.webp': 'montessori-number-rods-math-coaching-pollachi.webp',
  '1000452097.webp': 'safe-outdoor-turf-play-area-kinathukadavu.webp',
  '1000454520.webp': 'montessori-self-directed-work-cycle-coimbatore.webp',
  '1000450316.webp': 'practical-life-fine-motor-coordination-tirupur.webp',
  '1000501517.webp': 'kidspire-student-achievement-awards-dhivith.webp',
  '1000501518.webp': 'kidspire-annual-celebration-stage-honors-kinathukadavu.webp',
  '1000227874.webp': 'evening-tuition-batches-grade-1-to-12-pollachi.webp',
  '1000227888.webp': 'toddler-sensorial-discovery-wooden-toys-kinathukadavu.webp',
  '1000223395.webp': 'wooden-alphabet-letter-matching-board-coimbatore.webp',
  '1000223404.webp': '3d-animal-picture-cube-puzzle-blocks-palladam.webp',
  '1000227870.webp': 'montessori-teacher-guidance-nomenclature-kinathukadavu.webp',
  '1000591351.webp': 'creative-crayon-drawing-coloring-art-tirupur.webp',
  '1000591345.webp': 'dhivith-edu-care-school-campus-vadapudur-kinathukadavu.webp',

  // Additional campus items
  '1000449035.webp': 'montessori-child-activity-workspace-coimbatore.webp',
  '1000591348.webp': 'child-safe-learning-environment-kinathukadavu.webp',
  '1000230750.webp': 'montessori-tactile-sensorial-exploration-pollachi.webp',
  '1000227839.webp': 'preschool-social-peer-play-vadapudur.webp',
};

const schoolImagesDir = path.join(__dirname, '..', 'public', 'school_images');

// 1. Copy original images to SEO-friendly filenames in public/school_images
console.log('Copying images to SEO names...');
let copiedCount = 0;
for (const [oldName, newName] of Object.entries(IMAGE_SEO_MAP)) {
  const oldPath = path.join(schoolImagesDir, oldName);
  const newPath = path.join(schoolImagesDir, newName);

  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    copiedCount++;
  } else {
    console.warn(`Source not found: ${oldName}`);
  }
}
console.log(`Successfully created ${copiedCount} SEO-named images in public/school_images!`);

// 2. Update references in src/ directory
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

      for (const [oldName, newName] of Object.entries(IMAGE_SEO_MAP)) {
        content = content.split(`/school_images/${oldName}`).join(`/school_images/${newName}`);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated image paths in: ${path.relative(path.join(__dirname, '..'), fullPath)}`);
      }
    }
  }
}

console.log('Updating code references...');
updateReferences(path.join(__dirname, '..', 'src'));
console.log('Finished updating code references to SEO image names!');
