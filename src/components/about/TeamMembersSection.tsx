"use client";

import React from "react";
import Image from "next/image";

interface TeamMembersSectionProps {
  onOpenTourModal: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "founder",
    name: "Mrs. S Tharani",
    position: "Founder & Director",
    image: "/school_images/1000591348.webp",
  },
  {
    id: "montessori-lead",
    name: "Mrs. K Soundarya",
    position: "Montessori Lead Directress",
    image: "/school_images/1000591345.webp",
  },
  {
    id: "stem-coach",
    name: "Mrs. M Kaviya",
    position: "Academic Coaching Specialist",
    image: "/school_images/1000227830.webp",
  },
  {
    id: "daycare-lead",
    name: "Mrs. R Priyadharshini",
    position: "Day Care & Wellness Lead",
    image: "/school_images/1000591351.webp",
  },
  {
    id: "early-learning",
    name: "Mrs. V Ananya",
    position: "Primary Montessori Directress",
    image: "/school_images/1000223388.webp",
  },
  {
    id: "maths-mentor",
    name: "Mrs. S Divyabharathi",
    position: "Mathematics & Science Faculty",
    image: "/school_images/1000227839.webp",
  },
  {
    id: "phonics-lead",
    name: "Mrs. P Nithyashree",
    position: "Phonics & Language Mentor",
    image: "/school_images/1000245525.webp",
  },
  {
    id: "wellness-lead",
    name: "Mrs. B Keerthana",
    position: "Nursery & Child Development Lead",
    image: "/school_images/1000264797.webp",
  },
];

export const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({ onOpenTourModal }) => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & Subtitle on Left, CTA Button on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">
              OUR TEAM
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight">
              Our Professionals
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-xl leading-relaxed">
              Dedicated educators and certified Montessori directresses nurturing every child with individualized guidance and academic excellence.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenTourModal}
              className="px-8 py-3.5 bg-[#111111] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              JOIN TEAM
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
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
