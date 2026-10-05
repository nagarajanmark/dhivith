export interface Program {
  id: string;
  name: string;
  subTitle: string;
  ageRange: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  schedule: string;
  ratio: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  image: string;
  curriculumHighlights: string[];
}

export interface ComprehensiveService {
  id: string;
  title: string;
  targetGrades: string;
  description: string;
  iconName: string;
  badge: string;
  color: string;
  highlights: string[];
}

export interface LearningArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  bgLight: string;
  iconName: string;
  image: string;
  activities: string[];
  developmentalFocus: string;
}

export interface EnvironmentHotspot {
  id: string;
  title: string;
  area: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  parentName: string;
  childInfo: string;
  relationship: string;
  rating: number;
  quote: string;
  avatarBg: string;
  avatarText: string;
  program: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "All" | "Classroom" | "Sensorial" | "Outdoor" | "Practical Life" | "Creative";
  image: string;
  caption: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Curriculum" | "Admissions" | "Daily Life";
}

export const SCHOOL_INFO = {
  name: "DHIVITH EDU CARE",
  tagline: "A Montessori Pre-School",
  motto: "Every Child. Every Opportunity. Every Time.",
  visionMotto: "Better Learning. Better Tomorrow. Brighter Future.",
  successMotto: "Success Begins Here!",
  heroSupport:
    "Nurturing curiosity, independence, creativity, and a lifelong love for learning through the authentic Montessori approach and holistic student-centred coaching.",
  founder: "Mrs. S Tharani",
  qualifications: "M.Sc., PGDM, PGMTTC",
  founderRole: "Founder & Educational Director",
  establishedDate: "July 2, 2024",
  phone: "744 898 1592",
  phoneRaw: "7448981592",
  phoneFormatted: "+91 74489 81592",
  email: "tharani1699@gmail.com",
  address: "S.F.Nos. 382/35, 382/36, S.K.Garden, Site Nos. 16,17, Vadapudur, Kinathukadavu",
  city: "Coimbatore - 641032, Tamil Nadu, India",
  fullAddress: "S.F.Nos. 382/35, 382/36, S.K.Garden, Site Nos. 16,17, Vadapudur, Kinathukadavu, Coimbatore - 641032",
  hours: "Monday – Saturday: 8:30 AM – 7:30 PM (Pre-school + Tuition Batches)",
  preschoolHours: "8:30 AM – 1:30 PM (Extended Day Care till 6:00 PM)",
  tuitionHours: "4:00 PM – 7:30 PM (LKG to Grade 12 Coaching)",
  whatsapp: "917448981592",
  ratio: "1:6 Educator Ratio",
  accreditation: "Certified Montessori & Structured Multi-Board Education",
};

