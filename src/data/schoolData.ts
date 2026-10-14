export interface Program {
  id: string;
  name: string;
  nameTa?: string;
  subTitle: string;
  subTitleTa?: string;
  ageRange: string;
  ageRangeTa?: string;
  tagline: string;
  taglineTa?: string;
  description: string;
  descriptionTa?: string;
  keyBenefits: string[];
  keyBenefitsTa?: string[];
  schedule: string;
  scheduleTa?: string;
  ratio: string;
  ratioTa?: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  image: string;
  curriculumHighlights: string[];
  curriculumHighlightsTa?: string[];
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
  titleTa?: string;
  category: "All" | "Classroom" | "Sensorial" | "Outdoor" | "Practical Life" | "Creative";
  image: string;
  caption: string;
  captionTa?: string;
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
  hours: "Monday – Saturday: 5:00 AM – 9:30 PM (Preschool + Morning & Evening Tuitions)",
  preschoolHours: "8:30 AM – 1:30 PM (Extended Day Care till 6:00 PM)",
  tuitionMorning: "5:00 AM – 7:00 AM",
  tuitionEvening: "5:00 PM – 9:30 PM",
  tuitionStaffCount: "8 Dedicated Evening Staff Members",
  tuitionHours: "Morning: 5:00 AM – 7:00 AM | Evening: 5:00 PM – 9:30 PM (8 Evening Staffs)",
  whatsapp: "917448981592",
  instagram: "https://instagram.com/dhivith_edu_care?psln=MTRmNGRtd2EzMGlydg%3D%3D",
  youtube: "https://www.youtube.com/@dhivith46",
  ratio: "1:10 Educator Ratio",
  accreditation: "Certified Montessori & Structured Multi-Board Education",
};

