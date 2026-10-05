"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { GallerySection } from "@/components/gallery/GallerySection";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import ThreeDParallaxUnfurlingGallery from "@/components/ui/3d-parallax-unfurling-gallery";
import { Sparkles, Grid, Eye, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [is3DMode, setIs3DMode] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Page Header */}
      <PageHeader
        breadcrumb={t.gallery.breadcrumb}
        badge={t.gallery.badge}
        title={t.gallery.title}
        highlightedWord={t.gallery.highlight}
        description={t.gallery.desc}
      />

      {/* Mode Switcher Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center justify-center gap-3">
        <button
          onClick={() => setIs3DMode(false)}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
            !is3DMode
              ? "bg-[#0750B8] text-white border-[#0750B8] shadow-md scale-105"
              : "bg-white text-[#2A343D] border-gray-200 hover:bg-gray-50"
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span>{t.gallery.btnMasonry}</span>
        </button>

        <button
          onClick={() => setIs3DMode(true)}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
            is3DMode
              ? "bg-[#159447] text-white border-[#159447] shadow-md scale-105"
              : "bg-white text-[#2A343D] border-gray-200 hover:bg-gray-50"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{t.gallery.btn3D}</span>
        </button>
      </div>

      {/* Main View Mode */}
      {is3DMode ? (
        <div className="relative pt-4 pb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#159447] bg-[#EAF8EF] px-3.5 py-1 rounded-full border border-[#159447]/20">
              {t.gallery.tag3D}
            </span>
            <button
              onClick={() => setIs3DMode(false)}
              className="px-4 py-1.5 rounded-full bg-white hover:bg-gray-100 text-xs font-bold text-[#121D28] flex items-center gap-1.5 border border-gray-200 shadow-xs cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t.gallery.exit3D}</span>
            </button>
          </div>
          <div className="w-full relative">
            <ThreeDParallaxUnfurlingGallery theme="light" />
          </div>
        </div>
      ) : (
        /* Filterable Masonry Gallery with Lightbox */
        <GallerySection />
      )}

      {/* School Visit CTA */}
      <SchoolVisitCTA onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Footer */}
      <Footer onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </main>
  );
}