export const PROGRAMS: Program[] = [
  {
    id: "day-care",
    name: "Day Care",
    subTitle: "Loving, Safe & Sensorial Haven",
    ageRange: "1.5 – 6 Years",
    tagline: "A warm home-like extension supporting working parents with tender care and structured rhythms.",
    description:
      "Our Day Care offers cozy climate-controlled rest pods, nutritious meal times, open tactile play stations, and attentive caregivers who ensure your child feels cherished, secure, and happy throughout the day.",
    keyBenefits: [
      "Attentive and caring certified staff",
      "Hygienic feeding, hydration & toilet support",
      "Quiet afternoon nap sanctuary with soothing acoustics",
      "Flexible hourly, half-day & full-day options",
    ],
    schedule: "Full Day: 8:30 AM – 6:00 PM | Half-Day options",
    ratio: "1:4 Caregiver to Child Ratio",
    color: "#0750B8",
    badgeBg: "bg-[#EBF3FF]",
    badgeText: "text-[#0750B8]",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    curriculumHighlights: [
      "Sensory motor exploration and soft play zones",
      "Gentle storytelling, rhymes and musical circles",
      "Daily personal health and developmental logs",
      "Supervised outdoor garden recreation",
    ],
  },
  {
    id: "play-group",
    name: "Play Group",
    subTitle: "First Steps into Joyful Social Learning",
    ageRange: "2 – 3 Years",
    tagline: "Spontaneous curiosity, motor coordination, and joyful vocabulary building.",
    description:
      "Children take their very first exploratory steps into a prepared educational setting. Through open-ended wooden toys, rhythm circles, tactile sensory trays, and nature play, little ones develop self-confidence and speech.",
    keyBenefits: [
      "Low wooden shelf accessibility and sensory bins",
      "Language enrichment with tactile nomenclature cards",
      "Peer sharing, turn-taking, and emotional bonding",
      "Guided motor tracks and balance exercises",
    ],
    schedule: "Morning Batch: 9:00 AM – 12:00 PM",
    ratio: "1:5 Educator Ratio",
    color: "#F36B12",
    badgeBg: "bg-[#FFF2E8]",
    badgeText: "text-[#F36B12]",
    image: "https://images.unsplash.com/photo-1596464716127-f2a829822391?auto=format&fit=crop&w=800&q=80",
    curriculumHighlights: [
      "Tactile color, shape and texture discovery",
      "Rhyme circles, fingerplays and puppet theater",
      "Water play, sand molding and clay modeling",
      "Self-guided snack table and hydration autonomy",
    ],
  },
  {
    id: "pre-kg",
    name: "Pre-KG",
    subTitle: "Montessori Practical Life & Phonics",
    ageRange: "3 – 4 Years",
    tagline: "Uninterrupted work cycles cultivating focus, fine motor control, and clear expression.",
    description:
      "A rich Montessori environment where children engage with Practical Life pouring, spooning, buttoning, and Sandpaper letter tracing, establishing deep neural pathways for concentration and independence.",
    keyBenefits: [
      "Sandpaper letters and multisensory phonetic sounds",
      "Practical Life exercises for grace, courtesy & self-care",
      "Sensorial dimension cylinders and pink tower spatial grading",
      "Botany and nature observation on the garden terrace",
    ],
    schedule: "Daily Session: 8:45 AM – 12:45 PM",
    ratio: "1:6 Educator Ratio",
    color: "#159447",
    badgeBg: "bg-[#EAF8EF]",
    badgeText: "text-[#159447]",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    curriculumHighlights: [
      "Tactile phonics and early blending sounds",
      "Number rods, spindle boxes and concept of zero",
      "Fine motor fasteners, dressing frames and pouring",
      "Expressive art with natural watercolors and easels",
    ],
  },
  {
    id: "lkg",
    name: "LKG (Lower Kindergarten)",
    subTitle: "Language Mastery & Concrete Mathematics",
    ageRange: "4 – 5 Years",
    tagline: "Grasping quantities with golden beads and expressing thoughts through emergent reading.",
    description:
      "Children delve into concrete Montessori mathematics, three-letter phonetic reading, bilingual Hindi/Tamil/English basics, global geography maps, and hands-on science experiments in a peaceful setting.",
    keyBenefits: [
      "Golden bead decimal base-10 system operations",
      "Movable wooden alphabet sentence creation",
      "Hindi basics & vernacular cultural appreciation",
      "World geography puzzle maps and ecosystem studies",
    ],
    schedule: "Full Program: 8:30 AM – 1:15 PM",
    ratio: "1:6 Educator Ratio",
    color: "#F5B900",
    badgeBg: "bg-[#FFF9E5]",
    badgeText: "text-[#9A6700]",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    curriculumHighlights: [
      "Addition and place value up to thousands with golden beads",
      "Sight words, phonetic readers and creative storytelling",
      "Basic Hindi consonants, vowels and spoken phrases",
      "Leaf cabinets, seed germination and weather observation",
    ],
  },
  {
    id: "ukg",
    name: "UKG (Upper Kindergarten)",
    subTitle: "Leadership, Academic Poise & Elementary Readiness",
    ageRange: "5 – 6 Years",
    tagline: "Smooth elementary transition with robust reading fluency and four-operation arithmetic.",
    description:
      "The pinnacle of our early childhood pathway. UKG scholars develop articulate public presentation skills, complex multi-digit calculations, written creative stories, and seamless readiness for CBSE, ICSE, and State Board schools.",
    keyBenefits: [
      "Four-operation arithmetic (Addition, Subtraction, Multiplication)",
      "Fluent reading comprehension and independent journaling",
      "Hindi & English conversation and handwriting excellence",
      "Peer leadership, problem-solving and science demonstrations",
    ],
    schedule: "Full Day: 8:30 AM – 1:30 PM",
    ratio: "1:8 Educator Ratio",
    color: "#0750B8",
    badgeBg: "bg-[#EBF3FF]",
    badgeText: "text-[#0750B8]",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    curriculumHighlights: [
      "Grammar boxes, parts of speech and story composition",
      "Fraction equivalence insets and geometric hierarchies",
      "Scientific experiments on matter, botany and zoology",
      "Preparation for formal school interviews and admissions",
    ],
  },
];

