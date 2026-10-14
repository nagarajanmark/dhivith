"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

interface InstagramPhoto {
  id: string;
  image: string;
  alt: string;
}

const INSTAGRAM_PHOTOS: InstagramPhoto[] = [
  {
    id: "insta-1",
    image: "/school_images/happy-montessori-children-uniform-steps-kinathukadavu.webp",
    alt: "Happy Montessori Preschool Children in Uniform on Campus Steps - Dhivith Edu Care Kinathukadavu",
  },
  {
    id: "insta-2",
    image: "/school_images/morning-assembly-activity-outdoor-turf-coimbatore.webp",
    alt: "Morning Assembly and Outdoor Turf Coordination - Dhivith Edu Care",
  },
  {
    id: "insta-3",
    image: "/school_images/joyful-circle-time-celebration-preschool-pollachi.webp",
    alt: "Joyful Festival Celebration and Circle Time Gathering - Dhivith Edu Care",
  },
  {
    id: "insta-4",
    image: "/school_images/cheerful-preschool-students-group-lawn-dhivith.webp",
    alt: "Cheerful Preschool Students Group Bonding on Green Play Turf - Dhivith Edu Care",
  },
  {
    id: "insta-5",
    image: "/school_images/paper-cup-pyramid-stacking-activity-kinathukadavu.webp",
    alt: "Paper Cup Pyramid Stacking Practical Life Activity - Dhivith Edu Care",
  },
  {
    id: "insta-6",
    image: "/school_images/sensory-ball-sorting-color-trays-coimbatore.webp",
    alt: "Sensory Ball Sorting and Tactile Color Classification - Dhivith Edu Care",
  },
  {
    id: "insta-7",
    image: "/school_images/safe-outdoor-turf-play-area-kinathukadavu.webp",
    alt: "Safe Outdoor Artificial Grass Play Turf - Dhivith Edu Care Kinathukadavu",
  },
  {
    id: "insta-8",
    image: "/school_images/wooden-alphabet-letter-matching-board-coimbatore.webp",
    alt: "Wooden Alphabet Letter Matching Apparatus - Dhivith Edu Care",
  },
  {
    id: "insta-9",
    image: "/school_images/3d-animal-picture-cube-puzzle-blocks-palladam.webp",
    alt: "3D Animal Picture Cube Puzzle Blocks - Dhivith Edu Care",
  },
  {
    id: "insta-10",
    image: "/school_images/kidspire-student-achievement-awards-dhivith.webp",
    alt: "Kidspire Student Achievement Awards - Dhivith Edu Care",
  },
];

export const InstagramShowcaseSection: React.FC = () => {
  const { language } = useLanguage();
  const isTa = language === "ta";

  const instagramUrl =
    SCHOOL_INFO.instagram ||
    "https://instagram.com/dhivith_edu_care?psln=MTRmNGRtd2EzMGlydg%3D%3D";

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...INSTAGRAM_PHOTOS, ...INSTAGRAM_PHOTOS];

  return (
    <section
      id="instagram-wall"
      aria-label="Instagram Showcase"
      className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#FFF8F8] to-white relative overflow-hidden border-t border-rose-100/60"
    >
      {/* Decorative Ambient Instagram Gradients */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#FD1D1D]/5 via-[#833AB4]/5 to-[#FCB045]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-gradient-to-br from-[#833AB4]/5 to-[#E1306C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10">
        {/* Header Grid: Brand info on left, Direct Follow Button on right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 border border-pink-200/80 shadow-xs mb-3">
              <svg
                className="w-3.5 h-3.5 text-[#E1306C] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent">
                {isTa ? "இன்ஸ்டாகிராம் நேரலை" : "Live On Instagram"}
              </span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#121D28] tracking-tight leading-tight">
              {isTa
                ? "பள்ளியின் அன்றாட மகிழ்ச்சியை இன்ஸ்டாகிராமில் காண்க"
                : "Catch Our Daily Moments on Instagram"}
            </h2>

            <p className="text-xs sm:text-sm text-[#5E6D7A] mt-2">
              {isTa
                ? "உண்மையான வகுப்பறை செய்முறைகள், விழாக்கள் மற்றும் விளையாட்டுத் தருணங்கள் @dhivith_edu_care பக்கத்தில்!"
                : "Real classroom activities, campus play, and milestone celebrations with @dhivith_edu_care."}
            </p>
          </div>

          {/* Profile Card Pill & Follow Button */}
          <div className="flex items-center gap-3 self-start md:self-auto flex-shrink-0">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-2xl bg-white border border-pink-200/90 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FCB045] via-[#FD1D1D] to-[#833AB4]">
                <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden relative">
                  <Image
                    src="/logo.png"
                    alt="Dhivith Edu Care"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#121D28] flex items-center gap-1">
                  <span>@dhivith_edu_care</span>
                  <CheckCircle2 className="w-3 h-3 text-sky-500 fill-sky-100" />
                </div>
                <div className="text-[10px] text-gray-500 font-medium">Kinathukadavu</div>
              </div>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>{isTa ? "பின்தொடர்க" : "Follow"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* PURE IMAGE CONTINUOUS MARQUEE (NO LIKES, NO DESCRIPTIONS) */}
      <div className="pause-on-hover overflow-hidden select-none">
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 py-2">
            {marqueeItems.map((item, index) => (
              <a
                key={`insta-marquee-${item.id}-${index}`}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[4/5] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] group bg-slate-900 flex-shrink-0 border-2 border-white/80"
                title="View on Instagram @dhivith_edu_care"
              >
                {/* Full-bleed crisp Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                />

                {/* Always-Visible Subtle Top Corner Instagram Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center shadow-sm z-10 transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-4 h-4 fill-current text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>

                {/* Dark Glass Hover Overlay (Clean, No text clutter) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 p-4 text-white">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold tracking-wide">
                    {isTa ? "இன்ஸ்டாகிராமில் பார்" : "View on Instagram"}
                  </span>
                  <span className="text-[11px] text-pink-200 font-medium">
                    @dhivith_edu_care
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
