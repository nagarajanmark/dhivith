export type Language = "en" | "ta";

export interface TranslationDictionary {
  // Navigation
  nav: {
    home: string;
    about: string;
    classes: string;
    gallery: string;
    games: string;
    contact: string;
    bookTour: string;
    langToggle: string;
  };
  // Common
  common: {
    scheduleVisit: string;
    bookTourTitle: string;
    admissionsOpen: string;
    callNow: string;
    whatsappUs: string;
    exploreMore: string;
    viewGallery: string;
    learnMore: string;
    joinTeam: string;
    allPrograms: string;
    home: string;
    close: string;
    submit: string;
    submitting: string;
    monToSat: string;
  };
  // Hero
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Sub: string;
    stat2Label: string;
    stat2Sub: string;
    stat3Label: string;
    stat3Sub: string;
    stat4Label: string;
    stat4Sub: string;
  };
  // Who We Are & Home Features
  whoWeAre: {
    badge: string;
    title: string;
    description: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    btnTour: string;
    btnClasses: string;
    statRatio: string;
    statRatioLabel: string;
    statRatioSub: string;
    statPreschool: string;
    statPreschoolLabel: string;
    statPreschoolSub: string;
    statTuition: string;
    statTuitionLabel: string;
    statTuitionSub: string;
    statPractical: string;
    statPracticalSub: string;
  };
  // Four Pillars on Home
  pillars: {
    badge: string;
    title: string;
    subtitle: string;
    p1Age: string;
    p1Title: string;
    p1Desc: string;
    p1Btn: string;
    p2Age: string;
    p2Title: string;
    p2Desc: string;
    p2Btn: string;
    p3Age: string;
    p3Title: string;
    p3Desc: string;
    p3Btn: string;
    p4Age: string;
    p4Title: string;
    p4Desc: string;
    p4Btn: string;
  };
  // Interactive Age Finder
  finder: {
    badge: string;
    title: string;
    subtitle: string;
    bookTour: string;
    learnMore: string;
    suffix: string;
  };
  // Home CTA Banner
  homeCta: {
    badge: string;
    title: string;
    description: string;
    btnTour: string;
    btnCall: string;
  };
  // About Page
  about: {
    bannerTag: string;
    bannerTitle: string;
    bannerDesc: string;
    founderTitle: string;
    founderName: string;
    founderQual: string;
    founderRole: string;
    directorMessage: string;
    founderQuote: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  // Team Section
  team: {
    tag: string;
    title: string;
    description: string;
    joinBtn: string;
  };
  // Philosophy
  philosophy: {
    badge: string;
    title: string;
    desc: string;
    quote: string;
    quoteAuthor: string;
  };
  // Programs & Classes
  classes: {
    badge: string;
    title: string;
    desc: string;
    enrollNow: string;
    daycare: string;
    daycareDesc: string;
    playgroup: string;
    playgroupDesc: string;
    prekg: string;
    prekgDesc: string;
    lkg: string;
    lkgDesc: string;
    ukg: string;
    ukgDesc: string;
    tuitions: string;
    tuitionsDesc: string;
    enggMaths: string;
    enggMathsDesc: string;
  };
  // Gallery
  gallery: {
    breadcrumb: string;
    badge: string;
    title: string;
    highlight: string;
    desc: string;
    allPhotos: string;
    catAll: string;
    catClassroom: string;
    catSensorial: string;
    catOutdoor: string;
    catPractical: string;
    catCreative: string;
    btnMasonry: string;
    btn3D: string;
    exit3D: string;
    tag3D: string;
  };
  // Contact Page & Form
  contact: {
    breadcrumb: string;
    badge: string;
    title: string;
    highlight: string;
    desc: string;
    leadershipTitle: string;
    campusAddress: string;
    directPhone: string;
    phoneAvailable: string;
    officialEmail: string;
    timings: string;
    preschoolHours: string;
    tuitionHours: string;
    formTitle: string;
    formSubtitle: string;
    parentNameLabel: string;
    parentNamePlaceholder: string;
    childAgeLabel: string;
    childAgePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    whatsappBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    chatWhatsapp: string;
  };
  // Tour Booking Modal
  tourModal: {
    badge: string;
    title: string;
    subtitle: string;
    parentName: string;
    childNameAge: string;
    phone: string;
    email: string;
    programSelect: string;
    visitDate: string;
    preferredTime: string;
    notes: string;
    notesPlaceholder: string;
    bookBtn: string;
    whatsappBtn: string;
    successTitle: string;
    successDesc: string;
    addressLabel: string;
    closeBtn: string;
  };
  // FAQs
  faqs: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  // Video Showcase
  video: {
    badge: string;
    title: string;
    subtitle: string;
    bookTour: string;
    track1Title: string;
    track1Subtitle: string;
    track1Duration: string;
    track1Badge: string;
    track1Tagline: string;
    track2Title: string;
    track2Subtitle: string;
    track2Duration: string;
    track2Badge: string;
    track2Tagline: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
  };
  // Marquee Gallery
  marqueeGallery: {
    badge: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
  };
  // Testimonials
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      name: string;
      role: string;
      quote: string;
      rating: number;
      avatarText: string;
      avatarBg: string;
    }>;
  };
  // Location Map
  campusMap: {
    badge: string;
    title: string;
    getDirections: string;
    locationCity: string;
  };
  // Quick Support & Games
  support: {
    title: string;
    tagline: string;
    whatsappChat: string;
    directCall: string;
    gameTitle: string;
    gameSub: string;
  };
  // Dedicated Kids Games Page
  gamesPage: {
    breadcrumb: string;
    badge: string;
    title: string;
    highlight: string;
    desc: string;
    allGames: string;
    sensoryLogic: string;
    mathNumbers: string;
    creativeArt: string;
    memorySound: string;
    starsWon: string;
    soundOn: string;
    soundOff: string;
    fullScreen: string;
    playNow: string;
    safeForKids: string;
    offlineReady: string;
  };
  // Footer
  footer: {
    aboutText: string;
    quickLinks: string;
    programs: string;
    contactInfo: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      classes: "Classes",
      gallery: "Gallery",
      games: "Kids Games",
      contact: "Contact",
      bookTour: "Book Visit",
      langToggle: "தமிழ்",
    },
    common: {
      scheduleVisit: "Schedule Campus Walkthrough",
      bookTourTitle: "Book a Campus Visit",
      admissionsOpen: "Admissions Open 2026–2027",
      callNow: "Call Helpline",
      whatsappUs: "WhatsApp Us",
      exploreMore: "Explore Programs",
      viewGallery: "Explore Full Gallery",
      learnMore: "Learn More",
      joinTeam: "JOIN TEAM",
      allPrograms: "All Educational Offerings",
      home: "Home",
      close: "Close",
      submit: "Submit Enquiry",
      submitting: "Submitting...",
      monToSat: "Mon–Sat: 8:30 AM – 6:30 PM",
    },
    hero: {
      badge: "Montessori Pre-School & Tuitions • Kinathukadavu",
      titleLine1: "Every Child. Every Opportunity.",
      titleLine2: "Every Time.",
      titleHighlight: "Success Begins Here!",
      description:
        "Nurturing curiosity, independence, and a lifelong love for learning through authentic Montessori apparatus, caring day care, and comprehensive academic tuitions from LKG to Grade 12.",
      ctaPrimary: "Schedule Campus Tour",
      ctaSecondary: "Explore Programs",
      stat1Label: "1:6 Ratio",
      stat1Sub: "Individualized Focus",
      stat2Label: "100%",
      stat2Sub: "Montessori Apparatus",
      stat3Label: "LKG–12",
      stat3Sub: "All Boards Tuitions",
      stat4Label: "Maths Spec",
      stat4Sub: "Engineering Math Coaching",
    },
    whoWeAre: {
      badge: "Who We Are",
      title: "A Loving Space Where Children Learn Joyfully",
      description:
        "At Dhivith Edu Care, we help children learn through practical activities, develop independent thinking, and grow with loving care from certified educators.",
      f1Title: "Authentic Montessori Method",
      f1Desc: "Self-correcting wooden apparatus, phonics & math activities.",
      f2Title: "1:6 Personal Teacher Care",
      f2Desc: "Small batch sizes so every child gets gentle, individual attention.",
      f3Title: "Safe & Prepared Environment",
      f3Desc: "Clean, airy classrooms with child-safe wooden furniture.",
      btnTour: "Book Campus Tour",
      btnClasses: "View Classes",
      statRatio: "1 : 6",
      statRatioLabel: "Low Educator Ratio",
      statRatioSub: "Personal attention for every child",
      statPreschool: "1.5 – 6 Yrs",
      statPreschoolLabel: "Pre-School Stages",
      statPreschoolSub: "Day Care to UKG Montessori",
      statTuition: "1 – 12th",
      statTuitionLabel: "Tuition Coaching",
      statTuitionSub: "CBSE, ICSE & State Board",
      statPractical: "Practical Learning",
      statPracticalSub: "Certified sensory materials",
    },
    pillars: {
      badge: "Campus Ecosystem",
      title: "Four Pillars of Growth",
      subtitle: "A balanced ecosystem fostering intellect, curiosity, and lifelong independence.",
      p1Age: "Ages 1.5 – 6 Yrs",
      p1Title: "Montessori Pre-School",
      p1Desc: "Self-directed play, practical life autonomy, and sandpaper phonics.",
      p1Btn: "Explore Stages",
      p2Age: "Grades 1 – 12 & Engg",
      p2Title: "Tuition & Coaching",
      p2Desc: "CBSE / ICSE core mastery and collegiate Engineering Mathematics.",
      p2Btn: "Explore Coaching",
      p3Age: "6 Core Avenues",
      p3Title: "Montessori Method",
      p3Desc: "Sensorial geometry, golden bead math, and language discovery.",
      p3Btn: "Learn Science",
      p4Age: "Prepared Spaces",
      p4Title: "Prepared Campus",
      p4Desc: "Natural daylight classrooms, birch furniture & biometric safety.",
      p4Btn: "Tour Spaces",
    },
    finder: {
      badge: "Interactive Program Finder",
      title: "Find the Perfect Program for Your Child",
      subtitle: "Select your child's age or grade stage to view the tailored curriculum focus:",
      bookTour: "Book a Campus Tour",
      learnMore: "Learn More",
      suffix: "Child-centered Montessori learning in Kinathukadavu.",
    },
    homeCta: {
      badge: "Campus Tours Available Mon–Sat",
      title: "Come Discover the Joy of Learning.",
      description:
        "Schedule an intimate walkthrough with Mrs. S Tharani to experience our live Montessori classrooms in Kinathukadavu, Coimbatore.",
      btnTour: "Book a Campus Tour",
      btnCall: "Call",
    },
    about: {
      bannerTag: "ABOUT DHIVITH EDU CARE",
      bannerTitle: "Nurturing Young Minds. Building Solid Foundations.",
      bannerDesc:
        "Founded by Mrs. S Tharani (M.Sc., PGDM, PGMTTC), Dhivith Edu Care delivers authentic Montessori education and premier academic tutoring in Kinathukadavu, Coimbatore.",
      founderTitle: "Founder & Educational Director",
      founderName: "Mrs. S Tharani",
      founderQual: "M.Sc., PGDM, PGMTTC",
      founderRole: "Montessori Master Directress & Mathematical Mentor",
      directorMessage:
        "At Dhivith Edu Care, we believe that education is not about pouring information into a child, but about igniting their innate curiosity and inner potential. Our prepared Montessori environments empower every child to develop focus, emotional grace, and problem-solving confidence.",
      founderQuote:
        "“When a child is given the freedom to discover with purpose-built Montessori apparatus, learning becomes an effortless lifelong joy.”",
      pillar1Title: "Student-Centred Care",
      pillar1Desc: "Custom pace tailored to each child’s distinct learning style.",
      pillar2Title: "LKG to 12th Tuitions",
      pillar2Desc: "CBSE, ICSE & State Board conceptual mastery with zero stress.",
      pillar3Title: "Engineering Maths",
      pillar3Desc: "Advanced university-level coaching by postgraduate mathematicians.",
      pillar4Title: "Stress-Free Environment",
      pillar4Desc: "Warm, supportive atmosphere designed for joyful discovery.",
    },
    team: {
      tag: "OUR TEAM",
      title: "Our Professionals",
      description:
        "Dedicated educators and certified Montessori directresses nurturing every child with individualized guidance and academic excellence.",
      joinBtn: "JOIN TEAM",
    },
    philosophy: {
      badge: "The Montessori Method",
      title: "Self-Directed Discovery & Academic Mastery",
      desc: "Our prepared environments offer tactile sensorial apparatus where children self-correct, build deep concentration, and achieve true developmental milestones.",
      quote:
        "“The greatest sign of success for a teacher is to be able to say: The children are now working as if I did not exist.”",
      quoteAuthor: "Dr. Maria Montessori",
    },
    classes: {
      badge: "Our Offerings",
      title: "Comprehensive Learning Programs",
      desc: "From gentle infant day care to advanced high school tuition and university mathematics, we guide learners at every stage.",
      enrollNow: "Enroll Now",
      daycare: "Day Care Sanctuary",
      daycareDesc: "Loving, hygienic, and comforting care for infants and toddlers with nutritious meal rhythms.",
      playgroup: "Play Group",
      playgroupDesc: "Sensorial exploration, rhythm circles, and social bonding for toddlers aged 2 to 3 years.",
      prekg: "Pre-KG",
      prekgDesc: "Language expansion, fine motor apparatus, and self-care routines.",
      lkg: "LKG Montessori",
      lkgDesc: "Phonics nomenclature, golden bead mathematics, and cultural botany exploration.",
      ukg: "UKG Preparatory",
      ukgDesc: "Fluent early reading, arithmetic fluency, and smooth transition to formal primary schooling.",
      tuitions: "LKG – Grade 12 Tuitions",
      tuitionsDesc: "Daily conceptual coaching across CBSE, ICSE, and Tamil Nadu State Board syllabi.",
      enggMaths: "Engineering Mathematics",
      enggMathsDesc: "Expert university coaching for M1, M2, Transform Techniques, and Discrete Mathematics.",
    },
    gallery: {
      breadcrumb: "Campus Gallery",
      badge: "Visual Portfolio",
      title: "Glimpse into Our Daily Montessori Life",
      highlight: "Daily Montessori Life",
      desc: "Explore spontaneous moments of joyful focus, tactile sensorial discoveries, outdoor gardening, and creative ateliers at Dhivith Edu Care in Kinathukadavu, Coimbatore.",
      allPhotos: "View Full Gallery",
      catAll: "All",
      catClassroom: "Classroom",
      catSensorial: "Sensorial",
      catOutdoor: "Outdoor",
      catPractical: "Practical Life",
      catCreative: "Creative",
      btnMasonry: "Masonry Portfolio",
      btn3D: "3D Parallax Unfurling Mode",
      exit3D: "Exit 3D Mode",
      tag3D: "⚡ 3D Parallax Scroll Experience (Scroll Down to Unfurl)",
    },
    contact: {
      breadcrumb: "Contact & Admissions",
      badge: "Get in Touch",
      title: "We Would Love to Welcome Your Family",
      highlight: "Welcome Your Family",
      desc: "Every Child. Every Opportunity. Every Time. Schedule an intimate campus tour, discuss your child's developmental readiness with Mrs. S Tharani, or inquire about school tuitions.",
      leadershipTitle: "Leadership & Admissions Desk",
      campusAddress: "Campus Address",
      directPhone: "Direct Phone / WhatsApp",
      phoneAvailable: "Available for Admissions & Parent Inquiries",
      officialEmail: "Official Email",
      timings: "Timings",
      preschoolHours: "Pre-School: Mon–Sat: 8:30 AM – 6:30 PM",
      tuitionHours: "Tuitions: Evening Batches 4:00 PM – 8:30 PM",
      formTitle: "Admissions & Academic Enquiry Form",
      formSubtitle: "Fill in your details below. We welcome inquiries for Preschool (Day Care, Play Group, Pre-KG, LKG, UKG) and Tuitions (LKG to Grade 12 / Engineering Maths).",
      parentNameLabel: "Parent / Student Full Name *",
      parentNamePlaceholder: "e.g. Senthil Kumar",
      childAgeLabel: "Child's Age / Current Grade *",
      childAgePlaceholder: "e.g. 3.5 yrs (Pre-KG) / Grade 10",
      phoneLabel: "Phone / WhatsApp Number *",
      phonePlaceholder: "744 898 1592",
      emailLabel: "Email Address (Optional)",
      emailPlaceholder: "parent@gmail.com",
      serviceLabel: "Program / Service of Interest",
      messageLabel: "Your Message / Specific Questions",
      messagePlaceholder: "Tell us about your requirements, preferred timing, or questions for Mrs. S Tharani...",
      submitBtn: "Submit Admission Enquiry",
      whatsappBtn: "WhatsApp Helpline",
      successTitle: "Enquiry Received!",
      successDesc: "Thank you! Mrs. S Tharani and our admissions desk will connect with you within 24 hours.",
      sendAnother: "Send Another Inquiry",
      chatWhatsapp: "Instant WhatsApp Chat",
    },
    tourModal: {
      badge: "Kinathukadavu, Coimbatore • Est. 2024",
      title: "Book a School Visit",
      subtitle: "Visit our campus and meet Mrs. S Tharani to know more about admissions.",
      parentName: "Parent's Name *",
      childNameAge: "Child's Name & Age / Class *",
      phone: "Mobile / WhatsApp Number *",
      email: "Email ID (Optional)",
      programSelect: "Select Class / Course",
      visitDate: "Visit Date *",
      preferredTime: "Preferred Time",
      notes: "Questions / Message (Optional)",
      notesPlaceholder: "Ask about admission, school timings, fees, or tuition details...",
      bookBtn: "Book Visit",
      whatsappBtn: "Chat on WhatsApp",
      successTitle: "Visit Booked Successfully!",
      successDesc: "Thank you! We will call you soon to confirm your campus walkthrough.",
      addressLabel: "School Address:",
      closeBtn: "Close",
    },
    faqs: {
      badge: "Common Inquiries",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Montessori education, our daily routines, and the enrollment experience at Dhivith Edu Care.",
      items: [
        {
          question: "What makes authentic Montessori education at Dhivith Edu Care unique?",
          answer: "Our classrooms feature multi-age groupings, scientifically designed hands-on didactic apparatus, and freedom of choice within a structured, respectful environment guided by certified Montessori directresses.",
        },
        {
          question: "What is the teacher-to-child ratio at Dhivith Edu Care?",
          answer: "We strictly maintain a 1:6 educator ratio in infant day care and early Montessori classrooms, ensuring every child receives individualized pedagogical scaffolding and emotional nurture.",
        },
        {
          question: "Do you provide academic tuition for higher grade students?",
          answer: "Yes! In addition to our early years Montessori wing, we offer comprehensive subject coaching for LKG through Grade 12 (CBSE, ICSE, Matriculation & State Board), as well as Engineering Mathematics coaching led by postgraduate mathematicians.",
        },
        {
          question: "How can parents schedule a campus tour or enroll their child?",
          answer: "You can click 'Book Visit' anywhere on this website, call our direct admissions helpline at +91 7448981592, or send a WhatsApp message to schedule a private tour with Mrs. S Tharani.",
        },
      ],
    },
    video: {
      badge: "Virtual Campus Experience",
      title: "See the Magic of Montessori in Action",
      subtitle: "Watch our children discover, learn, and grow every day in our peaceful, activity-filled environment in Kinathukadavu.",
      bookTour: "Book a Campus Tour",
      track1Title: "A Day at Dhivith Edu Care",
      track1Subtitle: "Explore our Montessori classrooms, sensory activities & happy children.",
      track1Duration: "Campus Tour",
      track1Badge: "Featured Experience",
      track1Tagline: "Live Montessori Method in Action",
      track2Title: "Joyful Learning & Play",
      track2Subtitle: "Independent child-led exploration with certified Montessori apparatus.",
      track2Duration: "Classroom Life",
      track2Badge: "Classroom Focus",
      track2Tagline: "Hands-on Practical Life & Sensorial Work",
      val1Title: "Safe & Caring Campus",
      val1Desc: "Live supervision & kid-safe spaces",
      val2Title: "Certified Teachers",
      val2Desc: "Trained in genuine Montessori",
      val3Title: "Individual Attention",
      val3Desc: "Small batch sizes for every child",
    },
    marqueeGallery: {
      badge: "Campus Visual Showcase",
      title: "Moments of Joy & Learning",
      subtitle: "Continuous marquee showcase of our vibrant Montessori classrooms, hands-on learning, outdoor play, and student life in Kinathukadavu, Coimbatore.",
      exploreBtn: "EXPLORE FULL GALLERY",
    },
    testimonials: {
      badge: "Testimonials",
      title: "What our parents say",
      subtitle: "See what our families and students have to say about us.",
      items: [
        {
          id: "1",
          name: "Karthik Subramanian",
          role: "Parent of Kavin (LKG Montessori)",
          quote: "Sending Kavin to Dhivith Edu Care was our best decision. The authentic Montessori materials have given him remarkable independence. He counts with golden beads, reads with excitement, and loves school every single day.",
          rating: 5,
          avatarText: "KS",
          avatarBg: "bg-[#0750B8]",
        },
        {
          id: "2",
          name: "Bhuvaneshwari Prakash",
          role: "Parent of Nila (Pre-KG) & Surya (Grade 8)",
          quote: "Dhivith Edu Care is a blessing for families in Kinathukadavu. Nila blossomed in the Pre-KG room, while Surya receives outstanding CBSE math coaching in the evening. The individual teacher care is exceptional.",
          rating: 5,
          avatarText: "BP",
          avatarBg: "bg-[#159447]",
        },
        {
          id: "3",
          name: "Suresh & Anitha",
          role: "Parents of Harish (Play Group)",
          quote: "Our son took his first joyful steps into school life here. The caring teachers and gentle sensory rhythm made him feel confident from day one.",
          rating: 5,
          avatarText: "SA",
          avatarBg: "bg-[#F36B12]",
        },
        {
          id: "4",
          name: "Dr. Venkatesh & Divya",
          role: "Parents of Diya (UKG Montessori)",
          quote: "The academic foundation Diya received here—especially phonics, arithmetic, and Hindi basics—made her primary school entrance effortless. Mrs. S Tharani and her team treat every child with extraordinary care.",
          rating: 5,
          avatarText: "VD",
          avatarBg: "bg-[#0750B8]",
        },
        {
          id: "5",
          name: "Manoj & Swathi",
          role: "Parents of Aadvik (Day Care Sanctuary)",
          quote: "As working parents in Coimbatore, finding a safe, hygienic, and loving day care was our priority. Dhivith Edu Care provides the warmest care, wholesome meals, and lovely daily progress updates.",
          rating: 5,
          avatarText: "MS",
          avatarBg: "bg-[#F5B900]",
        },
        {
          id: "6",
          name: "Saravanan & Priya",
          role: "Parents of Rithanya (Grade 10 CBSE)",
          quote: "The tuition classes for 10th standard science and mathematics here are phenomenal. Conceptual clarity and regular test practice improved her board exam confidence significantly.",
          rating: 5,
          avatarText: "SP",
          avatarBg: "bg-[#159447]",
        },
        {
          id: "7",
          name: "Rajesh Chandrasekhar",
          role: "Parent of Mithun (Pre-KG)",
          quote: "From his first classroom walkthrough to everyday Montessori tasks, our son's communication and curiosity have skyrocketed. Truly grateful to the dedicated educators.",
          rating: 5,
          avatarText: "RC",
          avatarBg: "bg-[#159447]",
        },
        {
          id: "8",
          name: "Aliza Khan",
          role: "Parent of Zoya (UKG & Hindi Basics)",
          quote: "The language activities, Tamil alphabet puzzles, and English phonics are taught with such passion. The spacious, clean campus in Vadapudur is ideal for young children.",
          rating: 5,
          avatarText: "AK",
          avatarBg: "bg-[#F36B12]",
        },
        {
          id: "9",
          name: "Vignesh Kumar",
          role: "Engineering Mathematics Student",
          quote: "Mrs. S Tharani's collegiate engineering mathematics coaching simplified complex calculus and matrices effortlessly. A must-visit academy for high school & engineering students.",
          rating: 5,
          avatarText: "VK",
          avatarBg: "bg-[#0750B8]",
        },
      ],
    },
    campusMap: {
      badge: "Location & Directions",
      title: "VISIT OUR CAMPUS & HEADQUARTERS",
      getDirections: "GET DIRECTIONS ON GOOGLE MAPS",
      locationCity: "COIMBATORE, TN",
    },
    support: {
      title: "Dhivith Quick Support Desk",
      tagline: "Instant assistance & preschool admissions help",
      whatsappChat: "Instant WhatsApp Chat",
      directCall: "Direct Helpline",
      gameTitle: "Kids Fun Play & Learn Zone",
      gameSub: "8+ Montessori Games • Play Offline",
    },
    gamesPage: {
      breadcrumb: "Kids Play Zone",
      badge: "Montessori Interactive Play Arena",
      title: "Dhivith Kids Wonder Play & Learning Zone",
      highlight: "Wonder Play & Learning",
      desc: "Joyful, educational, and safe Montessori games designed for toddlers, preschoolers, and primary kids. Build towers, match shapes, pop math balloons, explore animal sounds, draw magic art, and play the rainbow piano!",
      allGames: "All Games",
      sensoryLogic: "Sensory & Logic",
      mathNumbers: "Math & Numbers",
      creativeArt: "Art & Music",
      memorySound: "Memory & Phonics",
      starsWon: "Stars Collected",
      soundOn: "Sound On",
      soundOff: "Sound Muted",
      fullScreen: "Full Screen",
      playNow: "Play Game",
      safeForKids: "100% Safe & Ad-Free for Children",
      offlineReady: "Works Smoothly On All Devices",
    },
    footer: {
      aboutText:
        "Dhivith Edu Care is a premier Montessori Pre-School and Academic Tuition Centre located in Kinathukadavu, Coimbatore. Founded by Mrs. S Tharani (M.Sc., PGDM, PGMTTC).",
      quickLinks: "Quick Links",
      programs: "Our Programs",
      contactInfo: "Contact Details",
      copyright: "All rights reserved. Dedicated to authentic Montessori excellence.",
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      about: "எங்களை பற்றி",
      classes: "வகுப்புகள்",
      gallery: "புகைப்படங்கள்",
      games: "விளையாட்டு உலகம்",
      contact: "தொடர்பு",
      bookTour: "வளாக பார்வை",
      langToggle: "English",
    },
    common: {
      scheduleVisit: "நேரடி வளாக பார்வைக்கு முன்பதிவு",
      bookTourTitle: "வளாக பார்வைக்கான முன்பதிவு",
      admissionsOpen: "சேர்க்கை நடைபெறுகிறது 2026–2027",
      callNow: "உடனடி உதவி எண்",
      whatsappUs: "வாட்ஸ்அப் செய்தி",
      exploreMore: "பாடத்திட்டங்களை பார்க்க",
      viewGallery: "முழு புகைப்படங்களை காண்க",
      learnMore: "மேலும் அறிய",
      joinTeam: "இணைந்திடுங்கள்",
      allPrograms: "அனைத்து கல்வி திட்டங்கள்",
      home: "முகப்பு",
      close: "மூடுக",
      submit: "விண்ணப்பிக்கவும்",
      submitting: "பதிவாகிறது...",
      monToSat: "திங்கள்–சனி: காலை 8:30 – மாலை 6:30",
    },
    hero: {
      badge: "மாண்டிசோரி மழலையர் பள்ளி & டியூஷன் • கிணத்துக்கடவு",
      titleLine1: "ஒவ்வொரு குழந்தைக்கும். ஒவ்வொரு வாய்ப்பும்.",
      titleLine2: "ஒவ்வொரு முறையும்.",
      titleHighlight: "வெற்றி இங்கே தொடங்குகிறது!",
      description:
        "உண்மையான மாண்டிசோரி கற்பித்தல் கருவிகள், அன்பான டே கேர் மற்றும் எல்கேஜி முதல் 12-ஆம் வகுப்பு வரையிலான அனைத்து பாடங்களுக்கான பிரத்யேக டியூஷன் மூலம் குழந்தைகளின் எதிர்காலத்தை ஒளிமயமாக்குகிறோம்.",
      ctaPrimary: "வளாக பார்வை முன்பதிவு",
      ctaSecondary: "வகுப்புகளை காண்க",
      stat1Label: "1:6 விகிதம்",
      stat1Sub: "தனிநபர் வழிகாட்டல்",
      stat2Label: "100%",
      stat2Sub: "மாண்டிசோரி கருவிகள்",
      stat3Label: "LKG–12",
      stat3Sub: "அனைத்து பாட டியூஷன்",
      stat4Label: "பொறியியல் கணிதம்",
      stat4Sub: "M1, M2 சிறப்புக் கல்வி",
    },
    whoWeAre: {
      badge: "எங்களைப் பற்றி",
      title: "குழந்தைகள் மகிழ்ச்சியுடன் கற்கும் அன்பான கல்விச் சோலை",
      description:
        "திவித் எடு கேரில், குழந்தைகள் செய்முறை வழியில் சுயமாகக் கற்று, சுதந்திர சிந்தனையுடன் அன்பான ஆசிரியர்களின் வழிகாட்டலில் சிறந்து வளர்கிறார்கள்.",
      f1Title: "உண்மையான மாண்டிசோரி முறை",
      f1Desc: "சுயதிருத்த மரக் கருவிகள், ஃபோனிக்ஸ் உச்சரிப்பு மற்றும் கணித செயல்பாடுகள்.",
      f2Title: "1:6 ஆசிரியர் மாணவர் கவனிப்பு",
      f2Desc: "குறைந்த எண்ணிக்கையிலான குழந்தைகள், அதனால் ஒவ்வொரு குழந்தைக்கும் தனிநபர் பாசம் மற்றும் கவனம்.",
      f3Title: "பாதுகாப்பான உன்னத சூழல்",
      f3Desc: "தூய்மையான, காற்றோட்டமான வகுப்பறைகள் மற்றும் பாதுகாப்பான மர தளவாடங்கள்.",
      btnTour: "வளாக பார்வை முன்பதிவு",
      btnClasses: "வகுப்புகளைப் பார்க்க",
      statRatio: "1 : 6",
      statRatioLabel: "குறைந்த ஆசிரியர் விகிதம்",
      statRatioSub: "ஒவ்வொரு குழந்தைக்கும் தனிநபர் கவனம்",
      statPreschool: "1.5 – 6 வயது",
      statPreschoolLabel: "மழலையர் கல்வி நிலைகள்",
      statPreschoolSub: "டே கேர் முதல் யூகேஜி மாண்டிசோரி வரை",
      statTuition: "1 – 12 ஆம் வகுப்பு",
      statTuitionLabel: "மாலை நேர டியூஷன்",
      statTuitionSub: "CBSE, ICSE மற்றும் தமிழ்நாடு பாடத்திட்டம்",
      statPractical: "100% செய்முறை கற்றல்",
      statPracticalSub: "சான்றளிக்கப்பட்ட மாண்டிசோரி கருவிகள்",
    },
    pillars: {
      badge: "வளாக சூழல்",
      title: "வளர்ச்சியின் நான்கு தூண்கள்",
      subtitle: "அறிவு, தன்னம்பிக்கை மற்றும் சுதந்திர சிந்தனையை வளர்க்கும் சமநிலையான கல்விச் சூழல்.",
      p1Age: "வயது 1.5 – 6 வரை",
      p1Title: "மாண்டிசோரி மழலையர் பள்ளி",
      p1Desc: "சுய கற்றல், அன்றாட செயல்முறை பயிற்சிகள் மற்றும் ஃபோனிக்ஸ் மொழி வளர்ச்சி.",
      p1Btn: "நிலைகளை காண்க",
      p2Age: "1 – 12 வகுப்பு & பொறியியல்",
      p2Title: "டியூஷன் & சிறப்புக் கல்வி",
      p2Desc: "CBSE / ICSE முக்கிய பாடங்கள் மற்றும் கல்லூரி பொறியியல் கணிதப் பயிற்சி.",
      p2Btn: "டியூஷன் விவரங்கள்",
      p3Age: "6 முக்கிய வழிகள்",
      p3Title: "மாண்டிசோரி அணுகுமுறை",
      p3Desc: "வடிவியல் கருவிகள், தங்க மணிகள் கணிதம் மற்றும் சுயமாக வாசித்தல்.",
      p3Btn: "அறிவியல் முறை",
      p4Age: "தயாரிக்கப்பட்ட வளாகம்",
      p4Title: "பாதுகாப்பான வளாகம்",
      p4Desc: "இயற்கை வெளிச்சம் கொண்ட வகுப்பறைகள் மற்றும் பாதுகாப்பான விளையாட்டுத் திடல்.",
      p4Btn: "வளாகத்தை காண்க",
    },
    finder: {
      badge: "வகுப்பு தேர்வு வழிகாட்டி",
      title: "உங்கள் குழந்தைக்கு ஏற்ற வகுப்பை தேர்வு செய்யுங்கள்",
      subtitle: "உங்கள் குழந்தையின் வயது அல்லது வகுப்பைத் தேர்ந்தெடுத்து அதற்கேற்ற பாடத்திட்டத்தை அறியவும்:",
      bookTour: "வளாக பார்வை முன்பதிவு",
      learnMore: "மேலும் அறிய",
      suffix: "கிணத்துக்கடவில் சிறந்த மாண்டிசோரி கல்வி சேவை.",
    },
    homeCta: {
      badge: "நேரடி வளாக பார்வை • திங்கள் முதல் சனி வரை",
      title: "மகிழ்ச்சியான கற்றல் உலகை நேரில் வந்து பாருங்கள்.",
      description:
        "கிணத்துக்கடவு, கோயம்புத்தூரில் எங்கள் மாண்டிசோரி வகுப்பறைகளை நேரில் கண்டு திருமதி. S. தாரணி அவர்களுடன் கலந்துரையாட வாருங்கள்.",
      btnTour: "வளாக பார்வை முன்பதிவு",
      btnCall: "அழைக்க",
    },
    about: {
      bannerTag: "திவித் எடு கேர் பற்றி",
      bannerTitle: "இளம் தளிர்களை செதுக்கும் மாண்டிசோரி கல்விச் சோலை.",
      bannerDesc:
        "திருமதி. S. தாரணி (M.Sc., PGDM, PGMTTC) அவர்களின் வழிகாட்டலில், கிணத்துக்கடவு, கோயம்புத்தூரில் இயங்கும் தரமான மாண்டிசோரி மழலையர் பள்ளி மற்றும் கல்வி மையம்.",
      founderTitle: "நிறுவனர் & கல்வி இயக்குநர்",
      founderName: "திருமதி. S. தாரணி",
      founderQual: "M.Sc., PGDM, PGMTTC",
      founderRole: "மாண்டிசோரி முதன்மை வழிகாட்டி & கணித முதுகலை ஆசிரியர்",
      directorMessage:
        "திவித் எடு கேரில் கல்வி என்பது தகவல்களை திணிப்பதல்ல; குழந்தையின் உள்ளார்ந்த அறிவையும் தன்னம்பிக்கையையும் மலரச் செய்வதே எங்கள் நோக்கம். சுயமாகக் கற்கும் மாண்டிசோரி சூழலில் ஒவ்வொரு குழந்தையும் சுதந்திரமாகவும் மகிழ்ச்சியாகவும் கற்கிறார்கள்.",
      founderQuote:
        "“குழந்தைகளுக்கு சரியான மாண்டிசோரி கருவிகளுடன் கற்கும் சுதந்திரம் கிடைக்கும்போது, கல்வி என்பது வாழ்நாள் முழுமைக்குமான பேரின்பமாக மாறுகிறது.”",
      pillar1Title: "தனிநபர் கவனம்",
      pillar1Desc: "ஒவ்வொரு குழந்தையின் கற்கும் திறனுக்கேற்ப பிரத்யேக வழிகாட்டல்.",
      pillar2Title: "LKG - 12ஆம் வகுப்பு டியூஷன்",
      pillar2Desc: "CBSE, ICSE மற்றும் தமிழ்நாடு ஸ்டேட் போர்டு பாடங்களில் மன அழுத்தமில்லா புரிதல்.",
      pillar3Title: "பொறியியல் கணிதம் (Engineering Maths)",
      pillar3Desc: "கல்லூரி மாணவர்களுக்கான உயர்நிலை கணித பயிற்சி வகுப்புகள்.",
      pillar4Title: "பாதுகாப்பான சூழல்",
      pillar4Desc: "அன்பான ஆசிரியர்கள் மற்றும் பாதுகாப்பான விளையாட்டு வளாகம்.",
    },
    team: {
      tag: "எங்கள் குழு",
      title: "எங்கள் ஆசிரியர்கள் & வழிகாட்டிகள்",
      description:
        "குழந்தைகளின் திறமைகளை அன்புடன் வளர்த்தெடுக்கும் சான்றிதழ் பெற்ற மாண்டிசோரி ஆசிரியர்கள் மற்றும் அனுபவம் வாய்ந்த கல்வி பயிற்றுநர்கள்.",
      joinBtn: "ஆசிரியராக இணைய",
    },
    philosophy: {
      badge: "மாண்டிசோரி கல்வி முறை",
      title: "சுய கற்றல் & ஆழமான புரிதல்",
      desc: "குழந்தைகள் சுயமாக தொட்டு உணர்ந்து கற்கும் சிறப்பு மாண்டிசோரி கருவிகள் மூலம் ஆழ்ந்த கவனமும் தன்னம்பிக்கையும் பெறுகிறார்கள்.",
      quote:
        "“ஆசிரியர் ஒருவர் இல்லாத போதும் குழந்தைகள் தாமாகவே முழு ஈடுபாட்டுடன் செயல்படுவதே கல்வியின் மிகச்சிறந்த வெற்றி.”",
      quoteAuthor: "டாக்டர் மரியா மாண்டிசோரி",
    },
    classes: {
      badge: "எங்கள் வகுப்புகள்",
      title: "விரிவான கல்வித் திட்டங்கள்",
      desc: "மழலையர் டே கேர் முதல் பள்ளி மாணவர்களுக்கான டியூஷன் மற்றும் கல்லூரி கணிதம் வரை அனைத்தும் ஒரே இடத்தில்.",
      enrollNow: "இப்போதே சேருங்கள்",
      daycare: "டே கேர் (Day Care)",
      daycareDesc: "பணிபுரியும் பெற்றோரின் குழந்தைகளுக்கு தூய்மையான, அன்பான மற்றும் சத்தான உணவுடன் கூடிய பகல்நேர பராமரிப்பு.",
      playgroup: "ப்ளே குரூப் (Play Group)",
      playgroupDesc: "2 முதல் 3 வயது வரையிலான குழந்தைகளுக்கு விளையாட்டு முறை மொழி வளர்ச்சி மற்றும் மோட்டார் பயிற்சி.",
      prekg: "ப்ரீ-கேஜி (Pre-KG)",
      prekgDesc: "சொற்களஞ்சியம், தொடு உணர்வு கருவிகள் மற்றும் சுயபராமரிப்பு பழக்கவழக்கங்கள்.",
      lkg: "எல்கேஜி (LKG Montessori)",
      lkgDesc: "ஃபோனிக்ஸ் ஒலி உச்சரிப்பு, மாண்டிசோரி மணிகள் கணிதம் மற்றும் தாவரவியல் அறிமுகம்.",
      ukg: "யூகேஜி (UKG Preparatory)",
      ukgDesc: "சுயமாக வாசித்தல், கூட்டல் கழித்தல் கணித புரிதல் மற்றும் முதல் வகுப்புக்கான தயார்படுத்துதல்.",
      tuitions: "LKG முதல் 12 வரை டியூஷன்",
      tuitionsDesc: "CBSE, ICSE மற்றும் மாநில பாடத்திட்டங்களுக்கான தினசரி மாலை நேர சிறப்புக் கல்வி.",
      enggMaths: "பொறியியல் கணிதம் (Engineering Maths)",
      enggMathsDesc: "B.E/B.Tech மாணவர்களுக்கான M1, M2, Transforms மற்றும் Discrete கணித வகுப்புகள்.",
    },
    gallery: {
      breadcrumb: "வளாக புகைப்படங்கள்",
      badge: "வளாக புகைப்படங்கள்",
      title: "திவித் எடு கேர் வளாக காட்சிகள்",
      highlight: "வளாக காட்சிகள்",
      desc: "எங்கள் மாண்டிசோரி வகுப்பறைகள், விளையாட்டு திடல், கைவினைப் பொருட்கள் மற்றும் கலாச்சார நிகழ்வுகளின் அழகிய தருணங்கள்.",
      allPhotos: "முழு புகைப்பட தொகுப்பு",
      catAll: "அனைத்தும்",
      catClassroom: "வகுப்பறை",
      catSensorial: "தொடு உணர்வு கருவிகள்",
      catOutdoor: "விளையாட்டு திடல்",
      catPractical: "சுயசெயல்பாடுகள்",
      catCreative: "படைப்பாற்றல்",
      btnMasonry: "புகைப்பட தொகுப்பு",
      btn3D: "3D அனுபவ காட்சி",
      exit3D: "3D யிலிருந்து வெளியேற",
      tag3D: "⚡ 3D காட்சி அனுபவம் (கீழே ஸ்க்ரோல் செய்து பார்க்கவும்)",
    },
    contact: {
      breadcrumb: "தொடர்பு & சேர்க்கை",
      badge: "தொடர்பு கொள்ள",
      title: "உங்கள் குடும்பத்தை அன்போடு வரவேற்கிறோம்",
      highlight: "அன்போடு வரவேற்கிறோம்",
      desc: "ஒவ்வொரு குழந்தைக்கும் ஒவ்வொரு வாய்ப்பும் ஒவ்வொரு முறையும். வளாகப் பார்வைக்கு முன்பதிவு செய்ய அல்லது சேர்க்கை விவரங்களை அறிய எங்களை தொடர்பு கொள்ளுங்கள்.",
      leadershipTitle: "கல்வி இயக்குநர் & சேர்க்கை மையம்",
      campusAddress: "வளாக முகவரி",
      directPhone: "நேரடி தொலைபேசி / வாட்ஸ்அப்",
      phoneAvailable: "சேர்க்கை மற்றும் பெற்றோர் ஆலோசனைக்கு கிடைக்கும்",
      officialEmail: "அதிகாரப்பூர்வ மின்னஞ்சல்",
      timings: "நேரங்கள்",
      preschoolHours: "மழலையர் பள்ளி: திங்கள்–சனி காலை 8:30 – மாலை 6:30",
      tuitionHours: "டியூஷன்: மாலை நேர வகுப்புகள் 4:00 – 8:30",
      formTitle: "சேர்க்கை மற்றும் கல்வி விசாரணை படிவம்",
      formSubtitle: "கீழே உள்ள படிவத்தை நிரப்பவும். மழலையர் பள்ளி (Day Care, Play Group, Pre-KG, LKG, UKG) மற்றும் டியூஷன் (LKG முதல் 12ஆம் வகுப்பு / பொறியியல் கணிதம்) சேர்க்கைக்கு வரவேற்கிறோம்.",
      parentNameLabel: "பெற்றோர் / மாணவர் பெயர் *",
      parentNamePlaceholder: "எ.கா. செந்தில் குமார்",
      childAgeLabel: "குழந்தையின் வயது / வகுப்பு *",
      childAgePlaceholder: "எ.கா. 3.5 வயது (Pre-KG) / 10-ஆம் வகுப்பு",
      phoneLabel: "தொலைபேசி / வாட்ஸ்அப் எண் *",
      phonePlaceholder: "744 898 1592",
      emailLabel: "மின்னஞ்சல் முகவரி (விருப்பப்பட்டால்)",
      emailPlaceholder: "parent@gmail.com",
      serviceLabel: "தேவையான வகுப்பு / திட்டம்",
      messageLabel: "உங்கள் கேள்விகள் / செய்தி",
      messagePlaceholder: "உங்கள் தேவைகள் மற்றும் நேரங்களை குறிப்பிடவும்...",
      submitBtn: "விண்ணப்பத்தை சமர்ப்பிக்கவும்",
      whatsappBtn: "வாட்ஸ்அப் உதவி",
      successTitle: "விண்ணப்பம் பெறப்பட்டது!",
      successDesc: "நன்றி! திருமதி. S. தாரணி மற்றும் எங்கள் சேர்க்கைக் குழுவினர் 24 மணி நேரத்திற்குள் உங்களைத் தொடர்பு கொள்வார்கள்.",
      sendAnother: "மற்றொரு விண்ணப்பம் அனுப்ப",
      chatWhatsapp: "வாட்ஸ்அப்பில் உரையாட",
    },
    tourModal: {
      badge: "கிணத்துக்கடவு, கோயம்புத்தூர் • நிறுவப்பட்டது 2024",
      title: "வளாக பார்வை முன்பதிவு",
      subtitle: "எங்கள் வளாகத்தை நேரில் பார்வையிட்டு சேர்க்கை விவரங்களை அறிய வாருங்கள்.",
      parentName: "பெற்றோர் பெயர் *",
      childNameAge: "குழந்தையின் பெயர் & வயது / வகுப்பு *",
      phone: "தொலைபேசி / வாட்ஸ்அப் எண் *",
      email: "மின்னஞ்சல் முகவரி (விருப்பப்பட்டால்)",
      programSelect: "வகுப்பை தேர்ந்தெடுக்கவும்",
      visitDate: "பார்வையிடும் தேதி *",
      preferredTime: "விரும்பும் நேரம்",
      notes: "கேள்விகள் / குறிப்புகள் (விருப்பப்பட்டால்)",
      notesPlaceholder: "சேர்க்கை, பள்ளி நேரம், கட்டணம் அல்லது டியூஷன் பற்றிய கேள்விகள்...",
      bookBtn: "முன்பதிவு செய்ய",
      whatsappBtn: "வாட்ஸ்அப்பில் பேச",
      successTitle: "முன்பதிவு வெற்றிகரமாக முடிந்தது!",
      successDesc: "நன்றி! உங்கள் வளாகப் பார்வையை உறுதிப்படுத்த விரைவில் உங்களை அழைப்போம்.",
      addressLabel: "பள்ளி முகவரி:",
      closeBtn: "மூடுக",
    },
    faqs: {
      badge: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      title: "பொதுவான சந்தேகங்களும் விளக்கங்களும்",
      subtitle: "திவித் எடு கேரில் மாண்டிசோரி கல்வி முறை, அன்றாட வழக்கங்கள் மற்றும் சேர்க்கை பற்றிய முழு விவரங்கள்.",
      items: [
        {
          question: "திவித் எடு கேரில் மாண்டிசோரி கல்வியின் தனிச்சிறப்பு என்ன?",
          answer: "குழந்தைகள் தாமாகவே தொட்டுணர்ந்து கற்கும் சான்றளிக்கப்பட்ட மரக் கருவிகள், பல வயது குழந்தைகள் கூடிப் பழகும் வகுப்பறை மற்றும் ஆசிரியர்களின் அன்பான தனிநபர் வழிகாட்டல் எங்கள் சிறப்பு.",
        },
        {
          question: "ஆசிரியர் மற்றும் மாணவர் விகிதம் என்ன?",
          answer: "எங்கள் மழலையர் மற்றும் டே கேர் வகுப்புகளில் 1:6 என்ற குறைந்த விகிதத்தைப் பின்பற்றுகிறோம். இதனால் ஒவ்வொரு குழந்தைக்கும் முழுமையான கவனிப்பும் பாசமும் கிடைக்கிறது.",
        },
        {
          question: "பள்ளி மாணவர்களுக்கான டியூஷன் வகுப்புகள் உள்ளதா?",
          answer: "ஆம்! எல்கேஜி முதல் 12-ஆம் வகுப்பு வரை (CBSE, ICSE மற்றும் மாநில பாடத்திட்டம்) அனைத்து பாடங்களுக்கும் மற்றும் B.E/B.Tech மாணவர்களுக்கான பொறியியல் கணிதத்திற்கும் சிறப்பு மாலை நேர டியூஷன் நடத்தப்படுகிறது.",
        },
        {
          question: "வளாகத்தை பார்வையிட அல்லது சேர்க்கைக்கு எவ்வாறு விண்ணப்பிப்பது?",
          answer: "இந்த இணையதளத்தில் உள்ள 'வளாக பார்வை' பட்டனை கிளிக் செய்து முன்பதிவு செய்யலாம் அல்லது எங்களின் நேரடி உதவி எண்ணான +91 7448981592 என்ற எண்ணுக்கு அழைக்கலாம்.",
        },
      ],
    },
    video: {
      badge: "மெய்நிகர் வளாக காட்சி",
      title: "மாண்டிசோரி கல்வி முறையின் நேரடி செயல்வடிவம்",
      subtitle: "கிணத்துக்கடவு வளாகத்தில் குழந்தைகள் அமைதியான, விளையாட்டு நிறைந்த சூழலில் ஆர்வத்துடன் கற்கும் அழகிய தருணங்கள்.",
      bookTour: "நேரடி வளாக பார்வை",
      track1Title: "திவித் எடு கேரில் ஒரு நாள்",
      track1Subtitle: "மாண்டிசோரி வகுப்பறைகள், தொடு உணர்வு பயிற்சிகள் & மகிழும் குழந்தைகள்.",
      track1Duration: "வளாகப் பார்வை",
      track1Badge: "சிறப்புக் காட்சி",
      track1Tagline: "நேரடி மாண்டிசோரி கற்றல் முறை",
      track2Title: "மகிழ்ச்சியான கற்றல் & விளையாட்டு",
      track2Subtitle: "மாண்டிசோரி கருவிகளுடன் சுயமாக சிந்தித்து செயல்படும் குழந்தைகள்.",
      track2Duration: "வகுப்பறை வாழ்வு",
      track2Badge: "வகுப்பறை காட்சி",
      track2Tagline: "சுயசெயல்பாடுகள் & தொடு உணர்வு பயிற்சிகள்",
      val1Title: "பாதுகாப்பான & அன்பான வளாகம்",
      val1Desc: "தொடர் நேரடிக் கண்காணிப்பு & பாதுகாப்பான சூழல்",
      val2Title: "சான்றிதழ் பெற்ற ஆசிரியர்கள்",
      val2Desc: "உண்மையான மாண்டிசோரி முறையில் பயிற்சி பெற்றவர்கள்",
      val3Title: "தனிநபர் கவனம் & வழிகாட்டல்",
      val3Desc: "ஒவ்வொரு குழந்தைக்கும் குறைந்த எண்ணிக்கையில் தனி கவனிப்பு",
    },
    marqueeGallery: {
      badge: "வளாக புகைப்பட காட்சி",
      title: "மகிழ்ச்சியான கற்றல் தருணங்கள்",
      subtitle: "மாண்டிசோரி வகுப்பறைகள், செய்முறை கற்றல், வெளிப்புற விளையாட்டு மற்றும் பள்ளி வாழ்வின் அழகிய தருணங்கள்.",
      exploreBtn: "முழு புகைப்பட தொகுப்பு",
    },
    testimonials: {
      badge: "பெற்றோர் கருத்துக்கள்",
      title: "எங்கள் பெற்றோர் கூறுவது என்ன?",
      subtitle: "எங்கள் பள்ளியின் கல்வி மற்றும் பராமரிப்பு பற்றி பெற்றோரின் நெகிழ்ச்சியான கருத்துக்கள்.",
      items: [
        {
          id: "1",
          name: "கார்த்திக் சுப்பிரமணியன்",
          role: "கவின் (LKG மாண்டிசோரி) தந்தை",
          quote: "கவினை திவித் எடு கேரில் சேர்த்தது நாங்கள் எடுத்த மிகச்சிறந்த முடிவு. மாண்டிசோரி முறையில் சுயமாக சிந்தித்து செயல்படும் ஆற்றல் அவனிடம் வெகுவாக வளர்ந்துள்ளது. ஒவ்வொரு நாளும் ஆர்வத்துடன் பள்ளிக்குச் செல்கிறான்.",
          rating: 5,
          avatarText: "காசு",
          avatarBg: "bg-[#0750B8]",
        },
        {
          id: "2",
          name: "புவனேஸ்வரி பிரகாஷ்",
          role: "நிலா (Pre-KG) & சூர்யா (8-ஆம் வகுப்பு) பெற்றோர்",
          quote: "கிணத்துக்கடவு வாழ் குடும்பங்களுக்கு திவித் எடு கேர் ஒரு வரப்பிரசாதம். நிலா மாண்டிசோரி வகுப்பறையில் மகிழ்ச்சியாக கற்கிறாள், சூர்யாவிற்கு மாலையில் சிறந்த CBSE கணித பயிற்சி கிடைக்கிறது.",
          rating: 5,
          avatarText: "புபி",
          avatarBg: "bg-[#159447]",
        },
        {
          id: "3",
          name: "சுரேஷ் & அனிதா",
          role: "ஹரிஷ் (Play Group) பெற்றோர்",
          quote: "எங்கள் மகன் தன் பள்ளிப் பயணத்தை இங்கு இனிதே தொடங்கினான். ஆசிரியர்களின் கனிவான அன்பும் வழிகாட்டலும் முதல் நாளிலிருந்தே அவனுக்கு தன்னம்பிக்கையை அளித்தது.",
          rating: 5,
          avatarText: "சுஅ",
          avatarBg: "bg-[#F36B12]",
        },
        {
          id: "4",
          name: "டாக்டர் வெங்கடேஷ் & திவ்யா",
          role: "தியா (UKG) பெற்றோர்",
          quote: "தியாவுக்கு இங்கு கிடைத்த ஃபோனிக்ஸ் ஒலிப்பியல் மற்றும் கணித அடிப்படை கல்வி அவளது பள்ளி சேர்க்கையை மிக எளிதாக்கியது. திருமதி. S. தாரணி அவர்களின் தனிநபர் வழிகாட்டல் அருமை.",
          rating: 5,
          avatarText: "வெதி",
          avatarBg: "bg-[#0750B8]",
        },
        {
          id: "5",
          name: "மனோஜ் & சுவாதி",
          role: "ஆத்விக் (Day Care) பெற்றோர்",
          quote: "கோயம்புத்தூரில் பணிபுரியும் எங்களுக்கு பாதுகாப்பான மற்றும் அன்பான டே கேர் தேவைப்பட்டது. திவித் எடு கேரில் சிறப்பான பராமரிப்பும் சத்தான உணவும் வழங்கப்படுகிறது.",
          rating: 5,
          avatarText: "மசு",
          avatarBg: "bg-[#F5B900]",
        },
        {
          id: "6",
          name: "சரவணன் & பிரியா",
          role: "ரிதன்யா (10-ஆம் வகுப்பு CBSE) பெற்றோர்",
          quote: "10-ஆம் வகுப்பு அறிவியல் மற்றும் கணிதத்திற்கான டியூஷன் வகுப்புகள் இங்கு மிகச் சிறப்பாக உள்ளன. கருத்துப் புரிதலும் தொடர் தேர்வுகளும் அவளது பொதுத்தேர்வு நம்பிக்கையை உயர்த்தியது.",
          rating: 5,
          avatarText: "சபி",
          avatarBg: "bg-[#159447]",
        },
        {
          id: "7",
          name: "ராஜேஷ் சந்திரசேகர்",
          role: "மிதுன் (Pre-KG) தந்தை",
          quote: "முதல் நாள் பள்ளிப் பார்வை முதல் அன்றாட மாண்டிசோரி பயிற்சிகள் வரை, எங்கள் மகனின் பேச்சுத்திறனும் அறிவாற்றலும் வியக்கத்தக்க வகையில் வளர்ந்துள்ளது.",
          rating: 5,
          avatarText: "ராச",
          avatarBg: "bg-[#159447]",
        },
        {
          id: "8",
          name: "அலிஸா கான்",
          role: "ஸோயா (UKG) பெற்றோர்",
          quote: "தமிழ் எழுத்து புதிர்கள், ஆங்கில ஃபோனிக்ஸ் மற்றும் இந்தி அடிப்படைகள் இங்கு மிகுந்த ஈடுபாட்டுடன் கற்பிக்கப்படுகின்றன. வடபுதூரில் உள்ள தூய்மையான வளாகம் குழந்தைகளுக்கு ஏற்றது.",
          rating: 5,
          avatarText: "அகா",
          avatarBg: "bg-[#F36B12]",
        },
        {
          id: "9",
          name: "விக்னேஷ் குமார்",
          role: "பொறியியல் கணித மாணவர்",
          quote: "திருமதி. S. தாரணி அவர்களின் பொறியியல் கணித வகுப்புகள் கடினமான கால்குலஸ் மற்றும் அணிகள் கணக்குகளை மிக எளிதாக புரிய வைத்தது. கல்லூரி மாணவர்களுக்கு மிகச்சிறந்த மையம்.",
          rating: 5,
          avatarText: "விகு",
          avatarBg: "bg-[#0750B8]",
        },
      ],
    },
    campusMap: {
      badge: "வளாக இருப்பிடம் & வழிகள்",
      title: "எங்கள் பள்ளி வளாகத்தை நேரில் பார்வையிடுங்கள்",
      getDirections: "கூகுள் மேப்ஸில் வழியைப் பார்க்க",
      locationCity: "கோயம்புத்தூர், தமிழ்நாடு",
    },
    support: {
      title: "திவித் உடனடி உதவி மையம்",
      tagline: "சேர்க்கை தகவல்கள் & உடனடி உதவி",
      whatsappChat: "வாட்ஸ்அப் மூலம் பேச",
      directCall: "நேரடி அழைப்பு",
      gameTitle: "குழந்தைகள் விளையாட்டு உலகம்",
      gameSub: "8+ மாண்டிசோரி விளையாட்டுகள் • இலவசம்",
    },
    gamesPage: {
      breadcrumb: "விளையாட்டு உலகம்",
      badge: "மாண்டிசோரி கற்றல் & விளையாட்டு அரங்கம்",
      title: "திவித் குழந்தைகள் விளையாட்டு & கற்றல் உலகம்",
      highlight: "விளையாட்டு & கற்றல்",
      desc: "மழலையர் மற்றும் தொடக்கப்பள்ளி குழந்தைகளுக்கான மகிழ்ச்சியான, பாதுகாப்பான மாண்டிசோரி கற்றல் விளையாட்டுகள். டவர் அடுக்குதல், வடிவங்கள் பொருத்துதல், பலூன் கணிதம், விலங்குகள் நினைவாற்றல், மேஜிக் ஓவியம் மற்றும் வானவில் பியானோ!",
      allGames: "அனைத்து விளையாட்டுகள்",
      sensoryLogic: "அறிவாற்றல் & வடிவங்கள்",
      mathNumbers: "கணிதம் & எண்கள்",
      creativeArt: "ஓவியம் & இசை",
      memorySound: "நினைவாற்றல் & ஃபோனிக்ஸ்",
      starsWon: "வென்ற நட்சத்திரங்கள்",
      soundOn: "ஒலி இயக்கத்தில்",
      soundOff: "ஒலி முடக்கப்பட்டது",
      fullScreen: "முழுத்திரை",
      playNow: "விளையாடு",
      safeForKids: "100% பாதுகாப்பானது • விளம்பரங்கள் இல்லை",
      offlineReady: "அனைத்து மொபைல் & கணினிகளில் இயங்கும்",
    },
    footer: {
      aboutText:
        "திவித் எடு கேர் - கிணத்துக்கடவு, கோயம்புத்தூரில் அமைந்துள்ள முன்னணி மாண்டிசோரி மழலையர் பள்ளி மற்றும் டியூஷன் மையம். நிறுவனர்: திருமதி. S. தாரணி (M.Sc., PGDM, PGMTTC).",
      quickLinks: "முக்கிய இணைப்புகள்",
      programs: "பாடத்திட்டங்கள்",
      contactInfo: "தொடர்பு முகவரி",
      copyright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. மாண்டிசோரி கல்விச் சேவை.",
    },
  },
};