export const COMPREHENSIVE_SERVICES: ComprehensiveService[] = [
  {
    id: "tuition-school",
    title: "Tuition Classes (LKG to Grade 12)",
    targetGrades: "LKG to 12th Standard",
    description:
      "Expert structured academic coaching covering ICSE, CBSE, and Tamil Nadu State Board syllabi with daily concept reinforcement, doubt-clearing, and past-paper drills.",
    iconName: "BookOpen",
    badge: "ICSE • CBSE • State Board",
    color: "#0750B8",
    highlights: [
      "All major subjects covered with syllabus-mapped lesson plans",
      "Special focus on conceptual clarity and exam confidence",
      "Small batch sizes ensuring individual attention",
      "Weekly diagnostic assessments & parent progress updates",
    ],
  },
  {
    id: "engg-maths",
    title: "Engineering Mathematics",
    targetGrades: "Diploma & B.E. / B.Tech Students",
    description:
      "Rigorous, simplified instruction for M1, M2, M3, Transforms, Numerical Methods, Probability & Statistics by highly qualified mathematics educators.",
    iconName: "Calculator",
    badge: "University & Anna Univ Syllabus",
    color: "#F36B12",
    highlights: [
      "Step-by-step problem-solving methods and shortcuts",
      "In-depth coverage of Differential Equations & Vector Calculus",
      "Special back-paper clearance & intensive revision batches",
      "One-on-one doubt resolution and formula mastery",
    ],
  },
  {
    id: "hindi-basics",
    title: "Hindi Basics & Language Coaching",
    targetGrades: "All Age Groups & School Students",
    description:
      "Systematic coaching in Hindi phonetics, Varnamala (Swars & Vyanjans), reading, writing, and conversational fluency aligned with school curricula (CBSE/ICSE) and spoken proficiency.",
    iconName: "Languages",
    badge: "Spoken & Written Fluency",
    color: "#159447",
    highlights: [
      "Correct phonetic pronunciation and script handwriting",
      "Grammar basics, vocabulary expansion and sentence framing",
      "School textbook lesson preparation and exam question practice",
      "Fun conversation sessions to build speaking confidence",
    ],
  },
  {
    id: "after-school",
    title: "After-School Care & Subject Coaching",
    targetGrades: "Preschool to High School",
    description:
      "A complete after-school ecosystem with wholesome snacks, homework guidance, quiet reading nooks, and personalized coaching for all school subjects.",
    iconName: "Sparkles",
    badge: "Stress-Free Learning",
    color: "#F5B900",
    highlights: [
      "Supervised homework completion without parental stress at home",
      "Dedicated teachers for Science, Social, Maths, and Languages",
      "Safe, supportive environment with air-filtered spaces",
      "Holistic child-centered mentoring and discipline",
    ],
  },
];

