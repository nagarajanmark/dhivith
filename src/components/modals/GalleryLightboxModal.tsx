"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Calendar,
} from "lucide-react";
import { GalleryItem } from "@/data/schoolData";

interface GalleryLightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
  onOpenTourModal?: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
  onOpenTourModal,
}) => {
  const currentItem = items[currentIndex];
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  // Mouse drag-to-scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Scroll active thumbnail into view smoothly
  useEffect(() => {
    if (thumbnailStripRef.current && !isDragging) {
      const activeEl = thumbnailStripRef.current.children[currentIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex, isDragging]);

  // Mouse wheel horizontal scroll handler
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (thumbnailStripRef.current) {
      e.stopPropagation();
      thumbnailStripRef.current.scrollLeft += e.deltaY * 1.2 || e.deltaX;
    }
  };

  // Mouse drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!thumbnailStripRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - thumbnailStripRef.current.offsetLeft);
    setScrollLeft(thumbnailStripRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !thumbnailStripRef.current) return;
    e.preventDefault();
    const x = e.pageX - thumbnailStripRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      setHasMoved(true);
    }
    thumbnailStripRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  if (!isOpen || !currentItem) return null;

  const totalCount = items.length;
  const currentNumberStr = String(currentIndex + 1).padStart(2, "0");
  const totalNumberStr = String(totalCount).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Showcase Lightbox"
      className="fixed inset-0 z-[150] flex flex-col justify-between p-2 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-2xl animate-fadeIn overflow-hidden select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 1. TOP HEADER BAR */}
      <div className="w-full max-w-6xl mx-auto rounded-2xl bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-200 shadow-2xl flex items-center justify-between gap-3 text-[#121D28] flex-shrink-0 z-20">
        {/* Left: Index Counter & Category */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#0750B8] to-[#0962dc] text-white text-xs font-black tracking-wider shadow-xs">
            {currentNumberStr} / {totalNumberStr}
          </span>
          <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#121D28] line-clamp-1">
            {currentItem.category || "CAMPUS SHOWCASE"}
          </span>
        </div>

        {/* Right: Full Gallery Link & Brand Blue Close Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link
            href="/gallery"
            onClick={onClose}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#0750B8] transition-colors"
          >
            <span>EXPLORE FULL PORTFOLIO</span>
            <ArrowUpRight className="w-4 h-4 text-[#0750B8]" />
          </Link>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
            <span>CLOSE</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-mono tracking-wider font-semibold">
              ESC
            </span>
          </button>
        </div>
      </div>

      {/* 2. MAIN IMAGE DISPLAY WITH FLOATING NAVIGATION BUTTONS */}
      <div className="relative w-full max-w-6xl mx-auto flex-1 my-2 sm:my-3 flex items-center justify-center min-h-0 z-10">
        {/* Left Arrow Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-gray-900 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer border border-gray-100"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-[#121D28]" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-gray-900 shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer border border-gray-100"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#121D28]" />
        </button>

        {/* Main Photo Frame */}
        <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black/50 flex items-center justify-center">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* 3. BOTTOM INFO CARD & THUMBNAIL STRIP */}
      <div className="w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl bg-white text-gray-900 p-4 sm:p-5 md:p-6 shadow-2xl border border-gray-200/80 flex flex-col gap-3 sm:gap-4 flex-shrink-0 z-20">
        {/* Title, Details & Action Button Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <h3 className="font-display font-black text-lg sm:text-xl md:text-2xl text-[#121D28] tracking-tight uppercase">
              {currentItem.title}
            </h3>

            {/* Badges / Meta */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#EBF3FF] text-[#0750B8] uppercase">
                {currentItem.category}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-gray-600 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Kinathukadavu, Coimbatore
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] sm:text-xs text-emerald-700 bg-[#EAF8EF] px-2.5 py-0.5 rounded-full font-semibold border border-[#159447]/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Small Batch (1:6 Ratio)
              </span>
            </div>
          </div>

          {/* Request / Book Visit CTA */}
          <button
            onClick={() => {
              onClose();
              if (onOpenTourModal) onOpenTourModal();
            }}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#0750B8] to-[#159447] hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
          >
            <Calendar className="w-4 h-4 text-amber-200" />
            <span>BOOK A VISIT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail Strip with Hand Scroll / Drag & ZERO visible scrollbar */}
        <div
          ref={thumbnailStripRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className={`flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-0.5 pt-0.5 no-scrollbar touch-pan-x select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {items.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={item.id || idx}
                onClick={(e) => {
                  if (hasMoved) {
                    e.preventDefault();
                    return;
                  }
                  onSelectIndex(idx);
                }}
                className={`relative flex-shrink-0 w-14 h-10 sm:w-20 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "ring-2 sm:ring-4 ring-[#0750B8] scale-105 shadow-md opacity-100 border-2 border-white"
                    : "opacity-60 hover:opacity-100 hover:scale-102"
                }`}
                aria-label={`View photo ${idx + 1}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="80px"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
