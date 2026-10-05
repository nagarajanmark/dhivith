"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { GALLERY_ITEMS, GalleryItem } from "@/data/schoolData";
import { GalleryLightboxModal } from "../modals/GalleryLightboxModal";

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Classroom", "Sensorial", "Outdoor", "Practical Life", "Creative"];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    if (index !== -1) setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText="Visual Portfolio"
          badgeVariant="green"
          title="Moments of Wonder & Discovery"
          subtitle="Glimpse into our daily classroom life—where learning is an active, tactile adventure of joyful independence."
          align="center"
          className="mb-12"
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-[#0750B8] text-white shadow-md scale-105"
                    : "bg-gray-100 text-[#2A343D] hover:bg-[#EBF3FF] hover:text-[#0750B8] border border-gray-200/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry / Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#121D28] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121D28]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-white/90 text-[#0750B8] shadow-sm backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Hover Lightbox Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-display font-bold text-lg group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
          onSelectIndex={(idx) => setLightboxIndex(idx)}
        />
      )}
    </section>
  );
};
