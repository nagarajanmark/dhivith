"use client";
import React from "react";
import {
  BookOpen,
  Calculator,
  Languages,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Award,
  Phone,
  MessageSquare,
  ArrowRight,
  HeartHandshake,
  Clock,
  Sunrise,
  Moon,
  Users,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { COMPREHENSIVE_SERVICES, SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

interface ComprehensiveServicesProps {
  onOpenTourModal: () => void;
}

export const ComprehensiveServices: React.FC<ComprehensiveServicesProps> = ({
  onOpenTourModal,
}) => {
  const { language } = useLanguage();
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-[#0750B8]" />;
      case "Calculator":
        return <Calculator className="w-6 h-6 text-[#F36B12]" />;
      case "Languages":
        return <Languages className="w-6 h-6 text-[#159447]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#F5B900]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#0750B8]" />;
    }
  };

  const handleWhatsApp = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hello Mrs. S Tharani / Dhivith Edu Care team! I would like to inquire about ${serviceTitle} for my child.`
    );
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#0750B8]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#159447]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Spotlight Banner */}
        <div className="bg-gradient-to-r from-[#0750B8] via-[#0962dc] to-[#159447] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-16 border-4 border-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/15 border-2 border-white/30 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 shadow-md">
              <GraduationCap className="w-10 h-10 text-amber-300" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-3 py-0.5 rounded-full bg-amber-400 text-[#121D28] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  Leadership
                </span>
                <span className="text-white/80 text-xs">Est. {SCHOOL_INFO.establishedDate}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {SCHOOL_INFO.founder}
              </h3>
              <p className="text-amber-200 font-semibold text-xs sm:text-sm tracking-wide">
                {SCHOOL_INFO.qualifications} • {SCHOOL_INFO.founderRole}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${SCHOOL_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white text-[#0750B8] hover:bg-gray-100 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#159447]" />
              <span>Call: {SCHOOL_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Hello%20Mrs.%20Tharani!%20I%20would%20like%20to%20know%20more%20about%20Dhivith%20Edu%20Care.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#159447] hover:bg-[#117a3a] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Section Heading */}
        <SectionHeading
          badgeText={language === "ta" ? "பள்ளிப் பாடங்கள் & உயர்கல்வி" : "Beyond Preschool"}
          badgeVariant="blue"
          title={
            language === "ta"
              ? "அனைத்துப் பாட டியூஷன் & பொறியியல் கணிதப் பயிற்சி"
              : "Our Comprehensive Academic Tuition Services"
          }
          subtitle={
            language === "ta"
              ? "காலை மற்றும் மாலை நேர சிறப்பு வகுப்புகள், அண்ணா பல்கலைக்கழக பொறியியல் கணிதம், மற்றும் அர்ப்பணிப்புமிக்க 8 ஆசிரியர்கள் வழிகாட்டலில் கிணத்துக்கடவில் சிறந்த கல்விப் பயிற்சி."
              : "Better Learning. Better Tomorrow. Brighter Future. Discover our morning and evening tuition batches, engineering mathematics coaching, and specialized student-centred programs with 8 dedicated evening staff members in Kinathukadavu, Coimbatore."
          }
          align="center"
          className="mb-10"
        />

        {/* Tuition Sessions & Faculty Strength Highlight Cards */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Morning Session Card */}
          <div className="bg-gradient-to-br from-[#EBF3FF] via-white to-blue-50/40 rounded-3xl p-6 border border-[#0750B8]/20 shadow-sm flex items-start gap-4 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#0750B8] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Sunrise className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0750B8] bg-white px-2.5 py-0.5 rounded-full border border-[#0750B8]/20 inline-block mb-1 shadow-xs">
                {language === "ta" ? "காலை நேர வகுப்பு" : "Morning Session"}
              </span>
              <h4 className="font-display font-extrabold text-xl text-[#0F172A]">
                5:00 AM – 7:00 AM
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {language === "ta"
                  ? "அதிகாலை அமைதியான சூழலில் பொதுத்தேர்வு (10th, 11th, 12th) மற்றும் கணித சிறப்பு தீவிரப் பயிற்சி."
                  : "Fresh-mind early morning focus batch for Board exam preparation, formula mastery, and intensive revision."}
              </p>
            </div>
          </div>

          {/* Evening Session Card */}
          <div className="bg-gradient-to-br from-[#FFF2E8] via-white to-orange-50/40 rounded-3xl p-6 border border-[#F36B12]/20 shadow-sm flex items-start gap-4 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#F36B12] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Moon className="w-6 h-6 text-yellow-200" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F36B12] bg-white px-2.5 py-0.5 rounded-full border border-[#F36B12]/20 inline-block mb-1 shadow-xs">
                {language === "ta" ? "மாலை நேர வகுப்பு" : "Evening Session"}
              </span>
              <h4 className="font-display font-extrabold text-xl text-[#0F172A]">
                5:00 PM – 9:30 PM
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {language === "ta"
                  ? "LKG முதல் 12ஆம் வகுப்பு வரை அனைத்து பாடங்கள் (CBSE, ICSE, State Board) & பொறியியல் கணித வகுப்புகள்."
                  : "Comprehensive subject coaching for LKG to Grade 12 (CBSE, ICSE, State Board) and Engineering Mathematics."}
              </p>
            </div>
          </div>

          {/* Evening Staff Strength Card */}
          <div className="bg-gradient-to-br from-[#EAF8EF] via-white to-emerald-50/40 rounded-3xl p-6 border border-[#159447]/20 shadow-sm flex items-start gap-4 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#159447] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Users className="w-6 h-6 text-emerald-100" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#159447] bg-white px-2.5 py-0.5 rounded-full border border-[#159447]/20 inline-block mb-1 shadow-xs">
                {language === "ta" ? "ஆசிரியர் பலம்" : "Evening Faculty"}
              </span>
              <h4 className="font-display font-extrabold text-xl text-[#0F172A]">
                {language === "ta" ? "8 ஆசிரியர்கள் & பணியாளர்கள்" : "8 Dedicated Staffs"}
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {language === "ta"
                  ? "மாலை நேர வகுப்புகளில் 8 ஆசிரியர்கள் செயல்பட்டு ஒவ்வொரு குழந்தைக்கும் தனிநபர் வழிகாட்டல் மற்றும் சந்தேகங்கள் தீர்க்கின்றனர்."
                  : "8 subject specialist teachers active every evening ensuring personalized attention, homework support, and top marks."}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Comprehensive Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {COMPREHENSIVE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0750B8]/10 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center shadow-inner">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span
                    className="px-3.5 py-1 rounded-full text-xs font-bold shadow-sm"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-[#F36B12] mb-1">
                  Target: {service.targetGrades}
                </div>

                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[#5E6D7A] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#121D28]">
                    What We Provide:
                  </div>
                  {service.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2A343D]">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: service.color }}
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0750B8] hover:text-[#F36B12] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#159447]" />
                  <span>Inquire for Admission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="px-4 py-2 rounded-xl bg-[#EBF3FF] text-[#0750B8] text-xs font-bold hover:bg-[#0750B8] hover:text-white transition-all"
                >
                  Call Helpline
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Success Begins Here Core Pillars Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0750B8]/10 shadow-lg text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E5] text-[#9A6700] text-xs font-bold uppercase tracking-wider mb-4 border border-[#F5B900]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Dhivith Edu Care Promise</span>
          </div>

          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121D28] mb-2">
            &ldquo;Success Begins Here!&rdquo;
          </h3>
          <p className="text-xs sm:text-sm text-[#5E6D7A] max-w-xl mx-auto mb-8">
            Every Child. Every Opportunity. Every Time.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
              <div className="font-bold text-sm text-[#0750B8]">Individual Attention</div>
              <div className="text-xs text-[#5E6D7A] mt-1">For Every Single Child</div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
              <div className="font-bold text-sm text-[#159447]">Stress-Free Learning</div>
              <div className="text-xs text-[#5E6D7A] mt-1">Joyful & Engaging Space</div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
              <div className="font-bold text-sm text-[#F36B12]">Student-Centred</div>
              <div className="text-xs text-[#5E6D7A] mt-1">Tailored to Child Pace</div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
              <div className="font-bold text-sm text-[#F5B900]">After-School Care</div>
              <div className="text-xs text-[#5E6D7A] mt-1">Support Till Evening</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
