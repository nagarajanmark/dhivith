"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Sparkles,
  Heart,
  Target,
  Users2,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

interface PhilosophyPillar {
  id: string;
  titleEn: string;
  titleTa: string;
  shortDescEn: string;
  shortDescTa: string;
  detailedTextEn: string;
  detailedTextTa: string;
  quoteEn: string;
  quoteTa: string;
  icon: React.ReactNode;
  color: string;
  bgLight: string;
  image: string;
  benefitsEn: string[];
  benefitsTa: string[];
}

export const PhilosophySection: React.FC = () => {
  const { language, t } = useLanguage();

  const pillars: PhilosophyPillar[] = [
    {
      id: "child-centered",
      titleEn: "Child-Centered Learning",
      titleTa: "குழந்தை மையக் கற்றல்",
      shortDescEn: "The child is both the builder and the architect of their own intellect.",
      shortDescTa: "குழந்தையே தனது சொந்த அறிவின் கட்டிடக் கலைஞன்.",
      detailedTextEn:
        "Rather than passive instruction where an adult dictates uniform tasks, the Montessori prepared environment is calibrated to each child's spontaneous curiosity. Children choose their materials, engage in deep self-selected work cycles, and discover the pure intrinsic joy of problem-solving.",
      detailedTextTa:
        "திணிக்கப்பட்ட பாடங்களுக்குப் பதிலாக, குழந்தையின் இயல்பான ஆர்வத்திற்கேற்ப வடிவமைக்கப்பட்ட மாண்டிசோரி சூழலில் சுயமாகத் தேர்வு செய்து கற்கும் முறை. இதன் மூலம் குழந்தைகள் ஆழ்ந்த கவனத்துடனும் தன்னம்பிக்கையுடனும் கற்கிறார்கள்.",
      quoteEn: "The greatest sign of success for a teacher is to be able to say, 'The children are now working as if I did not exist.'",
      quoteTa: "“ஆசிரியர் இல்லாத போதும் குழந்தைகள் தாமாகவே முழு ஈடுபாட்டுடன் செயல்படுவதே கல்வியின் மிகச்சிறந்த வெற்றி.”",
      icon: <Compass className="w-6 h-6 text-[#0750B8]" />,
      color: "#0750B8",
      bgLight: "bg-[#EBF3FF]",
      image: "/school_images/1000453992.webp",
      benefitsEn: [
        "Internalized self-motivation rather than external rewards",
        "Deep 3-hour focus and concentration stamina",
        "Freedom to explore interests without artificial rush",
      ],
      benefitsTa: [
        "சுய உந்துதல் மற்றும் தன்னார்வக் கற்றல்",
        "ஆழ்ந்த கவனக்குவிப்பு மற்றும் பொறுமை",
        "சுதந்திரமான கற்றல் வேகம்",
      ],
    },
    {
      id: "independence",
      titleEn: "Independence & Self-Reliance",
      titleTa: "சுயசார்பு & தன்னம்பிக்கை",
      shortDescEn: "Never help a child with a task at which they feel they can succeed.",
      shortDescTa: "குழந்தை தானே செய்யக்கூடிய செயலில் ஒருபோதும் தேவையற்ற தலையீடு செய்யாதீர்கள்.",
      detailedTextEn:
        "From buttoning their coats to pouring their own water and returning materials to low cedar shelves, children cultivate muscular memory, self-care mastery, and profound confidence in their own capabilities.",
      detailedTextTa:
        "தனக்கான வேலைகளை (உடைகள் அணிதல், நீர் அருந்துதல், பொருட்களை அடுக்கி வைத்தல்) தானே செய்வதன் மூலம் குழந்தைகள் சுயசார்பையும் தன்னம்பிக்கையையும் வளர்த்துக் கொள்கிறார்கள்.",
      quoteEn: "Help me to do it by myself.",
      quoteTa: "“நானே சுயமாக செய்து முடிக்க எனக்கு வழிகாட்டுங்கள்.”",
      icon: <Target className="w-6 h-6 text-[#159447]" />,
      color: "#159447",
      bgLight: "bg-[#EAF8EF]",
      image: "/school_images/1000450316.webp",
      benefitsEn: [
        "Executive function and decision-making poise",
        "Physical coordination and spatial refinement",
        "Joyful pride in everyday life accomplishments",
      ],
      benefitsTa: [
        "சுயமாக முடிவெடுக்கும் திறன்",
        "உடல் ஒருங்கிணைப்பு மற்றும் நுண்தசை பயிற்சி",
        "சுயபராமரிப்பு மற்றும் ஒழுக்கம்",
      ],
    },
    {
      id: "hands-on",
      titleEn: "Hands-On Tactile Exploration",
      titleTa: "தொட்டு உணர்ந்து கற்கும் முறை",
      shortDescEn: "The human hand is the direct instrument of human intelligence.",
      shortDescTa: "மனிதனின் கைகளே அவனது அறிவின் நேரடி வழிகாட்டி.",
      detailedTextEn:
        "Children do not learn abstract symbols by staring at screens or chalkboards. They touch three-dimensional wooden cylinders, count golden glass beads, trace textured sandpaper letters, and physically feel mathematical relationships before writing.",
      detailedTextTa:
        "வெறும் திரைகளைப் பார்க்காமல், மரத்தாலான கருவிகள், மணிகள், மணற்காகித எழுத்துக்களைத் தொட்டு உணர்ந்து படிப்பதன் மூலம் கணிதம் மற்றும் மொழி எளிதாக மனதில் பதிகிறது.",
      quoteEn: "What the hand does, the mind remembers.",
      quoteTa: "“கைகள் செய்யும் செயலை மனம் ஒருபோதும் மறப்பதில்லை.”",
      icon: <Sparkles className="w-6 h-6 text-[#F36B12]" />,
      color: "#F36B12",
      bgLight: "bg-[#FFF2E8]",
      image: "/school_images/1000449608.webp",
      benefitsEn: [
        "Multi-sensory neurological pathways formation",
        "Concrete foundational grasp of math and phonetics",
        "Self-correcting feedback without adult criticism",
      ],
      benefitsTa: [
        "ஐம்புலன் சார்ந்த கற்றல் வளர்ச்சி",
        "ஆழமான கணித மற்றும் ஒலிப்பியல் புரிதல்",
        "சுயமாக தவறை திருத்திக் கொள்ளும் முறை",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activePillar = pillars[activeTab] || pillars[0];

  return (
    <section
      id="philosophy"
      className="py-20 lg:py-28 bg-[#FAFAFA] relative overflow-hidden border-t border-gray-100"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0750B8]/5 via-[#159447]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0750B8] text-xs font-bold uppercase tracking-wider border border-gray-200/90 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.philosophy.badge}</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#0F172A] tracking-tight leading-tight">
            {language === "ta" ? "ஒவ்வொரு குழந்தையும் தனித்துவமானது. கற்றல் ஒரு பேரின்பம்." : "Every Child Is Unique. Every Journey Matters."}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-3 font-normal max-w-2xl mx-auto">
            {t.philosophy.desc}
          </p>
        </div>

        {/* Interactive Tab Navigation - Clean Wrapped Grid/Flex */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {pillars.map((pillar, idx) => {
            const isSelected = activeTab === idx;
            const title = language === "ta" ? pillar.titleTa : pillar.titleEn;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? "bg-[#0750B8] text-white border-[#0750B8] shadow-lg scale-105"
                    : "bg-white text-gray-700 border-gray-200/80 hover:border-[#0750B8]/40 hover:bg-gray-50 shadow-xs"
                }`}
              >
                <span
                  className={`p-1 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-gray-100"
                  }`}
                >
                  {pillar.icon}
                </span>
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Layout: Content + Large Photography Frame */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-7 sm:p-12 lg:p-14 border border-gray-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Dr. Montessori Quote */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF3FF] text-[#0750B8] shadow-xs border border-[#0750B8]/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{language === "ta" ? `தத்துவம் ${activeTab + 1} / ${pillars.length}` : `Pillar ${activeTab + 1} of ${pillars.length}`}</span>
            </div>

            <h3 className="font-display font-black text-xl sm:text-2xl lg:text-2xl xl:text-3xl text-[#0F172A] leading-tight">
              {language === "ta" ? activePillar.titleTa : activePillar.titleEn}
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed italic border-l-4 border-[#0750B8] pl-4 py-0.5">
              &ldquo;{language === "ta" ? activePillar.shortDescTa : activePillar.shortDescEn}&rdquo;
            </p>

            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-normal">
              {language === "ta" ? activePillar.detailedTextTa : activePillar.detailedTextEn}
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-2.5 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {language === "ta" ? "முக்கிய வளர்ச்சி இலக்குகள்:" : "Key Development Outcomes:"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(language === "ta" ? activePillar.benefitsTa : activePillar.benefitsEn).map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-gray-50/90 border border-gray-100 text-xs sm:text-[13px] font-medium text-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#159447] flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dr. Montessori Quote Block */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#EBF3FF]/60 to-[#EAF8EF]/60 border border-gray-200/80 relative overflow-hidden">
              <Quote className="w-10 h-10 text-amber-400/25 absolute top-2 right-3 pointer-events-none" />
              <p className="text-xs sm:text-sm italic text-[#0F172A] relative z-10 leading-relaxed font-serif">
                &ldquo;{language === "ta" ? activePillar.quoteTa : activePillar.quoteEn}&rdquo;
              </p>
              <div className="mt-2 text-[11px] font-bold text-[#0750B8] uppercase tracking-wider">
                — {language === "ta" ? "டாக்டர் மரியா மாண்டிசோரி (மருத்துவர் & கல்வியாளர்)" : "Dr. Maria Montessori (Physician & Pioneer)"}
              </div>
            </div>
          </div>

          {/* Right Column: Large Frame Photography + Thumbnail Switcher */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-slate-900 group">
              <Image
                src={activePillar.image}
                alt={language === "ta" ? activePillar.titleTa : activePillar.titleEn}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent opacity-80" />

              {/* Ambient Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md text-white flex items-center justify-between border border-white/20 shadow-lg">
                <div>
                  <div className="text-xs font-bold text-amber-300">
                    {language === "ta" ? "தயாரிக்கப்பட்ட கற்றல் சூழல்" : "Prepared Learning Environment"}
                  </div>
                  <div className="text-[11px] text-white/80">
                    {language === "ta" ? "உண்மையான தொடு உணர்வு கருவிகள்" : "Authentic Tactile Apparatus"}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Direct Thumbnail Switcher */}
            <div className="flex items-center gap-2.5 pt-1">
              {pillars.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeTab === idx
                      ? "border-[#0750B8] scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={language === "ta" ? p.titleTa : p.titleEn}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
