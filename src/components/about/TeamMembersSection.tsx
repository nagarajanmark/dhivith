"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  Heart,
  ShieldCheck,
  Calendar,
  Sparkles,
  CheckCircle2,
  Users,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { STAFF_MEMBERS, StaffMember, SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

interface TeamMembersSectionProps {
  onOpenTourModal: () => void;
}

// Dhivith Edu Care brand theme palette for each faculty member
const DHIVITH_BRAND_PALETTES = [
  {
    // Mrs. S. Tharani - Brand Royal Blue
    cardBg: "#0750B8",
    accentYellow: "#F5B900",
    badgeBg: "rgba(255, 255, 255, 0.25)",
    roleIcon: Award,
    roleColor: "#FDE047",
    specialtyEn: "Montessori & Collegiate Maths",
    specialtyTa: "மாண்டிசோரி & உயர் கணிதம்",
  },
  {
    // Mrs. D. Ramyadevi - Brand Nature Green
    cardBg: "#159447",
    accentYellow: "#F5B900",
    badgeBg: "rgba(255, 255, 255, 0.25)",
    roleIcon: GraduationCap,
    roleColor: "#BFDBFE",
    specialtyEn: "Phonics & Sensorial Arithmetic",
    specialtyTa: "ஃபோனிக்ஸ் & எண்கணிதம்",
  },
  {
    // Mrs. K. Vinothini - Brand Warm Orange
    cardBg: "#F36B12",
    accentYellow: "#F5B900",
    badgeBg: "rgba(255, 255, 255, 0.25)",
    roleIcon: Sparkles,
    roleColor: "#FEF08A",
    specialtyEn: "Play Pedagogy & Storytelling",
    specialtyTa: "விளையாட்டு வழி & கதை கலை",
  },
  {
    // Mrs. K. Eswari - Brand Amber / Honey Gold
    cardBg: "#D97706",
    accentYellow: "#F5B900",
    badgeBg: "rgba(255, 255, 255, 0.25)",
    roleIcon: Heart,
    roleColor: "#FECDD3",
    specialtyEn: "Infant Care & Nutrition Wellness",
    specialtyTa: "மழலையர் நலம் & பராமரிப்பு",
  },
  {
    // Mr. S. Rajamanickam - Brand Deep Charcoal / Navy
    cardBg: "#1E293B",
    accentYellow: "#F5B900",
    badgeBg: "rgba(255, 255, 255, 0.25)",
    roleIcon: ShieldCheck,
    roleColor: "#A7F3D0",
    specialtyEn: "Child Safety & Campus Security",
    specialtyTa: "வளாக தூய்மை & பாதுகாப்பு",
  },
];

export const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({
  onOpenTourModal,
}) => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "teachers" | "care">("all");

  const filteredMembers = STAFF_MEMBERS.filter((member) => {
    if (activeFilter === "teachers") {
      return member.category === "Leadership" || member.category === "Teaching";
    }
    if (activeFilter === "care") {
      return member.category === "Care";
    }
    return true;
  });

  return (
    <section
      id="teachers"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden scroll-mt-24 select-none"
    >
      {/* Dhivith Brand Ambient Glow Accents */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#0750B8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#159447]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================================== */}
        {/* DHIVITH BRAND HEADER                                           */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          {/* Brand Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#0750B8]/15 text-[#0750B8] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#F36B12]" />
            <span>
              {language === "ta" ? "எங்கள் கற்பித்தல் குழு" : t.team.tag}
            </span>
          </div>

          {/* Heading in Dhivith Brand Typography */}
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight leading-tight">
            {language === "ta" ? (
              <>
                அன்பான வழிகாட்டல் &{" "}
                <span className="text-[#0750B8]">சான்றிதழ் பெற்ற ஆசிரியர்கள்</span>
              </>
            ) : (
              <>
                Meet Our Dedicated{" "}
                <span className="text-[#0750B8]">Teachers & Mentors</span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-3 leading-relaxed max-w-2xl mx-auto font-normal">
            {language === "ta"
              ? "PGMTTC மாண்டிசோரி சிறப்புச் சான்றிதழ் பெற்ற கல்வி இயக்குநர், தகுதிவாய்ந்த மழலையர் பள்ளி ஆசிரியைகள் மற்றும் தாய் போன்ற அரவணைப்பு தரும் பராமரிப்புப் பணியாளர்கள்."
              : t.team.description}
          </p>

          {/* Filter Pills in Dhivith Theme */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#0750B8] text-white shadow-md scale-102"
                  : "bg-white text-gray-600 hover:text-[#0750B8] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {language === "ta" ? "அனைத்து பணியாளர்கள்" : t.team.filterAll} ({STAFF_MEMBERS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("teachers")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === "teachers"
                  ? "bg-[#159447] text-white shadow-md scale-102"
                  : "bg-white text-gray-600 hover:text-[#159447] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {language === "ta" ? "ஆசிரியர்கள் & தலைமை" : t.team.filterTeachers} (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("care")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === "care"
                  ? "bg-[#F36B12] text-white shadow-md scale-102"
                  : "bg-white text-gray-600 hover:text-[#F36B12] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {language === "ta" ? "பராமரிப்பு பணியாளர்கள்" : t.team.filterCare} (2)
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FACULTY CARDS IN DHIVITH BRAND PALETTE WITH SLANTED BANNER     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-6 max-w-7xl mx-auto">
          {filteredMembers.map((member) => {
            const originalIndex = STAFF_MEMBERS.findIndex((m) => m.id === member.id);
            const palette = DHIVITH_BRAND_PALETTES[originalIndex % DHIVITH_BRAND_PALETTES.length];
            const Icon = palette.roleIcon;

            return (
              <div
                key={member.id}
                itemScope
                itemType="https://schema.org/Person"
                className="group relative rounded-[28px] overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl shadow-lg flex flex-col cursor-pointer border border-white/25"
                style={{
                  backgroundColor: palette.cardBg,
                }}
              >
                {/* Visual Portrait Area */}
                <div className="relative w-full aspect-[4/4.9] overflow-hidden bg-transparent">
                  <Image
                    src={member.image}
                    alt={`${member.name} (${member.qualification}) - ${member.role}`}
                    fill
                    priority={originalIndex < 3}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    itemProp="image"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md border border-white/30 shadow-xs"
                      style={{ backgroundColor: palette.badgeBg }}
                    >
                      {language === "ta" ? member.categoryTa : member.categoryEn}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xs">
                      <Icon className="w-3.5 h-3.5" style={{ color: palette.roleColor }} />
                    </div>
                  </div>
                </div>

                {/* Signature Slanted Yellow Banner at bottom */}
                <div
                  className="relative z-10 bg-[#F5B900] text-left px-4 pt-7 pb-4.5 -mt-6 transition-all duration-300 shadow-xs"
                  style={{
                    clipPath: "polygon(0 16px, 100% 40px, 100% 100%, 0 100%)",
                  }}
                >
                  <h4
                    itemProp="name"
                    className="font-display font-black text-[15px] sm:text-base text-[#121D28] tracking-tight leading-snug line-clamp-1"
                  >
                    {language === "ta" ? member.nameTa : member.name}
                  </h4>
                  <p
                    itemProp="jobTitle"
                    className="text-[11.5px] font-bold text-[#2A343D] mt-0.5 line-clamp-1"
                  >
                    {language === "ta" ? palette.specialtyTa : palette.specialtyEn}
                  </p>
                  <p className="text-[10px] font-extrabold text-[#0750B8] mt-0.5 line-clamp-1">
                    {member.qualification}
                  </p>
                </div>

                {/* Hover Quick Action Buttons */}
                <div className="absolute inset-x-0 bottom-0 p-3 pt-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-1.5 z-20">
                  <a
                    href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello Dhivith Edu Care! I would like to inquire regarding ${member.name} (${member.role}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-1.5 px-2 rounded-lg bg-white text-[#121D28] hover:bg-amber-300 font-bold text-[11px] flex items-center justify-center gap-1 shadow-xs transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenTourModal();
                    }}
                    className="py-1.5 px-2.5 rounded-lg bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-[11px] flex items-center justify-center gap-1 shadow-xs transition-all cursor-pointer"
                  >
                    <Calendar className="w-3 h-3 text-amber-300" />
                    <span>Walkthrough</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* BOTTOM REASSURANCE & ENROLLMENT CTA BANNER                     */}
        {/* ============================================================== */}
        <div className="mt-14 sm:mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#0F172A]">
                {language === "ta"
                  ? "1:6 ஆசிரியர் - குழந்தை விகிதம் & அன்பான பாதுகாப்பு"
                  : "1:6 Personal Educator Ratio & Certified Montessori Pedagogy"}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                {language === "ta"
                  ? "ஒவ்வொரு குழந்தைக்கும் முழுமையான தனிநபர் கவனிப்பு மற்றும் பாதுகாப்பான கற்றல் சூழல் உறுதி செய்யப்படுகிறது."
                  : "Every child receives focused guidance, zero-shouting positive encouragement, and attentive care throughout the day."}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenTourModal}
              className="w-full sm:w-auto whitespace-nowrap px-6 py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>
                {language === "ta"
                  ? "நேரடி வகுப்பறை பார்வை"
                  : "Book Classroom Walkthrough"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