export const LEARNING_AREAS: LearningArea[] = [
  {
    id: "practical-life",
    title: "Practical Life",
    tagline: "Building Grace, Courtesy & Independence",
    description:
      "Children develop motor control, coordination, concentration, and a profound sense of personal responsibility through authentic everyday activities like pouring, spooning, buttoning, and plant care.",
    color: "#F36B12",
    accentColor: "#F36B12",
    bgLight: "rgba(243, 107, 18, 0.08)",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1596464716127-f2a829822391?auto=format&fit=crop&w=800&q=80",
    activities: [
      "Water pouring, table wiping & flower arranging",
      "Dressing frames & fine motor fasteners",
      "Snack preparation & graceful table manners",
      "Caring for indoor flora & botanical garden beds",
    ],
    developmentalFocus: "Hand-eye coordination, focus stamina, executive function, and self-confidence.",
  },
  {
    id: "sensorial-learning",
    title: "Sensorial Learning",
    tagline: "Refining the Five Senses as Gateways to Intellect",
    description:
      "Montessori sensorial materials isolate specific physical qualities—dimension, weight, texture, pitch, hue, and scent—allowing children to categorize and understand their physical universe.",
    color: "#0750B8",
    accentColor: "#0750B8",
    bgLight: "rgba(7, 80, 184, 0.08)",
    iconName: "Eye",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    activities: [
      "Pink Tower & Broad Stairs spatial blocks",
      "Cylinder blocks & geometric solids",
      "Thermic tablets & acoustic sound cylinders",
      "Chromatic color tablets & gradient sorting",
    ],
    developmentalFocus: "Visual discrimination, cognitive classification, spatial awareness, and memory.",
  },
  {
    id: "language-development",
    title: "Language & Phonetics",
    tagline: "From Tactile Phonetics to Expressive Reading",
    description:
      "A rich phonetic immersion using sandpaper letters, movable alphabets, storytelling, and conversational circles turns language acquisition into an instinctive, joyful exploration.",
    color: "#159447",
    accentColor: "#159447",
    bgLight: "rgba(21, 148, 71, 0.08)",
    iconName: "BookOpen",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    activities: [
      "Sandpaper letters tactile tracing",
      "Large wooden movable alphabet word building",
      "Phonetic object baskets & three-part cards",
      "Expressive poetry, Tamil roots & oral storytelling",
    ],
    developmentalFocus: "Phonemic awareness, vocabulary expansion, early emergent reading, and articulate speech.",
  },
  {
    id: "mathematics",
    title: "Mathematics",
    tagline: "Grasping Quantities Before Abstract Symbols",
    description:
      "Concrete manipulatives—number rods, spindle boxes, and golden bead decimal systems—allow young minds to physically touch and experience mathematical concepts before writing numerals.",
    color: "#F5B900",
    accentColor: "#D9A300",
    bgLight: "rgba(245, 185, 0, 0.12)",
    iconName: "Calculator",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    activities: [
      "Red & blue numerical rods",
      "Golden bead decimal base-10 system",
      "Spindle boxes & concept of zero",
      "Seguin boards & teen/tens numerical formation",
    ],
    developmentalFocus: "Number sense, decimal logic, algebraic patterns, and linear reasoning.",
  },
  {
    id: "cultural-studies",
    title: "Cultural & Science",
    tagline: "Connecting with Nature & Global Humanity",
    description:
      "Botany, zoology, geography, and world cultures are integrated into daily lessons, instilling a deep reverence for biodiversity and peaceful multicultural stewardship.",
    color: "#0750B8",
    accentColor: "#0750B8",
    bgLight: "rgba(7, 80, 184, 0.08)",
    iconName: "Globe",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    activities: [
      "Wooden puzzle maps of continents & Tamil Nadu geography",
      "Botany leaf cabinets & live seedling tracking",
      "Zoological classification cards",
      "Cultural celebration & global music immersion",
    ],
    developmentalFocus: "Global empathy, scientific inquiry, environmental stewardship, and curious mindset.",
  },
  {
    id: "creative-expression",
    title: "Creative Expression",
    tagline: "Process-Led Art, Rhythm, Movement & Wonder",
    description:
      "Unstructured exploration with non-toxic clay, natural pigments, open-ended textile crafts, and melodic instruments encourages genuine creative joy free from restrictive adult templates.",
    color: "#F36B12",
    accentColor: "#F36B12",
    bgLight: "rgba(243, 107, 18, 0.08)",
    iconName: "Palette",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80",
    activities: [
      "Natural watercolor & gouache easels",
      "Pottery wheel & sensory clay sculpting",
      "Percussion rhythm circles & Orff instruments",
      "Imaginative dramatic play & nature collage",
    ],
    developmentalFocus: "Emotional expression, aesthetic sensibility, original imagination, and collaborative harmony.",
  },
];

