"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Maximize2 } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/schoolData";
import { GalleryLightboxModal } from "../modals/GalleryLightboxModal";

interface ContinuousMarqueeGalleryProps {
  onOpenTourModal?: () => void;
}

export const ContinuousMarqueeGallery: React.FC<ContinuousMarqueeGalleryProps> = ({
  onOpenTourModal,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Split gallery items into two distinct sets for row 1 and row 2
  const midIndex = Math.ceil(GALLERY_ITEMS.length / 2);
  const row1Items = GALLERY_ITEMS.slice(0, midIndex);
  const row2Items = GALLERY_ITEMS.slice(midIndex);

  // Duplicate each row to ensure seamless infinite looping
  const infiniteRow1 = [...row1Items, ...row1Items];
  const infiniteRow2 = [...row2Items, ...row2Items];

  const handleOpenPhoto = (item: GalleryItem) => {
    const foundIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    if (foundIndex !== -1) {
      setLightboxIndex(foundIndex);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (prev) => ((prev ?? 0) - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section id="marquee-gallery" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">

        {/* Header Grid: Large Title & Description on Left, Explore Full Gallery Button on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF3FF] text-[#0750B8] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#159447]" />
              <span>Campus Visual Showcase</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight mb-3">
              Moments of Joy & Learning
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              Continuous marquee showcase of our vibrant Montessori classrooms, hands-on learning, outdoor play, and student life in Kinathukadavu, Coimbatore.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto flex-shrink-0">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-2xl bg-[#0750B8] hover:bg-[#063f91] text-white font-extrabold text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>EXPLORE FULL GALLERY</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </Link>

            <div className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center text-[#159447] bg-[#EAF8EF] shadow-xs hidden sm:flex">
              <span className="w-2.5 h-2.5 rounded-full bg-[#159447] animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS MARQUEE TRACKS (2 ROWS) */}
      <div className="space-y-4 sm:space-y-6 pause-on-hover overflow-hidden select-none">
        {/* ROW 1: Moves Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 py-1">
            {infiniteRow1.map((item, index) => (
              <div
                key={`row1-${item.id}-${index}`}
                onClick={() => handleOpenPhoto(item)}
                className="relative w-[280px] sm:w-[360px] md:w-[420px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] group bg-slate-900 flex-shrink-0 border border-gray-200/80"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Hover Click / Zoom Icon */}
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md group-hover:scale-110 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black bg-white/95 text-[#0750B8] shadow-sm backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Caption on Hover */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="font-display font-bold text-sm sm:text-base drop-shadow-sm leading-snug line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right flex gap-4 sm:gap-6 py-1">
            {infiniteRow2.map((item, index) => (
              <div
                key={`row2-${item.id}-${index}`}
                onClick={() => handleOpenPhoto(item)}
                className="relative w-[280px] sm:w-[360px] md:w-[420px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] group bg-slate-900 flex-shrink-0 border border-gray-200/80"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Hover Click / Zoom Icon */}
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md group-hover:scale-110 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black bg-white/95 text-[#0750B8] shadow-sm backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Caption on Hover */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="font-display font-bold text-sm sm:text-base drop-shadow-sm leading-snug line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX SHOWCASE MODAL MATCHING SCREENSHOT 2 */}
      {lightboxIndex !== null && (
        <GalleryLightboxModal
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          onSelectIndex={(idx) => setLightboxIndex(idx)}
          onOpenTourModal={onOpenTourModal}
        />
      )}
    </section>
  );
};
