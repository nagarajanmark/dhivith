"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface TeamMembersSectionProps {
  onOpenTourModal: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  positionEn: string;
  positionTa: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "founder",
    name: "Mrs. S Tharani",
    positionEn: "Founder & Director",
    positionTa: "நிறுவனர் & இயக்குநர் (M.Sc., PGDM, PGMTTC)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "montessori-lead",
    name: "Mrs. K Soundarya",
    positionEn: "Montessori Lead Directress",
    positionTa: "மாண்டிசோரி முதன்மை ஆசிரியர்",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "stem-coach",
    name: "Mrs. M Kaviya",
    positionEn: "Academic Coaching Specialist",
    positionTa: "அனைத்துப் பாட டியூஷன் பயிற்றுநர்",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "daycare-lead",
    name: "Mrs. R Priyadharshini",
    positionEn: "Day Care & Wellness Lead",
    positionTa: "டே கேர் & மழலையர் பராமரிப்பு பொறுப்பாளர்",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "early-learning",
    name: "Mrs. V Ananya",
    positionEn: "Primary Montessori Directress",
    positionTa: "தொடக்க மாண்டிசோரி ஆசிரியை",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "maths-mentor",
    name: "Mrs. S Divyabharathi",
    positionEn: "Mathematics & Science Faculty",
    positionTa: "கணிதம் & அறிவியல் சிறப்பு ஆசிரியர்",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "phonics-lead",
    name: "Mrs. P Nithyashree",
    positionEn: "Phonics & Language Mentor",
    positionTa: "ஃபோனிக்ஸ் ஒலிப்பியல் வழிகாட்டி",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "wellness-lead",
    name: "Mrs. B Keerthana",
    positionEn: "Nursery & Child Development Lead",
    positionTa: "மழலையர் குழந்தை மேம்பாட்டு ஆசிரியர்",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
];

export const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({ onOpenTourModal }) => {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & Subtitle on Left, CTA Button on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">
              {t.team.tag}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#111111] tracking-tight">
              {t.team.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-3 sm:mt-4 max-w-xl leading-relaxed">
              {t.team.description}
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenTourModal}
              className="px-8 py-3.5 bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              {t.team.joinBtn}
            </button>
          </div>
        </div>

        {/* 4-Column Full-Bleed Portrait Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative aspect-[3/4] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Full Bleed Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
              />

              {/* Bottom Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

              {/* Centered Name and Position at the bottom of the card */}
              <div className="absolute bottom-6 left-4 right-4 text-center text-white z-10">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 font-normal mt-1 leading-tight">
                  {language === "ta" ? member.positionTa : member.positionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
