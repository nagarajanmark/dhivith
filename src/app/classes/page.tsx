"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { PROGRAMS, COMPREHENSIVE_SERVICES, SCHOOL_INFO } from "@/data/schoolData";
import {
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Calculator,
  Baby,
  Star,
  ChevronDown,
  FileText,
  Phone,
  Check,
} from "lucide-react";
import { siteConfig } from "@/config/site";

import { useLanguage } from "@/context/LanguageContext";

export default function ClassesPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "preschool" | "tuition">("all");
  const [selectedProgram, setSelectedProgram] = useState<string>("pre-kg");
  const { language, t } = useLanguage();

  const handleOpenTour = (progId?: string) => {
    setSelectedProgram(progId || "pre-kg");
    setIsTourModalOpen(true);
  };

  const tuitionOfferings = [
    {
      id: "primary-tuition",
      title: language === "ta" ? "தொடக்கக் கல்வி டியூஷன் (LKG – 5-ஆம் வகுப்பு)" : "Primary Academic Coaching (LKG – Grade 5)",
      grades: "LKG to 5th Std",
      syllabus: "CBSE • ICSE • State Board • Matriculation",
      tagline: language === "ta" ? "ஃபோனிக்ஸ் ஒலி உச்சரிப்பு, கையெழுத்துப் பயிற்சி, எளிய கணிதம் மற்றும் வாசிப்புத் திறன்." : "Solid foundations in phonics, English grammar, reading fluency, and mental arithmetic.",
      features: [
        language === "ta" ? "ஃபோனிக்ஸ் & ஆங்கில கையெழுத்து மேம்பாடு" : "Phonics & English handwriting improvement",
        language === "ta" ? "தினசரி பயிற்சித்தாள்கள் & மனக்கணக்கு பயிற்சி" : "Daily concept worksheets & math drills",
        language === "ta" ? "குறைந்த எண்ணிக்கையில் தனிநபர் கவனம்" : "Small batch size with individual attention",
        language === "ta" ? "வீட்டுப்பாடம் மற்றும் சந்தேகங்கள் தீர்வு" : "Daily homework support & doubt clearing",
      ],
      timing: language === "ta" ? "காலை: 5:00 – 7:00 AM | மாலை: 5:00 – 7:00 PM" : "Morning: 5:00 – 7:00 AM | Evening: 5:00 – 7:00 PM",
      ratio: language === "ta" ? "மாலையில் 8 ஆசிரியர்கள் வழிகாட்டல்" : "8 Dedicated Evening Staffs",
      color: "#0750B8",
      bg: "bg-[#EBF3FF]",
    },
    {
      id: "middle-secondary-tuition",
      title: language === "ta" ? "உயர்நிலை வகுப்புகள் (6 – 10 ஆம் வகுப்பு)" : "Middle & High School (Grades 6 – 10)",
      grades: "6th to 10th Std",
      syllabus: "CBSE • ICSE • Tamil Nadu State Board",
      tagline: language === "ta" ? "கணிதம், அறிவியல் (இயற்பியல், வேதியியல், உயிரியல்) மற்றும் மொழிப் பாடங்களில் சிறப்பான தேர்ச்சி." : "Subject-matter mastery in Mathematics, Science (Physics, Chemistry, Biology), and Languages.",
      features: [
        language === "ta" ? "பாடவாரியான அலகுத் தேர்வுகள் & மாதிரி தேர்வுகள்" : "Chapter-wise unit tests & board revision",
        language === "ta" ? "படிநிலையான கணக்கீட்டு முறைகள்" : "Step-by-step problem-solving methods",
        language === "ta" ? "எளிய செய்முறை விளக்கங்கள்" : "Science practical concepts explained simply",
        language === "ta" ? "10-ஆம் வகுப்பு பொதுத்தேர்வு சிறப்புப் பயிற்சி" : "Special focus on 10th Board Exam score boost",
      ],
      timing: language === "ta" ? "காலை: 5:00 – 7:00 AM | மாலை: 5:00 – 9:30 PM" : "Morning: 5:00 – 7:00 AM | Evening: 5:00 – 9:30 PM",
      ratio: language === "ta" ? "மாலையில் 8 ஆசிரியர்கள் வழிகாட்டல்" : "8 Evening Staff Members",
      color: "#159447",
      bg: "bg-[#EAF8EF]",
    },
    {
      id: "higher-secondary-tuition",
      title: language === "ta" ? "மேல்நிலைக் கல்வி (11 & 12 ஆம் வகுப்பு)" : "Higher Secondary (Grades 11 & 12)",
      grades: language === "ta" ? "11 & 12 ஆம் வகுப்பு (+1 & +2)" : "11th & 12th (+1 & +2)",
      syllabus: language === "ta" ? "CBSE & மாநில பாடத்திட்டம் (State Board)" : "CBSE & State Board",
      tagline: language === "ta" ? "கணிதம், இயற்பியல், வேதியியல் மற்றும் கணினி அறிவியலுக்கான தீவிர பயிற்சி." : "Rigorous coaching for Mathematics, Physics, Chemistry, and Computer Science.",
      features: [
        language === "ta" ? "மூத்த ஆசிரியர்களின் ஆழ்ந்த விளக்கவுரைகள்" : "In-depth concept lectures by senior faculty",
        language === "ta" ? "கடந்த 10 ஆண்டு வினாத்தாள் பயிற்சிகள்" : "Previous 10-year question paper solving",
        language === "ta" ? "சூத்திர குறிப்புகள் & நேர மேலாண்மை வழிகாட்டல்" : "Formula sheets, derivations & time-management tips",
        language === "ta" ? "பெற்றோருடன் தொடர் முன்னேற்ற ஆய்வு" : "Regular parent performance reviews",
      ],
      timing: language === "ta" ? "காலை: 5:00 – 7:00 AM | மாலை: 5:00 – 9:30 PM" : "Morning: 5:00 – 7:00 AM | Evening: 5:00 – 9:30 PM",
      ratio: language === "ta" ? "மாலையில் 8 ஆசிரியர்கள் வழிகாட்டல்" : "8 Evening Staff Members",
      color: "#F36B12",
      bg: "bg-[#FFF2E8]",
    },
    {
      id: "engg-maths-hub",
      title: language === "ta" ? "பொறியியல் கணிதம் (Engineering Mathematics)" : "Engineering Mathematics Coaching",
      grades: "B.E. / B.Tech (M1, M2, M3, M4, Discrete Maths)",
      syllabus: language === "ta" ? "அண்ணா பல்கலைக்கழகம் & தன்னாட்சி கல்லூரிகள்" : "Anna University & Autonomous Colleges",
      tagline: language === "ta" ? "திருமதி. S. தாரணி (M.Sc., PGDM, PGMTTC) வழிகாட்டலில் அண்ணா பல்கலைக்கழக சிறப்பு கணித வகுப்புகள்." : "Expert coaching under Mrs. S Tharani (M.Sc., PGDM, PGMTTC) for fast backlog clearance and top GPA.",
      features: [
        language === "ta" ? "எளிமையான படிநிலை கணக்கீட்டு தீர்வுகள்" : "Clear step-by-step proofs and numericals",
        language === "ta" ? "அண்ணா பல்கலைக்கழக முந்தைய தேர்வு வினாக்கள் தீர்வு" : "Anna University previous exam papers solved",
        language === "ta" ? "தனிநபர் சந்தேகங்கள் உடனுக்குடன் தீர்வு" : "Individual doubt resolution for every student",
        language === "ta" ? "100% தேர்ச்சி விகிதம்" : "Proven 100% pass track record",
      ],
      timing: language === "ta" ? "காலை: 5:00 – 7:00 AM | மாலை: 5:00 – 9:30 PM" : "Morning: 5:00 – 7:00 AM | Evening: 5:00 – 9:30 PM",
      ratio: language === "ta" ? "நேரடி தனிநபர் வழிகாட்டல்" : "Personal Mentorship",
      color: "#F5B900",
      bg: "bg-[#FFF9E5]",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => handleOpenTour()} />

      <PageHeader
        breadcrumb={language === "ta" ? "சேர்க்கை & வகுப்புகள்" : "Admissions & Classes"}
        title={language === "ta" ? "மழலையர் பள்ளி சேர்க்கை & வகுப்புகள்" : "Montessori Preschool & Daycare Admissions"}
        highlightedWord={language === "ta" ? "மழலையர் பள்ளி சேர்க்கை" : "Preschool & Daycare Admissions"}
        description={
          language === "ta"
            ? "கிணத்துக்கடவில் உள்ள திவித் எடு கேர் வளாகத்தில் டே கேர், ப்ளே குரூப், பிரீ-கேஜி, எல்.கே.ஜி மற்றும் யு.கே.ஜி சேர்க்கை நடைபெறுகிறது."
            : "Admissions open for Daycare, Play Group, Pre-KG, LKG and UKG in Kinathukadavu. Authentic Montessori classrooms, caring certified educators, and child-safe prepared spaces."
        }
        bannerImage="/school_images/montessori-child-activity-workspace-coimbatore.webp"
        gradientTheme="blue"
      />

      {/* Category Switcher Tabs */}
      <section className="bg-gray-50 border-b border-gray-200 py-6 sticky top-16 z-30 backdrop-blur-md bg-gray-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-[#0750B8] text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {language === "ta" ? "அனைத்து வகுப்புகளும்" : "All Classes & Courses"}
          </button>
          <button
            onClick={() => setSelectedCategory("preschool")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === "preschool"
                ? "bg-[#159447] text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {language === "ta" ? "🎒 மாண்டிசோரி & டே கேர் (வயது 1.5 – 6)" : "🎒 Pre-School & Day Care (Age 1.5 – 6)"}
          </button>
          <button
            onClick={() => setSelectedCategory("tuition")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === "tuition"
                ? "bg-[#F36B12] text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {language === "ta" ? "📚 டியூஷன்கள் (LKG முதல் 12 & கணிதம்)" : "📚 Tuitions (LKG to 12th & Engg Maths)"}
          </button>
        </div>
      </section>

      {/* 1. MONTESSORI PRE-SCHOOL PROGRAMS */}
      {(selectedCategory === "all" || selectedCategory === "preschool") && (
        <section id="preschool-section" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#159447] bg-[#EAF8EF] px-4 py-1.5 rounded-full border border-[#159447]/20">
                {language === "ta" ? "மாண்டிசோரி மழலையர் கல்வி" : "Montessori Pre-School Pathway"}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#121D28] mt-3">
                {language === "ta" ? "ஆரம்பப் பள்ளி வகுப்புகள் (டே கேர் முதல் UKG வரை)" : "Early Childhood Classes (Day Care to UKG)"}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-2">
                {language === "ta" ? "சான்றளிக்கப்பட்ட மாண்டிசோரி வகுப்பறைகள் மற்றும் 1:10 தனிநபர் ஆசிரியர் கவனம்." : "Certified Montessori environments with 1:10 individual educator attention."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROGRAMS.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Program Image */}
                    <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                      <Image
                        src={prog.image}
                        alt={`${prog.name} (${prog.ageRange}) - Dhivith Edu Care Kinathukadavu Coimbatore`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-white/95 text-[#0750B8] shadow-sm backdrop-blur-md">
                          {language === "ta" ? `வயது: ${prog.ageRangeTa || prog.ageRange}` : `Age: ${prog.ageRange}`}
                        </span>
                      </div>
                    </div>

                    {/* Program Content */}
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-[#121D28]">
                        {(language === "ta" && prog.nameTa) ? prog.nameTa : prog.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#159447] mt-0.5 mb-3">
                        {(language === "ta" && prog.subTitleTa) ? prog.subTitleTa : prog.subTitle}
                      </p>
                      <p className="text-xs text-[#5E6D7A] leading-relaxed mb-4">
                        {(language === "ta" && prog.descriptionTa) ? prog.descriptionTa : prog.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        {((language === "ta" && prog.keyBenefitsTa) ? prog.keyBenefitsTa : prog.keyBenefits).slice(0, 3).map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#2A343D]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleOpenTour(prog.id)}
                      className="w-full py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-amber-300" />
                      <span>{language === "ta" ? "சேர்க்கை முன்பதிவு" : "Enquire Admission"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. TUITION & COACHING CLASSES */}
      {(selectedCategory === "all" || selectedCategory === "tuition") && (
        <section id="tuition-section" className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F36B12] bg-[#FFF2E8] px-4 py-1.5 rounded-full border border-[#F36B12]/20">
                {language === "ta" ? "சிறப்பு கல்வி & டியூஷன் மையம்" : "Academic Coaching Hub"}
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#121D28] mt-3">
                {language === "ta" ? "மாலை நேர டியூஷன் (LKG முதல் 12 வரை & பொறியியல் கணிதம்)" : "Tuition Classes (LKG to 12th Std & Engineering Maths)"}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-2">
                {language === "ta" ? "கருத்து சார்ந்த எளிய கற்பித்தல் மற்றும் தனிநபர் சந்தேகங்கள் உடனுக்குடன் தீர்வு." : "Concept-based teaching with individual doubt clearing in small focused batches."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tuitionOfferings.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-extrabold"
                        style={{ backgroundColor: `${t.color}15`, color: t.color }}
                      >
                        {t.grades}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {t.syllabus}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#121D28] mb-2">
                      {t.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed mb-6">
                      {t.tagline}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {t.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#2A343D]">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-[#5E6D7A] space-y-0.5 text-center sm:text-left">
                      <p>⏰ {t.timing}</p>
                      <p>👥 {t.ratio}</p>
                    </div>

                    <button
                      onClick={() => handleOpenTour(t.id)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <Calendar className="w-3.5 h-3.5 text-amber-300" />
                      <span>{language === "ta" ? "வகுப்பில் சேர" : "Join Batch"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. ADMISSION PROCESS & REQUIRED DOCUMENTS */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0750B8] bg-[#EBF3FF] px-4 py-1.5 rounded-full border border-[#0750B8]/20">
              {language === "ta" ? "சேர்க்கை வழிமுறை" : "Enrollment Roadmap"}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#121D28] mt-3">
              {language === "ta" ? "எளிய சேர்க்கை நடைமுறைகள்" : "Admission Process & Required Documents"}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-2">
              {language === "ta"
                ? "உங்கள் குழந்தையை திவித் எடு கேரில் சேர்க்க 4 எளிய படிகள்."
                : "4 transparent steps to welcome your child into our caring Montessori family in Kinathukadavu."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: "01",
                title: language === "ta" ? "பள்ளி வளாக பார்வை" : "1. Campus Walkthrough",
                desc: language === "ta" ? "வடகாளூர் வளாகத்திற்கு வருகை தந்து வகுப்பறைகள் மற்றும் கல்வி இயக்குநரை சந்தித்தல்." : "Visit our Vadapudur campus, explore the sunlit prepared environment, and meet Founder Mrs. S Tharani.",
              },
              {
                step: "02",
                title: language === "ta" ? "வயது தகுதி அறிதல்" : "2. Age Readiness",
                desc: language === "ta" ? "குழந்தையின் வயதுக்கேற்ப டே கேர், ப்ளே குரூப், Pre-KG, LKG அல்லது UKG வகுப்பை தேர்வு செய்தல்." : "Select the developmentally appropriate stage (Daycare: 1.5-6y, Playgroup: 2-3y, Pre-KG: 3-4y, LKG: 4-5y, UKG: 5-6y).",
              },
              {
                step: "03",
                title: language === "ta" ? "ஆவணங்கள் சமர்ப்பித்தல்" : "3. Document Submission",
                desc: language === "ta" ? "பிறப்புச் சான்றிதழ் நகல், 4 பாஸ்போர்ட் அளவிலான புகைப்படங்கள் மற்றும் பெற்றோர் ஆதார் நகல்." : "Submit application along with birth certificate copy, 4 passport photos, and parents' Aadhaar ID proof.",
              },
              {
                step: "04",
                title: language === "ta" ? "வகுப்பு தொடக்கம்" : "4. Welcome & Orientation",
                desc: language === "ta" ? "சேர்க்கை உறுதி செய்யப்பட்டு குழந்தையின் மகிழ்ச்சியான மாண்டிசோரி கற்றல் தொடக்கம்." : "Receive our daily rhythm guide, welcome kit, and begin joyful hands-on learning with caring certified educators.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
                <span className="text-3xl font-black text-[#0750B8]/20 font-mono block mb-2">{item.step}</span>
                <h3 className="font-bold text-base text-[#121D28] mb-2">{item.title}</h3>
                <p className="text-xs text-[#5E6D7A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Required Documents Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 max-w-4xl mx-auto shadow-sm">
            <h3 className="font-bold text-lg text-[#121D28] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0750B8]" />
              <span>{language === "ta" ? "சேர்க்கைக்கு தேவையான ஆவணங்கள்" : "Required Admission Documents Checklist"}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2A343D]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === "ta" ? "குழந்தையின் பிறப்புச் சான்றிதழ் நகல்" : "Copy of Child's Birth Certificate"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === "ta" ? "4 பாஸ்போர்ட் அளவு புகைப்படங்கள்" : "4 Recent Passport Size Photographs of Child"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === "ta" ? "தாய் மற்றும் தந்தை ஆதார் அட்டை நகல்" : "Parents' Aadhaar Card / ID Proof Copies"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === "ta" ? "தடுப்பூசி அட்டவணை நகல் (Immunization Record)" : "Child Immunization / Health Record Copy"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADMISSION FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159447] bg-[#EAF8EF] px-4 py-1.5 rounded-full border border-[#159447]/20">
              {language === "ta" ? "பொதுவான கேள்விகள்" : "Parents Frequently Asked Questions"}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#121D28] mt-3">
              {language === "ta" ? "சேர்க்கை பற்றிய சந்தேகங்கள்" : "Admission & Program FAQs"}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-2">
              {language === "ta"
                ? "கிணத்துக்கடவு பெற்றோர்களின் முக்கிய கேள்விகளுக்கான தெளிவான பதில்கள்."
                : "Answers to common questions regarding admissions, age eligibility, timings, and daycare facilities."}
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the age eligibility for Pre-KG, LKG, and UKG admissions?",
                a: "For Playgroup: 2 to 3 years. For Pre-KG: 3 to 4 years. For LKG Montessori: 4 to 5 years. For UKG preparatory: 5 to 6 years. For Day Care, children from 1.5 to 6 years are lovingly accommodated.",
              },
              {
                q: "What are the school and daycare timings in Kinathukadavu?",
                a: "Montessori Preschool operates Monday to Saturday from 8:30 AM to 1:30 PM. Extended Day Care is available until 6:00 PM with supervised meals and tranquil rest pods. Tuitions operate in early morning (5:00 AM – 7:00 AM) and evening batches (5:00 PM – 9:30 PM).",
              },
              {
                q: "Are admissions open throughout the year?",
                a: "Yes, admissions for Day Care, Play Group, and tuition batches are accepted year-round based on seat availability. Formal Pre-KG, LKG, and UKG academic batches begin every academic term, with mid-term admissions welcomed for families relocating to Kinathukadavu, Coimbatore, or Pollachi.",
              },
              {
                q: "What educator-to-child ratio is maintained at Dhivith Edu Care?",
                a: "We maintain an intimate 1:4 ratio for Day Care and 1:10 for Montessori classes, ensuring every child receives individualized pedagogical guidance and personalized care.",
              },
              {
                q: "How can parents from Pollachi, Palladam, and Coimbatore apply?",
                a: "Parents can book a campus walkthrough by calling +91 74489 81592, sending an online enquiry, or visiting our campus at S.F.Nos. 382/35, 382/36, S.K.Garden, Site Nos. 16,17, Vadapudur, Kinathukadavu.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 rounded-2xl border border-gray-200 p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-bold text-sm sm:text-base text-[#121D28] pr-4">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180 shrink-0" />
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-[#5E6D7A] leading-relaxed border-t border-gray-200/80 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* Structured Data script for Admission FAQs */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the age eligibility for Pre-KG, LKG, and UKG admissions?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "For Playgroup: 2 to 3 years. For Pre-KG: 3 to 4 years. For LKG Montessori: 4 to 5 years. For UKG preparatory: 5 to 6 years. For Day Care, children from 1.5 to 6 years are lovingly accommodated.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are the school and daycare timings in Kinathukadavu?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Montessori Preschool operates Monday to Saturday from 8:30 AM to 1:30 PM. Extended Day Care is available until 6:00 PM with supervised meals and tranquil rest pods. Tuitions operate in early morning (5:00 AM – 7:00 AM) and evening batches (5:00 PM – 9:30 PM).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are admissions open throughout the year?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, admissions for Day Care, Play Group, and tuition batches are accepted year-round based on seat availability. Formal Pre-KG, LKG, and UKG academic batches begin every academic term.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What educator-to-child ratio is maintained at Dhivith Edu Care?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We maintain an intimate 1:4 ratio for Day Care and 1:10 for Montessori classes, ensuring every child receives individualized pedagogical guidance and personalized care.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can parents from Pollachi, Palladam, and Coimbatore apply?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Parents can book a campus walkthrough by calling +91 74489 81592, sending an online enquiry, or visiting our campus at S.F.Nos. 382/35, 382/36, S.K.Garden, Site Nos. 16,17, Vadapudur, Kinathukadavu.",
                    },
                  },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* School Visit CTA */}
      <SchoolVisitCTA onOpenTourModal={() => handleOpenTour()} />

      {/* Footer */}
      <Footer onOpenTourModal={() => handleOpenTour()} />

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        defaultProgram={selectedProgram}
      />
    </main>
  );
}