export const ENVIRONMENT_HOTSPOTS: EnvironmentHotspot[] = [
  {
    id: "sunlit-ateliers",
    title: "Sunlit Prepared Classrooms",
    area: "Indoor Learning Spaces",
    description:
      "Flooded with diffuse natural daylight, non-toxic blonde wood furnishings, and open floor mats designed at the child's exact physical scale in Kinathukadavu.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    features: [
      "Child-height open cedar shelving",
      "Ergonomic Finnish birch seating",
      "Low windows with garden view",
      "Zero plastic / 100% natural materials",
    ],
  },
  {
    id: "sensorial-geometry",
    title: "Sensorial & Math Sanctuary",
    area: "Cognitive Development",
    description:
      "Dedicated carpets for 3D geometric solids, golden bead decimal cabinets, and binominal cubes for sensory mathematical reasoning.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    features: [
      "Isolated quiet concentration pods",
      "Complete AMI wooden material suite",
      "Felt work mats for floor exercises",
      "Natural lighting with anti-glare louvers",
    ],
  },
  {
    id: "reading-sanctuary",
    title: "Cozy Literature & Language Nook",
    area: "Linguistic Immersion",
    description:
      "Plush organic cotton floor cushions, forward-facing curated international picture books, and tactile phonics stations.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    features: [
      "Over 1,000+ age-graded picture books",
      "Audio listening and storytelling corner",
      "Sandpaper letter workstations",
      "Calm, quiet ambient acoustic baffles",
    ],
  },
  {
    id: "botanical-terrace",
    title: "Organic Garden & Nature Terrace",
    area: "Outdoor Eco-Laboratory",
    description:
      "Raised herb beds, butterfly host plants, rain gauge stations, and child-safe gardening tools connecting students directly with earth's rhythms.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a829822391?auto=format&fit=crop&w=800&q=80",
    features: [
      "Child-tended organic vegetable patch",
      "Sensory herbal smelling pathway",
      "Composting & recycling observation unit",
      "Weather monitoring station",
    ],
  },
  {
    id: "practical-kitchenette",
    title: "Child-Sized Culinary Studio",
    area: "Practical Life Hub",
    description:
      "Specially designed safe prep counters with functioning sinks at 55cm height, allowing children to peel fruit, bake bread, and wash dishes autonomously.",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80",
    features: [
      "Tempered safety utensils for small hands",
      "Filtered water pouring faucets",
      "Real ceramic cups and dish drying racks",
      "Fresh daily snack preparation",
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Self-Directed Math Exploration",
    category: "Sensorial",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    caption: "Children arranging golden beads to understand base-10 numerical hierarchy.",
  },
  {
    id: "g2",
    title: "Practical Life Pouring Exercise",
    category: "Practical Life",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    caption: "Delicate liquid pouring that trains fine motor control, balance, and patience.",
  },
  {
    id: "g3",
    title: "Morning Sunlit Work Cycle",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    caption: "The peaceful rhythm of our prepared Montessori learning environment.",
  },
  {
    id: "g4",
    title: "Botanical Garden Exploration",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    caption: "Children observing seedling germination and measuring leaf growth on the terrace.",
  },
  {
    id: "g5",
    title: "Creative Painting Atelier",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80",
    caption: "Process-oriented expression with natural gouache pigments and large canvas easels.",
  },
  {
    id: "g6",
    title: "Sandpaper Letters & Phonics",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    caption: "Tactile multisensory tracing that embeds alphabet sounds deeply into muscle memory.",
  },
  {
    id: "g7",
    title: "Peer Collaboration & Story Circles",
    category: "Classroom",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    caption: "Older students joyfully mentoring younger peers during collaborative reading hour.",
  },
  {
    id: "g8",
    title: "Natural Wooden Block Architecture",
    category: "Sensorial",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    caption: "Constructing balance bridges with hardwood architectural components.",
  },
  {
    id: "g9",
    title: "Outdoor Sensory Herb Harvest",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80",
    caption: "Harvesting fresh mint and rosemary for our sensorial scent matching activity.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    parentName: "Karthik & Revathi Sundaram",
    childInfo: "Parents of Kavin (Age 4 - LKG)",
    relationship: "Kinathukadavu Family",
    rating: 5,
    quote:
      "Sending Kavin to Dhivith Edu Care under Mrs. S Tharani's visionary mentorship was the best decision. The Montessori environment in Kinathukadavu has given him unbelievable self-reliance. He counts with golden beads, reads with excitement, and loves school every single day.",
    avatarBg: "bg-[#0750B8]",
    avatarText: "KS",
    program: "LKG Montessori",
  },
  {
    id: "t2",
    parentName: "Bhuvaneshwari & Prakash Raj",
    childInfo: "Parents of Nila (Pre-KG) & Surya (Grade 8 Tuition)",
    relationship: "Parent of Preschooler & High Schooler",
    rating: 5,
    quote:
      "Dhivith Edu Care is a blessing for Coimbatore families. Nila has blossomed in the Pre-KG Montessori room, while Surya receives outstanding CBSE math and science coaching in the evening. The individual attention for every child is truly genuine.",
    avatarBg: "bg-[#159447]",
    avatarText: "BP",
    program: "Pre-KG & Grade 8 Tuition",
  },
  {
    id: "t3",
    parentName: "Dr. Venkatesh & Divya",
    childInfo: "Parents of Diya (UKG Graduate)",
    relationship: "Coimbatore Family",
    rating: 5,
    quote:
      "The academic foundation Diya received here—especially phonics, arithmetic, and Hindi basics—made her primary school entrance effortless. Mrs. Tharani and the educators treat every child with extraordinary care and respect.",
    avatarBg: "bg-[#F36B12]",
    avatarText: "VD",
    program: "UKG Graduation",
  },
  {
    id: "t4",
    parentName: "Manoj & Swathi",
    childInfo: "Parents of Aadvik (Day Care & Play Group)",
    relationship: "Working Parents",
    rating: 5,
    quote:
      "As working parents in Coimbatore, finding a safe, hygienic, and enriching day care was our topmost priority. Dhivith Edu Care provides the warmest care, nutritious meal guidance, and lovely daily updates.",
    avatarBg: "bg-[#F5B900]",
    avatarText: "MS",
    program: "Day Care & Play Group",
  },
];

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "When was Dhivith Edu Care established and who leads the institution?",
    answer:
      "Dhivith Edu Care was established on July 2, 2024, under the visionary leadership of Mrs. S Tharani, M.Sc., PGDM, PGMTTC (Montessori Specialist & Educational Director). Located in Vadapudur, Kinathukadavu, Coimbatore, our mission is to provide world-class Montessori preschooling along with student-centred school tuitions and engineering mathematics.",
  },
  {
    category: "Curriculum",
    question: "What programs are offered for early childhood and preschoolers?",
    answer:
      "We offer comprehensive early learning stages: Day Care (1.5–6 yrs), Play Group (2–3 yrs), Pre-KG (3–4 yrs), LKG (4–5 yrs), and UKG (5–6 yrs), incorporating authentic Montessori didactic materials, phonics, sensorial math, and bilingual communication.",
  },
  {
    category: "Admissions",
    question: "What tuition and after-school academic coaching services do you provide?",
    answer:
      "We provide comprehensive tuition classes from LKG to Grade 12 across ICSE, CBSE, and State Board syllabi, coaching for all subjects, Engineering Mathematics (university & diploma level), Hindi Basics, and safe After-School care support.",
  },
  {
    category: "Daily Life",
    question: "Where is the campus located and how can parents visit or contact?",
    answer:
      "Our campus is located at S.F.Nos. 382/35, 382/36, S.K.Garden, Site Nos. 16,17, Vadapudur, Kinathukadavu, Coimbatore - 641032. You can call or WhatsApp us at +91 74489 81592 or email tharani1699@gmail.com to book a campus walkthrough.",
  },
  {
    category: "Curriculum",
    question: "What makes your coaching and tuition student-centred and stress-free?",
    answer:
      "We believe that 'Success Begins Here!'. We maintain intimate batch sizes, avoid rote pressure, ensure personalized conceptual explanations for every child, and provide regular diagnostic feedback so students build genuine academic confidence.",
  },
  {
    category: "Daily Life",
    question: "What safety, hygiene, and educator ratios are maintained?",
    answer:
      "We maintain a close 1:4 ratio for Day Care and 1:6 for Montessori classes. The premises feature child-height rounded Scandinavian wood furniture, CCTV monitoring, medical first-aid readiness, and strict hygiene protocols.",
  },
];

