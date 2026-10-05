"use client";
import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/schoolData";
import { Badge } from "../ui/Badge";

interface GalleryLightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

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

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
        {/* Main Image View */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#121D28]">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption Card */}
        <div className="mt-4 w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="yellow" size="sm">
                {currentItem.category}
              </Badge>
              <span className="text-xs text-white/60">
                {currentIndex + 1} of {items.length}
              </span>
            </div>
            <h4 className="font-display font-bold text-lg text-white">
              {currentItem.title}
            </h4>
            <p className="text-sm text-white/80 mt-0.5">{currentItem.caption}</p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={onPrev}
              className="sm:hidden p-2 rounded-xl bg-white/20 text-white text-xs font-semibold"
            >
              Previous
            </button>
            <button
              onClick={onNext}
              className="sm:hidden p-2 rounded-xl bg-[#0750B8] text-white text-xs font-semibold"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
