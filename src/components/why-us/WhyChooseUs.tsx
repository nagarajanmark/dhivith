"use client";
import React from "react";
import {
  ShieldCheck,
  Award,
  Heart,
  Users,
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  Compass,
  Smile,
  BookOpen,
  Leaf,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-[#0750B8]" />,
      title: language === "ta" ? "1:6 ஆசிரியர்-மாணவர் விகிதம்" : "Intimate 1:6 Educator Ratio",
      description:
        language === "ta"
          ? "ஒவ்வொரு குழந்தைக்கும் சான்றளிக்கப்பட்ட மாண்டிசோரி ஆசிரியர்களால் தனிநபர் கவனிப்பு மற்றும் கற்றல் திட்டங்கள்."
          : "Every child receives deep observational attention from certified Montessori educators who tailor individualized lesson plans.",
      color: "#0750B8",
      bgLight: "bg-[#EBF3FF]",
    },
    {
      icon: <Award className="w-6 h-6 text-[#159447]" />,
      title: language === "ta" ? "உண்மையான மாண்டிசோரி கருவிகள்" : "Authentic Montessori Materials",
      description:
        language === "ta"
          ? "பிளாஸ்டிக் பொம்மைகளுக்குப் பதிலாக, AMI தரநிலையான தொடு உணர்வு மரக் கருவிகள், மணிகள் கணிதம் மற்றும் மொழிப் பயிற்சிகள்."
          : "No imitation plastic toys. We provide complete AMI-standard sensorial apparatus, golden bead math, and tactile language materials.",
      color: "#159447",
      bgLight: "bg-[#EAF8EF]",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F36B12]" />,
      title: language === "ta" ? "முழுமையான பாதுகாப்பு & தூய்மை" : "Biometric Safety & Pure Living",
      description:
        language === "ta"
          ? "குழந்தைகளுக்கு ஏற்ற பாதுகாப்பான கட்டிட வடிவமைப்பு, 24/7 CCTV கண்காணிப்பு மற்றும் முதலுதவி பயிற்சி பெற்ற பணியாளர்கள்."
          : "Child-proofed architectural design, 24/7 CCTV in common areas, HEPA air purification, and staff trained in pediatric first aid.",
      color: "#F36B12",
      bgLight: "bg-[#FFF2E8]",
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#159447]" />,
      title: language === "ta" ? "இயற்கை சார்ந்த கற்றல் சூழல்" : "Nature-Connected Campus",
      description:
        language === "ta"
          ? "தினசரி வெளிப்புறத் தோட்டம், மூலிகைச் செடிகள் பராமரிப்பு மற்றும் செடி வளர்ப்பு போன்ற செய்முறைப் பயிற்சிகள்."
          : "Daily outdoor garden time, sensory herb beds, open terrace exploration, and real plant care embedded into the curriculum.",
      color: "#159447",
      bgLight: "bg-[#EAF8EF]",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#F5B900]" />,
      title: language === "ta" ? "3 மணி நேர ஆழ்ந்த கவன சுழற்சி" : "3-Hour Deep Work Cycles",
      description:
        language === "ta"
          ? "மணி ஒலிகளோ தேவையற்ற குறுக்கீடுகளோ இன்றி குழந்தைகள் சுயமாக ஆழ்ந்து கற்கும் திறன் வளர்கிறது."
          : "Children build remarkable attention spans, uninterrupted by ringing bells or fragmented adult transitions.",
      color: "#F5B900",
      bgLight: "bg-[#FFF9E5]",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#0750B8]" />,
      title: language === "ta" ? "பெற்றோருடன் தொடர் உரையாடல்" : "Parent Partnership & Transparency",
      description:
        language === "ta"
          ? "குழந்தையின் வளர்ச்சி குறித்த தொடர் பகிர்வு, ஆசிரியர்களுடன் நேரடி கலந்துரையாடல் மற்றும் வழிகாட்டல்."
          : "Regular developmental observations, private parent-educator dialogue, and intimate parenting workshops.",
      color: "#0750B8",
      bgLight: "bg-[#EBF3FF]",
    },
  ];

  const comparisonData = [
    {
      feature: language === "ta" ? "வகுப்பறை இயக்கம்" : "Classroom Dynamic",
      montessori: language === "ta" ? "குழந்தையே சுயமாக தேர்வு செய்து கற்கும் மாண்டிசோரி முறை" : "Child-directed work with specialized tactile materials at individual pace",
      traditional: language === "ta" ? "ஆசிரியர் வழிநடத்தும் ஒரே மாதிரியான வகுப்பறை" : "Teacher-led lecture to entire class simultaneously on fixed schedule",
    },
    {
      feature: language === "ta" ? "ஒழுக்கம் & ஊக்கம்" : "Motivation & Discipline",
      montessori: language === "ta" ? "சுய கட்டுப்பாடு, பொறுப்பு மற்றும் அக மகிழ்ச்சி" : "Intrinsic joy of mastery, self-regulation, and natural problem-solving",
      traditional: language === "ta" ? "வெளியார்ந்த பரிசு அல்லது தண்டனை முறை" : "External rewards, gold stars, comparison, and punishment",
    },
    {
      feature: language === "ta" ? "வயதுப் பிரிவு" : "Age Grouping",
      montessori: language === "ta" ? "பல வயதுக் குழந்தைகள் இணைந்து கற்கும் முறை" : "Multi-age communities (1.5-3, 3-6 yrs) fostering peer mentorship",
      traditional: language === "ta" ? "ஒரே வயதுடைய குழந்தைகள் மட்டுமே உள்ள வகுப்பு" : "Strict single-age cohorts with uniform developmental expectations",
    },
    {
      feature: language === "ta" ? "கணிதம் & மொழிப் புரிதல்" : "Math & Language Grasp",
      montessori: language === "ta" ? "மணிகள், மணற்காகித எழுத்துக்களைத் தொட்டுணர்ந்து கற்றல்" : "Concrete 3D golden beads & sandpaper tracing before abstract paper symbols",
      traditional: language === "ta" ? "மனப்பாடம் செய்யும் முறை" : "Abstract memorization from flashcards and repetitive worksheets",
    },
    {
      feature: language === "ta" ? "சூழல் & பொருட்கள்" : "Environment & Materials",
      montessori: language === "ta" ? "மரப் பொருட்கள்; பூஜ்ஜிய திரை நேரம் (No screen time)" : "Child-height natural Scandinavian wood shelves; zero screen time",
      traditional: language === "ta" ? "பிளாஸ்டிக் பொம்மைகள் மற்றும் டிவி திரைகள்" : "High plastic furniture, plastic battery toys, and video screens",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText={language === "ta" ? "திவித்தின் தனிச்சிறப்புகள்" : "The Dhivith Distinction"}
          badgeVariant="blue"
          title={language === "ta" ? "பெற்றோர்கள் திவித் எடு கேரை ஏன் தேர்ந்தெடுக்கிறார்கள்?" : "Why Parents Choose Dhivith Edu Care"}
          subtitle={language === "ta" ? "அறிவியல் பூர்வமான மாண்டிசோரி முறையையும், அன்பான பாதுகாப்பான பராமரிப்பையும் நாங்கள் இணைத்து வழங்குகிறோம்." : "We combine the proven brilliance of Montessori pedagogical science with a safe, luxurious, and deeply nurturing early childhood community."}
          align="center"
          className="mb-16"
        />

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0750B8]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgLight} flex items-center justify-center mb-5 shadow-inner`}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-[#121D28] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#159447]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{language === "ta" ? "திவித்தின் தரம்" : "Standard at Dhivith"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0750B8]/10 shadow-xl overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121D28]">
              {language === "ta" ? "திவித் மாண்டிசோரி vs வழக்கமான மழலையர் பள்ளி" : "Dhivith Montessori vs. Conventional Daycare"}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6D7A] mt-2">
              {language === "ta" ? "சுயசார்பும் சிந்தனைத் திறனும் கொண்ட குழந்தைகளை உருவாக்கும் முக்கிய வேறுபாடுகள்." : "See the fundamental distinction that creates joyful, self-reliant thinkers."}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 px-4 font-display font-bold text-sm text-[#121D28] w-1/4">
                    {language === "ta" ? "கற்றல் அம்சங்கள்" : "Pedagogical Dimension"}
                  </th>
                  <th className="py-4 px-4 font-display font-bold text-sm text-[#0750B8] bg-[#EBF3FF] rounded-t-2xl w-2/5">
                    {language === "ta" ? "திவித் எடு கேர் (மாண்டிசோரி)" : "DHIVITH EDU CARE (Montessori)"}
                  </th>
                  <th className="py-4 px-4 font-display font-bold text-sm text-gray-500 w-1/3">
                    {language === "ta" ? "வழக்கமான நர்சரி / டே கேர்" : "Traditional Daycare / Nursery"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#121D28]">{row.feature}</td>
                    <td className="py-4 px-4 bg-[#EBF3FF]/40 text-[#121D28] font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#159447] flex-shrink-0 mt-0.5" />
                        <span>{row.montessori}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#5E6D7A]">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