export const DAILY_RHYTHM = [
  {
    time: "8:30 – 9:00 AM",
    title: "Welcoming & Graceful Entry",
    description: "Personal greeting at the door, changing into indoor footwear, self-directed cloakroom organization.",
    icon: "Sunrise",
    color: "#0750B8",
  },
  {
    time: "9:00 – 11:30 AM",
    title: "Uninterrupted Montessori Work Cycle",
    description: "Individual and small-group lessons with specialized didactic materials across all core areas.",
    icon: "Compass",
    color: "#159447",
  },
  {
    time: "11:30 – 12:15 PM",
    title: "Community Circle & Mindful Snack",
    description: "Storytelling, rhymes, rhythm instruments, followed by child-prepared wholesome snacks.",
    icon: "HeartHandshake",
    color: "#F36B12",
  },
  {
    time: "12:15 – 1:30 PM",
    title: "Outdoor Nature Exploration & Lunch",
    description: "Garden terrace exploration, sensory tables, balance tracks, followed by nutritious lunch.",
    icon: "Sun",
    color: "#F5B900",
  },
  {
    time: "1:30 – 4:00 PM",
    title: "Quiet Rest & Day Care Atelier",
    description: "Tranquil rest sanctuary for toddlers, creative sensory art, and storytelling for day care children.",
    icon: "Moon",
    color: "#0750B8",
  },
  {
    time: "4:00 – 7:30 PM",
    title: "Tuition Classes & Subject Coaching",
    description: "Dedicated evening coaching batches for LKG to Grade 12 (CBSE/ICSE/State), Hindi, & Engineering Maths.",
    icon: "BookOpen",
    color: "#159447",
  },
];
