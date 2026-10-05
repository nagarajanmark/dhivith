export type Language = "en" | "ta";

export interface TranslationDictionary {
  // Navigation
  nav: {
    home: string;
    about: string;
    classes: string;
    gallery: string;
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
  // Quick Support & Games
  support: {
    title: string;
    tagline: string;
    whatsappChat: string;
    directCall: string;
    gameTitle: string;
    gameSub: string;
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
    support: {
      title: "Dhivith Quick Support Desk",
      tagline: "Instant assistance & preschool admissions help",
      whatsappChat: "Instant WhatsApp Chat",
      directCall: "Direct Helpline",
      gameTitle: "Tower Builder Game",
      gameSub: "Stack floors • Works Offline",
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
    support: {
      title: "திவித் உடனடி உதவி மையம்",
      tagline: "சேர்க்கை தகவல்கள் & உடனடி உதவி",
      whatsappChat: "வாட்ஸ்அப் மூலம் பேச",
      directCall: "நேரடி அழைப்பு",
      gameTitle: "டவர் பில்டர் விளையாட்டு",
      gameSub: "தளங்களை அடுக்குக • ஆஃப்லைனில் இயங்கும்",
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