export const PROGRAMS: Program[] = [
  {
    id: "day-care",
    name: "Day Care",
    nameTa: "டே கேர் (பகல் நேர பராமரிப்பு)",
    subTitle: "Loving, Safe & Sensorial Haven",
    subTitleTa: "அன்பான, பாதுகாப்பான & ஊட்டமளிக்கும் சூழல்",
    ageRange: "1.5 – 6 Years",
    ageRangeTa: "1.5 – 6 ஆண்டுகள்",
    tagline: "A warm home-like extension supporting working parents with tender care and structured rhythms.",
    taglineTa: "பணிபுரியும் பெற்றோரின் சுமையை குறைத்து, குழந்தைகளை தாய்மடி போன்ற கனிவுடன் அரவணைக்கும் சூழல்.",
    description:
      "Our Day Care offers cozy climate-controlled rest pods, nutritious meal times, open tactile play stations, and attentive caregivers who ensure your child feels cherished, secure, and happy throughout the day.",
    descriptionTa:
      "எங்கள் டே கேர் மையம் பாதுகாப்பான மற்றும் குளிரூட்டப்பட்ட ஓய்வறைகள், சத்தான உணவு நேரம், தொடு உணர்வு விளையாட்டுப் பொருட்கள் மற்றும் அக்கறையுள்ள ஆசிரியர்களைக் கொண்டு உங்கள் குழந்தையை நாள் முழுவதும் மகிழ்ச்சியாகவும் பாதுகாப்பாகவும் வைக்கிறது.",
    keyBenefits: [
      "Attentive and caring certified staff",
      "Hygienic feeding, hydration & toilet support",
      "Quiet afternoon nap sanctuary with soothing acoustics",
      "Flexible hourly, half-day & full-day options",
    ],
    keyBenefitsTa: [
      "சான்றளிக்கப்பட்ட அன்பான மற்றும் கனிவான ஆசிரியர்கள்",
      "சுகாதாரமான உணவு, குடிநீர் மற்றும் கழிப்பறைப் பழக்கவழக்க வழிகாட்டல்",
      "அமைதியான மற்றும் இதமான பிற்பகல் உறக்கப் பகுதி",
      "நெகிழ்வான மணிநேரம், அரை நாள் மற்றும் முழு நாள் விருப்பங்கள்",
    ],
    schedule: "Full Day: 8:30 AM – 6:00 PM | Half-Day options",
    scheduleTa: "முழு நாள்: காலை 8:30 – மாலை 6:00 | அரை நாள் விருப்பங்கள்",
    ratio: "1:4 Caregiver to Child Ratio",
    ratioTa: "1:4 பராமரிப்பாளர் விகிதம்",
    color: "#0750B8",
    badgeBg: "bg-[#EBF3FF]",
    badgeText: "text-[#0750B8]",
    image: "/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp",
    curriculumHighlights: [
      "Sensory motor exploration and soft play zones",
      "Gentle storytelling, rhymes and musical circles",
      "Daily personal health and developmental logs",
      "Supervised outdoor garden recreation",
    ],
    curriculumHighlightsTa: [
      "உடலியக்க வளர்ச்சி மற்றும் மென்மையான விளையாட்டு மண்டலங்கள்",
      "இனிய கதைகள், பாடல்கள் மற்றும் இசை வட்டங்கள்",
      "தினசரி தனிப்பட்ட சுகாதார மற்றும் வளர்ச்சி பதிவுகள்",
      "கண்காணிக்கப்படும் திறந்தவெளி பூங்கா விளையாட்டுகள்",
    ],
  },
  {
    id: "play-group",
    name: "Play Group",
    nameTa: "ப்ளே குரூப் (மழலையர் விளையாட்டு வகுப்பு)",
    subTitle: "First Steps into Joyful Social Learning",
    subTitleTa: "மகிழ்ச்சியான சமூகக் கற்றலின் முதல் படி",
    ageRange: "2 – 3 Years",
    ageRangeTa: "2 – 3 ஆண்டுகள்",
    tagline: "Spontaneous curiosity, motor coordination, and joyful vocabulary building.",
    taglineTa: "இயற்கையான ஆர்வம், உடல் அசைவு ஒருங்கிணைப்பு மற்றும் இனிய மொழி வளர்ச்சி.",
    description:
      "Children take their very first exploratory steps into a prepared educational setting. Through open-ended wooden toys, rhythm circles, tactile sensory trays, and nature play, little ones develop self-confidence and speech.",
    descriptionTa:
      "குழந்தைகள் கல்விச் சூழலில் தங்களின் முதல் பரிசோதனைப் படிகளை வைக்கின்றனர். மர பொம்மைகள், இசை வட்டங்கள், தொடு உணர்வு தட்டுகள் மற்றும் இயற்கையோடு இணைந்த விளையாட்டு மூலம் குழந்தைகள் தன்னம்பிக்கையையும் பேச்சாற்றலையும் வளர்க்கின்றனர்.",
    keyBenefits: [
      "Low wooden shelf accessibility and sensory bins",
      "Language enrichment with tactile nomenclature cards",
      "Peer sharing, turn-taking, and emotional bonding",
      "Guided motor tracks and balance exercises",
    ],
    keyBenefitsTa: [
      "குழந்தைகள் எளிதில் எட்டும் மர அலமாரிகள் மற்றும் தொடு உணர்வுப் பொருட்கள்",
      "பட அட்டைகள் மூலம் சொல்லாற்றல் மற்றும் மொழி வளம் பெருக்குதல்",
      "நண்பர்களுடன் பகிர்தல், வரிசை முறை மற்றும் பாசப் பிணைப்பு",
      "உடல் சமநிலை மற்றும் தசை ஒருங்கிணைப்பு பயிற்சிகள்",
    ],
    schedule: "Morning Batch: 9:00 AM – 12:00 PM",
    scheduleTa: "காலை பிரிவு: 9:00 – 12:00",
    ratio: "1:5 Educator Ratio",
    ratioTa: "1:5 ஆசிரியர் விகிதம்",
    color: "#F36B12",
    badgeBg: "bg-[#FFF2E8]",
    badgeText: "text-[#F36B12]",
    image: "/school_images/dhivith-playgroup-early-learning-coimbatore.webp",
    curriculumHighlights: [
      "Tactile color, shape and texture discovery",
      "Rhyme circles, fingerplays and puppet theater",
      "Water play, sand molding and clay modeling",
      "Self-guided snack table and hydration autonomy",
    ],
    curriculumHighlightsTa: [
      "வண்ணங்கள், வடிவங்கள் மற்றும் தொடு உணர்வு அறிதல்",
      "பாடல்கள், கை அசைவு விளையாட்டுகள் மற்றும் பொம்மலாட்டம்",
      "நீர் விளையாட்டு, மணல் மற்றும் களிமண் கலைப் படைப்புகள்",
      "சுய உணவு உட்கொள்ளுதல் மற்றும் குடிநீர் குடித்தல் பயிற்சி",
    ],
  },
  {
    id: "pre-kg",
    name: "Pre-KG",
    nameTa: "ப்ரீ-கேஜி (Pre-KG)",
    subTitle: "Montessori Practical Life & Phonics",
    subTitleTa: "மாண்டிசோரி செய்முறை வாழ்வியல் & உச்சரிப்பு பயிற்சி",
    ageRange: "3 – 4 Years",
    ageRangeTa: "3 – 4 ஆண்டுகள்",
    tagline: "Uninterrupted work cycles cultivating focus, fine motor control, and clear expression.",
    taglineTa: "தடையில்லா கற்றல் சுழற்சி மூலம் கூர்ந்த கவனம், கைவிரல் திறன் மற்றும் தெளிவான பேச்சு.",
    description:
      "A rich Montessori environment where children engage with Practical Life pouring, spooning, buttoning, and Sandpaper letter tracing, establishing deep neural pathways for concentration and independence.",
    descriptionTa:
      "குழந்தைகள் திரவம் ஊற்றுதல், கரண்டி பயன்படுத்துதல், பொத்தான் போடுதல் போன்ற நடைமுறை வாழ்வியல் பயிற்சிகள் மற்றும் மணல்தாள் எழுத்துக்களைத் தொட்டுப் பார்த்து ஆழமான கவனத்தையும் தன்னம்பிக்கையையும் வளர்க்கும் மாண்டிசோரி சூழல்.",
    keyBenefits: [
      "Sandpaper letters and multisensory phonetic sounds",
      "Practical Life exercises for grace, courtesy & self-care",
      "Sensorial dimension cylinders and pink tower spatial grading",
      "Botany and nature observation on the garden terrace",
    ],
    keyBenefitsTa: [
      "மணல்தாள் எழுத்துக்கள் மற்றும் பல உணர்வு ஒலி உச்சரிப்புப் பயிற்சி (Phonics)",
      "மரியாதை, பண்பு மற்றும் சுய பராமரிப்புக்கான செய்முறை வாழ்வியல் பயிற்சிகள்",
      "வடிவ உருளைகள் மற்றும் இளஞ்சிவப்பு கோபுரம் (Pink Tower) கொண்டு முப்பரிமாண கற்றல்",
      "தோட்டப் பகுதியில் தாவரங்கள் மற்றும் இயற்கை கவனிப்பு",
    ],
    schedule: "Daily Session: 8:45 AM – 12:45 PM",
    scheduleTa: "தினசரி வகுப்பு: காலை 8:45 – மதியம் 12:45",
    ratio: "1:10 Educator Ratio",
    ratioTa: "1:10 ஆசிரியர் விகிதம்",
    color: "#159447",
    badgeBg: "bg-[#EAF8EF]",
    badgeText: "text-[#159447]",
    image: "/school_images/dhivith-pre-kg-montessori-curriculum-pollachi.webp",
    curriculumHighlights: [
      "Tactile phonics and early blending sounds",
      "Number rods, spindle boxes and concept of zero",
      "Fine motor fasteners, dressing frames and pouring",
      "Expressive art with natural watercolors and easels",
    ],
    curriculumHighlightsTa: [
      "தொடு உணர்வு ஒலிப்பு முறை மற்றும் ஆரம்ப எழுத்துக்கூட்டல்",
      "எண்ணிக்கைக் குச்சிகள், சுழல் பெட்டிகள் மற்றும் பூஜ்ஜியத்தின் தத்துவம்",
      "ஆடை சட்டகங்கள், பொத்தான் மாட்டுதல் மற்றும் ஊற்றுதல் நுண்திறன்",
      "இயற்கை வண்ணங்கள் மற்றும் வரைதல் மூலம் படைப்பாற்றல்",
    ],
  },
  {
    id: "lkg",
    name: "LKG (Lower Kindergarten)",
    nameTa: "எல்.கே.ஜி (LKG - கீழ் மழலையர்)",
    subTitle: "Language Mastery & Concrete Mathematics",
    subTitleTa: "மொழி ஆளுமை & செய்முறை கணிதம்",
    ageRange: "4 – 5 Years",
    ageRangeTa: "4 – 5 ஆண்டுகள்",
    tagline: "Grasping quantities with golden beads and expressing thoughts through emergent reading.",
    taglineTa: "பொன்மணிகள் (Golden Beads) மூலம் எண்களைப் புரிந்து கொண்டு எளிய வாசிப்பில் சிறந்து விளங்குதல்.",
    description:
      "Children delve into concrete Montessori mathematics, three-letter phonetic reading, bilingual Hindi/Tamil/English basics, global geography maps, and hands-on science experiments in a peaceful setting.",
    descriptionTa:
      "குழந்தைகள் மாண்டிசோரி செய்முறைக் கணிதம், மூன்றெழுத்து வார்த்தை வாசிப்பு, தமிழ், ஆங்கிலம், இந்தி அடிப்படைகள், உலக வரைபடங்கள் மற்றும் செய்முறை அறிவியல் சோதனைகளில் அமைதியான சூழலில் ஈடுபடுகிறார்கள்.",
    keyBenefits: [
      "Golden bead decimal base-10 system operations",
      "Movable wooden alphabet sentence creation",
      "Hindi basics & vernacular cultural appreciation",
      "World geography puzzle maps and ecosystem studies",
    ],
    keyBenefitsTa: [
      "பொன்மணிகள் கொண்டு பத்தின் அடுக்கு தசம முறை கூட்டல், கழித்தல்",
      "நகரும் மர எழுத்துக்கள் (Movable Alphabet) மூலம் வாக்கிய உருவாக்கம்",
      "இந்தி, தமிழ் மற்றும் ஆங்கில மொழித் திறன் வளர்ச்சி",
      "உலக வரைபட புதிர்கள் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வு",
    ],
    schedule: "Full Program: 8:30 AM – 1:15 PM",
    scheduleTa: "முழு வகுப்பு: காலை 8:30 – மதியம் 1:15",
    ratio: "1:10 Educator Ratio",
    ratioTa: "1:10 ஆசிரியர் விகிதம்",
    color: "#F5B900",
    badgeBg: "bg-[#FFF9E5]",
    badgeText: "text-[#9A6700]",
    image: "/school_images/dhivith-lkg-kindergarten-foundation-palladam.webp",
    curriculumHighlights: [
      "Addition and place value up to thousands with golden beads",
      "Sight words, phonetic readers and creative storytelling",
      "Basic Hindi consonants, vowels and spoken phrases",
      "Leaf cabinets, seed germination and weather observation",
    ],
    curriculumHighlightsTa: [
      "பொன்மணிகள் மூலம் ஆயிரங்கள் வரையிலான கூட்டல் மற்றும் இடமதிப்பு",
      "பார்வை சொற்கள், ஒலிப்பு வாசிப்பாளர்கள் மற்றும் கதை சொல்லுதல்",
      "அடிப்படை இந்தி மற்றும் தமிழ் எழுத்துக்கள், உச்சரிப்புகள்",
      "இலை மாதிரிகள், விதை முளைத்தல் மற்றும் வானிலை கவனிப்பு",
    ],
  },
  {
    id: "ukg",
    name: "UKG (Upper Kindergarten)",
    nameTa: "யு.கே.ஜி (UKG - மேல் மழலையர்)",
    subTitle: "Leadership, Academic Poise & Elementary Readiness",
    subTitleTa: "தலைமைப் பண்பு & தொடக்கப் பள்ளி தயார்நிலை",
    ageRange: "5 – 6 Years",
    ageRangeTa: "5 – 6 ஆண்டுகள்",
    tagline: "Smooth elementary transition with robust reading fluency and four-operation arithmetic.",
    taglineTa: "சரளமான வாசிப்புத் திறன் மற்றும் நான்கு அடிப்படைக் கணித செயல்பாடுகளுடன் பள்ளிக்கான முழு தயார்நிலை.",
    description:
      "The pinnacle of our early childhood pathway. UKG scholars develop articulate public presentation skills, complex multi-digit calculations, written creative stories, and seamless readiness for CBSE, ICSE, and State Board schools.",
    descriptionTa:
      "எங்கள் மழலையர் பள்ளியின் உச்சகட்ட நிலை. UKG மாணவர்கள் மேடைப் பேச்சு, பல இலக்கக் கணக்கீடுகள், சுயமாக கதை எழுதுதல் மற்றும் CBSE, ICSE, மாநிலப் பாடத்திட்டப் பள்ளிகளில் சேர்வதற்கான முழு தன்னம்பிக்கையையும் பெறுகின்றனர்.",
    keyBenefits: [
      "Four-operation arithmetic (Addition, Subtraction, Multiplication)",
      "Fluent reading comprehension and independent journaling",
      "Hindi & English conversation and handwriting excellence",
      "Peer leadership, problem-solving and science demonstrations",
    ],
    keyBenefitsTa: [
      "நான்கு வித கணிதச் செயல்பாடுகள் (கூட்டல், கழித்தல், பெருக்கல்)",
      "சரளமான வாசிப்பு, புரிதல் மற்றும் சுயமாக குறிப்புகள் எழுதுதல்",
      "தமிழ், ஆங்கிலம் மற்றும் இந்தி உரையாடல் மற்றும் அழகான கையெழுத்து",
      "நண்பர்களுக்கு வழிகாட்டுதல், சிக்கல் தீர்க்கும் திறன் மற்றும் அறிவியல் செயல்விளக்கங்கள்",
    ],
    schedule: "Full Day: 8:30 AM – 1:30 PM",
    scheduleTa: "முழு நாள்: காலை 8:30 – மதியம் 1:30",
    ratio: "1:8 Educator Ratio",
    ratioTa: "1:8 ஆசிரியர் விகிதம்",
    color: "#0750B8",
    badgeBg: "bg-[#EBF3FF]",
    badgeText: "text-[#0750B8]",
    image: "/school_images/dhivith-ukg-primary-readiness-tirupur.webp",
    curriculumHighlights: [
      "Grammar boxes, parts of speech and story composition",
      "Fraction equivalence insets and geometric hierarchies",
      "Scientific experiments on matter, botany and zoology",
      "Preparation for formal school interviews and admissions",
    ],
    curriculumHighlightsTa: [
      "இலக்கணப் பெட்டிகள், சொல் வகைகள் மற்றும் கதை உருவாக்கம்",
      "பின்ன வடிவங்கள் மற்றும் வடிவியல் படிநிலைகள்",
      "தாவரவியல், விலங்கியல் மற்றும் அறிவியல் சோதனைகள்",
      "முதன்மைப் பள்ளி சேர்க்கை மற்றும் நேர்காணல்களுக்கான சிறப்பு தயார்நிலை",
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
    image: "/school_images/montessori-practical-life-motor-skills-kinathukadavu.webp",
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
    image: "/school_images/montessori-sensorial-tactile-learning-coimbatore.webp",
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
    image: "/school_images/montessori-phonics-language-immersion-pollachi.webp",
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
    image: "/school_images/montessori-mathematics-number-reasoning-kinathukadavu.webp",
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
    image: "/school_images/montessori-cultural-science-geography-tirupur.webp",
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
    image: "/school_images/montessori-creative-expression-art-palladam.webp",
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
    image: "/school_images/sunlit-prepared-montessori-classroom-kinathukadavu.webp",
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
    image: "/school_images/sensorial-geometry-math-sanctuary-coimbatore.webp",
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
    image: "/school_images/cozy-literature-reading-library-nook-pollachi.webp",
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
    image: "/school_images/botanical-nature-garden-terrace-kinathukadavu.webp",
    features: [
      "Child-tended organic vegetable patch",
      "Sensory herbal smelling pathway",
      "Composting & recycling observation unit",
      "Weather monitoring station",
    ],
  },
  {
    id: "practical-kitchenette",
    title: "Child-Sized Activity & Culinary Studio",
    area: "Practical Life Hub",
    description:
      "Specially designed safe prep counters with functioning sinks at child height, allowing children to practice motor life skills autonomously.",
    image: "/school_images/child-sized-activity-culinary-studio-palladam.webp",
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
    id: "g-new-1",
    title: "Happy Montessori Students on Campus Steps",
    titleTa: "பள்ளி சீருடையில் புன்னகைக்கும் மழலையர் செல்வங்கள்",
    category: "Outdoor",
    image: "/school_images/happy-montessori-children-uniform-steps-kinathukadavu.webp",
    caption: "Our cheerful young learners gathered together in bright uniforms on the vibrant campus steps.",
    captionTa: "மகிழ்ச்சியான சூழலில் பள்ளி சீருடை அணிந்து ஒன்றாகக் கூடிப் புன்னகைக்கும் மழலையர் மாணவர்கள்.",
  },
  {
    id: "g-new-2",
    title: "Morning Assembly & Activity on Play Turf",
    titleTa: "காலை நேர இறைவணக்கம் & புல்வெளி உடலியக்கப் பயிற்சி",
    category: "Outdoor",
    image: "/school_images/morning-assembly-activity-outdoor-turf-coimbatore.webp",
    caption: "Children actively participating in energetic morning routines and peer coordination exercises on safe play turf.",
    captionTa: "சுத்தமான பசுமை புல்வெளியில் குழந்தைகள் வரிசையாக நின்று காலை நேர உடலியக்கம் மற்றும் கூட்டுப் பயிற்சிகளில் ஈடுபடுதல்.",
  },
  {
    id: "g-new-3",
    title: "Joyful Celebration & Circle Time Gathering",
    titleTa: "மழலையர் விழா கொண்டாட்டம் & வட்ட அமர்வு விளையாட்டு",
    category: "Creative",
    image: "/school_images/joyful-circle-time-celebration-preschool-pollachi.webp",
    caption: "Young learners dressed in festive attire gathered in a joyous outdoor activity circle on colorful chairs.",
    captionTa: "பண்டிகை ஆடை அணிந்து வண்ண நாற்காலிகளில் அமர்ந்து விழாக் கொண்டாட்டத்தில் குதூகலிக்கும் குழந்தைகள்.",
  },
  {
    id: "g-new-4",
    title: "Delightful Student Cohort on Green Lawn",
    titleTa: "பசுமைப் புல்வெளியில் சிரித்து மகிழும் மழலையர் குழு",
    category: "Outdoor",
    image: "/school_images/cheerful-preschool-students-group-lawn-dhivith.webp",
    caption: "A joyful group of students sitting comfortably cross-legged together on our child-safe artificial grass lawn.",
    captionTa: "பாதுகாப்பான மென் புல்வெளியில் அமர்ந்து உற்சாகமாகப் புன்னகைக்கும் மழலையர் மாணவர்கள்.",
  },
  {
    id: "g1",
    title: "Paper Cup Pyramid Stacking Activity",
    titleTa: "கப் அடுக்குதல் குழு விளையாட்டு",
    category: "Practical Life",
    image: "/school_images/paper-cup-pyramid-stacking-activity-kinathukadavu.webp",
    caption: "Children collaborating in a focused circle, stacking paper cups into pyramids to build patience and motor control.",
    captionTa: "குழந்தைகள் வட்டத்தில் அமர்ந்து கப்களை அடுக்கி கோபுரம் அமைக்கும் கூர்ந்த கவனப் பயிற்சி.",
  },
  {
    id: "g2",
    title: "Sensory Ball Sorting & Color Trays",
    titleTa: "வண்ணப் பந்துகள் & நிற வரிசைப்படுத்துதல்",
    category: "Sensorial",
    image: "/school_images/sensory-ball-sorting-color-trays-coimbatore.webp",
    caption: "Interactive color classification and sensory exploration using colorful balls and labeled sorting trays.",
    captionTa: "வண்ணப் பந்துகளைத் தட்டுகளில் வகைப்படுத்தி நிறங்களை அடையாளம் காணும் தொடு உணர்வுப் பயிற்சி.",
  },
  {
    id: "g3",
    title: "Montessori Number Rods & Math Sticks",
    titleTa: "மாண்டிசோரி வண்ணக் குச்சிகள் & எண்கணிதம்",
    category: "Classroom",
    image: "/school_images/montessori-number-rods-math-coaching-pollachi.webp",
    caption: "Hands-on numerical exploration using colored rods and geometric stick arrangements.",
    captionTa: "வண்ணக் குச்சிகள் கொண்டு எண்கள் மற்றும் வடிவ அமைப்புகளை சுயமாகக் கற்கும் மாணவர்கள்.",
  },
  {
    id: "g4",
    title: "Turf Play & Group Outdoor Fun",
    titleTa: "பசுமைப் புல்வெளி விளையாட்டு & உடற்பயிற்சி",
    category: "Outdoor",
    image: "/school_images/safe-outdoor-turf-play-area-kinathukadavu.webp",
    caption: "Active physical movement and joyful social bonding on our safe, clean artificial turf area.",
    captionTa: "சுத்தமான பசுமை புல்வெளியில் குழந்தைகள் கூடி விளையாடி மகிழும் உடலியக்கப் பகுதி.",
  },
  {
    id: "g5",
    title: "Montessori Self-Directed Work Cycle",
    titleTa: "சுய விருப்ப மாண்டிசோரி செய்முறை வகுப்பறை",
    category: "Classroom",
    image: "/school_images/montessori-self-directed-work-cycle-coimbatore.webp",
    caption: "Students independently choosing and exploring didactic Montessori learning apparatus on floor mats.",
    captionTa: "பாய்களில் அமர்ந்து தங்களுக்குப் பிடித்த மாண்டிசோரி கருவிகளை இயக்கி கற்கும் மாணவர்கள்.",
  },
  {
    id: "g6",
    title: "Practical Life Pouring & Motor Skills",
    titleTa: "செய்முறை வாழ்வியல் & கைவிரல் ஒருங்கிணைப்பு",
    category: "Practical Life",
    image: "/school_images/practical-life-fine-motor-coordination-tirupur.webp",
    caption: "Everyday practical life exercises cultivating fine motor strength, grace, and independence.",
    captionTa: "குழந்தைகளின் கைவிரல் நரம்புத் திறன் மற்றும் தன்னம்பிக்கையை வளர்க்கும் செய்முறை பயிற்சிகள்.",
  },
  {
    id: "g7",
    title: "Kidspire 2025 Student Achievement Awards",
    titleTa: "கிட்ஸ்பயர் 2025 சாதனை சான்றிதழ்கள்",
    category: "Creative",
    image: "/school_images/kidspire-student-achievement-awards-dhivith.webp",
    caption: "Proud young scholars displaying their achievement certificates at our annual Kidspire event.",
    captionTa: "கிட்ஸ்பயர் 2025 நிகழ்வில் பாராட்டுச் சான்றிதழ்களைப் பெற்று பெருமிதம் கொள்ளும் குழந்தைகள்.",
  },
  {
    id: "g8",
    title: "Kidspire Annual Celebration & Stage Honors",
    titleTa: "கிட்ஸ்பயர் விழா & மேடை பாராட்டு",
    category: "Creative",
    image: "/school_images/kidspire-annual-celebration-stage-honors-kinathukadavu.webp",
    caption: "Recognizing student growth, participation, and early learning milestones at our annual day.",
    captionTa: "ஆண்டு விழா மேடையில் மாணவர்களின் தனித்திறமைகளை பாராட்டி உற்சாகப்படுத்தும் தருணம்.",
  },
  {
    id: "g9",
    title: "Focused Evening Tuition Batches",
    titleTa: "மாலை நேர சிறப்பு டியூஷன் வகுப்புகள்",
    category: "Classroom",
    image: "/school_images/evening-tuition-batches-grade-1-to-12-pollachi.webp",
    caption: "Small batch coaching with personalized educator attention for school board subjects.",
    captionTa: "பள்ளி மாணவர்களுக்கான பாடவாரியான சந்தேகங்கள் தீர்க்கும் மாலை நேர வழிகாட்டல்.",
  },
  {
    id: "g10",
    title: "Early Sensorial Discovery & Play",
    titleTa: "மழலையர் தொடு உணர்வு விளையாட்டு",
    category: "Sensorial",
    image: "/school_images/toddler-sensorial-discovery-wooden-toys-kinathukadavu.webp",
    caption: "Nurturing curiosity with tactile, open-ended educational materials for toddlers.",
    captionTa: "மழலையர் குழந்தைகளுக்கான தொடு உணர்வு மற்றும் சொல்லாற்றலை வளர்க்கும் பயிற்சி.",
  },
  {
    id: "g11",
    title: "Wooden Alphabet Board & Letter Matching",
    titleTa: "மர எழுத்துப் பலகை & ஆங்கில எழுத்துப் பொருத்துதல்",
    category: "Classroom",
    image: "/school_images/wooden-alphabet-letter-matching-board-coimbatore.webp",
    caption: "Tactile letter recognition and motor grip placing carved wooden alphabets onto the board.",
    captionTa: "மர எழுத்து பலகையில் எழுத்துக்களைத் தொட்டுப் பார்த்து சரியாகப் பொருத்தும் பயிற்சி.",
  },
  {
    id: "g12",
    title: "3D Animal Picture Cube Puzzle",
    titleTa: "முப்பரிமாண படக் கட்டை புதிர் அடுக்குதல்",
    category: "Sensorial",
    image: "/school_images/3d-animal-picture-cube-puzzle-blocks-palladam.webp",
    caption: "Spatial visualization and problem solving aligning multi-sided 3D animal picture wooden blocks.",
    captionTa: "விலங்கு படக் கட்டைகளை சுழற்றி சரியான படத்தை உருவாக்கும் முப்பரிமாண புதிர்.",
  },
  {
    id: "g13",
    title: "Teacher Mentorship & Flashcard Nomenclature",
    titleTa: "ஆசிரியர் நேரடி வழிகாட்டல் & பட அட்டைப் பயிற்சி",
    category: "Classroom",
    image: "/school_images/montessori-teacher-guidance-nomenclature-kinathukadavu.webp",
    caption: "One-on-one educator guidance introducing vocabulary and animals through nomenclature cards.",
    captionTa: "ஆசிரியை குழந்தைகளுடன் அமர்ந்து பட அட்டைகள் மூலம் பெயர்களைக் கற்பிக்கும் காட்சி.",
  },
  {
    id: "g14",
    title: "Creative Crayon Coloring & Art Table",
    titleTa: "வண்ணம் தீட்டும் வரை கலைப் பயிற்சி",
    category: "Creative",
    image: "/school_images/creative-crayon-drawing-coloring-art-tirupur.webp",
    caption: "Children developing tripod grip and imaginative colors using wax crayons on picture sheets.",
    captionTa: "வண்ண மெழுகுக் குச்சிகள் கொண்டு வரைபடங்களுக்கு அழகாக வண்ணம் தீட்டும் குழந்தைகள்.",
  },
  {
    id: "g15",
    title: "Welcoming & Secure Campus Environment",
    titleTa: "பாதுகாப்பான & அன்பான பள்ளி வளாகம்",
    category: "Outdoor",
    image: "/school_images/dhivith-edu-care-school-campus-vadapudur-kinathukadavu.webp",
    caption: "Our cheerful, child-centric school campus located in Vadapudur, Kinathukadavu.",
    captionTa: "வடகாளூர், கிணத்துக்கடவில் அமைந்துள்ள தூய்மையான மழலையர் பள்ளி வளாகம்.",
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
      "We maintain a close 1:4 ratio for Day Care and 1:10 for Montessori classes. The premises feature child-height rounded Scandinavian wood furniture, CCTV monitoring, medical first-aid readiness, and strict hygiene protocols.",
  },
];

export const DAILY_RHYTHM = [
  {
    time: "5:00 – 7:00 AM",
    title: "Early Morning Tuition & Focus Batch",
    description: "Deep study and problem-solving session for school Board exams, competitive tests, and Engineering Mathematics.",
    icon: "Sunrise",
    color: "#0750B8",
  },
  {
    time: "8:30 – 9:00 AM",
    title: "Welcoming & Graceful Entry",
    description: "Personal greeting at the door, changing into indoor footwear, self-directed cloakroom organization.",
    icon: "Sun",
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
    time: "5:00 – 9:30 PM",
    title: "Evening Tuition Batches (8 Dedicated Staffs)",
    description: "Dedicated evening coaching for LKG to Grade 12 (CBSE/ICSE/State Board), Hindi, and Engineering Maths, guided by 8 dedicated evening staff members.",
    icon: "BookOpen",
    color: "#159447",
  },
];

export interface StaffMember {
  id: string;
  name: string;
  nameTa: string;
  qualification: string;
  role: string;
  roleTa: string;
  category: "Leadership" | "Teaching" | "Care";
  categoryEn: string;
  categoryTa: string;
  bioEn: string;
  bioTa: string;
  image: string;
  highlightsEn?: string[];
  highlightsTa?: string[];
}

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: "s-tharani",
    name: "Mrs. S. Tharani",
    nameTa: "திருமதி. S. தாரணி",
    qualification: "M.Sc., PGDM, PGMTTC",
    role: "Founder & Educational Director | Montessori Kinathukadavu",
    roleTa: "நிறுவனர் & கல்வி இயக்குநர் | மாண்டிசோரி கிணத்துக்கடவு",
    category: "Leadership",
    categoryEn: "Leadership & Director",
    categoryTa: "தலைமை & கல்வி வழிகாட்டல்",
    bioEn: "Specialized PGDNTTC Montessori certified directress with dual postgraduate credentials (M.Sc., PGDPM), leading authentic Montessori pre-school education, foundational literacy, and collegiate mathematics coaching in Kinathukadavu, serving families across Coimbatore and Pollachi.",
    bioTa: "PGDNTTC மாண்டிசோரி சிறப்புச் சான்றிதழ் மற்றும் M.Sc., PGDPM முதுகலை பட்டங்களுடன், கிணத்துக்கடவு, கோயம்புத்தூர், பொள்ளாச்சி பகுதி குழந்தைகளுக்கு உலகத்தரம் வாய்ந்த மழலையர் கல்வி மற்றும் கணிதப் பயிற்சியை வழிநடத்துகிறார்.",
    image: "/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png",
    highlightsEn: [
      "PGDNTTC Montessori Certified Master Trainer",
      "M.Sc. & PGDPM Postgraduate Credentials",
      "Specialist in Early Child Development & Collegiate Maths",
    ],
    highlightsTa: [
      "PGDNTTC சான்றிதழ் பெற்ற மாண்டிசோரி முதன்மை பயிற்சியாளர்",
      "M.Sc. மற்றும் PGDPM முதுகலை பட்டதாரி",
      "குழந்தை உளவியல் மற்றும் உயர் கணித சிறப்பு பயிற்றுநர்",
    ],
  },
  {
    id: "d-ramyadevi",
    name: "Mrs. D. Ramyadevi",
    nameTa: "திருமதி. D. ரம்யாதேவி",
    qualification: "M.Sc., B.Ed.",
    role: "KG Teacher | Dhivith Edu Care Kinathukadavu",
    roleTa: "கே.ஜி ஆசிரியை | கிணத்துக்கடவு",
    category: "Teaching",
    categoryEn: "Kindergarten Faculty",
    categoryTa: "மழலையர் பிரிவு ஆசிரியர்",
    bioEn: "Dedicated kindergarten teacher with M.Sc. and B.Ed credentials, specialized in interactive play-based pedagogy, storytelling, and cognitive motor development for toddlers and young learners in the Kinathukadavu-Pollachi corridor.",
    bioTa: "M.Sc., B.Ed பட்டங்களுடன், கிணத்துக்கடவு மற்றும் பொள்ளாச்சி சுற்றுவட்டாரக் குழந்தைகளுக்கு விளையாட்டு வழி கற்றல், அறிவாற்றல் வளர்ச்சி மற்றும் கதை சொல்லும் கலை மூலம் தன்னம்பிக்கை ஊட்டுகிறார்.",
    image: "/teachers/mrs-k-ramyadevi-kindergarten-educator-pollachi-kinathukadavu.webp",
    highlightsEn: [
      "M.Sc. & B.Ed. Qualified Teacher",
      "Interactive Play-Based Pedagogy",
      "Creative Art & Storytelling Facilitator",
    ],
    highlightsTa: [
      "M.Sc., B.Ed. தகுதி பெற்ற ஆசிரியர்",
      "விளையாட்டு வழி மற்றும் செய்முறை கற்றல் வழிகாட்டி",
      "கற்பனைத் திறன் & கதை சொல்லும் கலை பயிற்றுநர்",
    ],
  },
  {
    id: "k-vinothini",
    name: "Mrs. K. Vinothini",
    nameTa: "திருமதி. K. விநோதினி",
    qualification: "B.Sc., B.Ed.",
    role: "KG Teacher | Dhivith Edu Care Kinathukadavu",
    roleTa: "கே.ஜி ஆசிரியை | கிணத்துக்கடவு",
    category: "Teaching",
    categoryEn: "Kindergarten Faculty",
    categoryTa: "மழலையர் பிரிவு ஆசிரியர்",
    bioEn: "Qualified kindergarten teacher with B.Sc. and B.Ed credentials, passionate about early childhood literacy, joyful phonics, activity-based numeracy, and creative nursery engagement in Kinathukadavu.",
    bioTa: "B.Sc., B.Ed பட்டங்களுடன், மழலையர் குழந்தைகளுக்கு அடிப்படை மொழித்திறன், ஃபோனிக்ஸ் ஒலிப்பியல், எண்கணிதம் மற்றும் மகிழ்ச்சியான செய்முறை கற்றலை அர்ப்பணிப்புடன் பயிற்றுவிக்கிறார்.",
    image: "/teachers/mrs-k-vinothini-daycare-caregiver-specialist-kinathukadavu.jpg",
    highlightsEn: [
      "B.Sc. & B.Ed. Qualified Educator",
      "Early Childhood & KG Specialist",
      "Phonics & Activity-Based Learning Mentor",
    ],
    highlightsTa: [
      "B.Sc., B.Ed. தகுதி பெற்ற ஆசிரியர்",
      "மழலையர் கல்வி மற்றும் கற்றல் சிறப்பு வழிகாட்டி",
      "ஃபோனிக்ஸ் ஒலிப்பியல் & செய்முறை வழிகாட்டி",
    ],
  },
  {
    id: "k-eswari",
    name: "Mrs. K. Eswari",
    nameTa: "திருமதி. K. ஈஸ்வரி",
    qualification: "Care Taker / Day Care Staff",
    role: "Care Taker / Day Care Staff | Kinathukadavu",
    roleTa: "பராமரிப்பு & டே கேர் பணியாளர் | கிணத்துக்கடவு",
    category: "Care",
    categoryEn: "Day Care & Wellness Staff",
    categoryTa: "பராமரிப்பு & டே கேர் பணியாளர்",
    bioEn: "Loving and attentive daycare caretaker ensuring tender mother-like care, hygienic meal routines, restful nap times, and complete child safety for infants and toddlers in Kinathukadavu.",
    bioTa: "கிணத்துக்கடவு மற்றும் சுற்றுவட்டாரக் குழந்தைகளுக்கு தாய் போன்ற அன்பு, சத்தான உணவு நேரம், சுகாதாரமான தூய்மை மற்றும் பாதுகாப்பான அரவணைப்பை கனிவுடன் வழங்கி வருகிறார்.",
    image: "/teachers/mrs-d-eswari-kg-montessori-teacher-kinathukadavu-coimbatore.webp",
    highlightsEn: [
      "Tender Child Care & Day Care Support",
      "Nutritious Feeding & Rest Routine Care",
      "Strict Hygiene & Child Safety Focus",
    ],
    highlightsTa: [
      "அன்பான மழலையர் பராமரிப்பு சிறப்பு பணியாளர்",
      "சத்தான உணவு & அமைதியான தூக்க நேர பராமரிப்பு",
      "உயரிய சுகாதார தூய்மை மற்றும் கனிவான கவனிப்பு",
    ],
  },
  {
    id: "s-rajamanickam",
    name: "Mrs. S. Rajamanickam",
    nameTa: "திருமதி. S. ராஜமாணிக்கம்",
    qualification: "Care Taker",
    role: "Care Taker | Vadapudur Campus",
    roleTa: "வளாகப் பராமரிப்பாளர் | வடபுதூர் வளாகம்",
    category: "Care",
    categoryEn: "Campus Care & Support",
    categoryTa: "வளாகப் பராமரிப்பு",
    bioEn: "Loving and vigilant caretaker dedicated to child safety, campus cleanliness, healthy nurturing, and a warm, mother-like comforting environment for all young children at our Vadapudur campus in Kinathukadavu.",
    bioTa: "கிணத்துக்கடவு வடபுதூர் பள்ளி வளாகத்தில் குழந்தைகளுக்கு பாசமான தாய்மடி அரவணைப்பு, பாதுகாப்பு, வளாக தூய்மை மற்றும் அன்றாட நல்வாழ்வை அன்புடன் கவனித்துக் கொள்கிறார்.",
    image: "/teachers/mrs-s-rajamanickam-care-taker-vadapudur.png",
    highlightsEn: [
      "Motherly Care & Child Safety",
      "Clean & Caring Learning Environment",
      "Dedicated Campus Caretaker",
    ],
    highlightsTa: [
      "பாசமான தாய்மடி பாதுகாப்பு",
      "தூய்மையான வளாக பராமரிப்பு",
      "அர்ப்பணிப்புமிக்க பராமரிப்பாளர்",
    ],
  },
];

