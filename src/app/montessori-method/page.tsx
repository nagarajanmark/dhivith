"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { MontessoriPillars } from "@/components/pillars/MontessoriPillars";
import { MontessoriJourney } from "@/components/journey/MontessoriJourney";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { Sparkles, CheckCircle2, BookOpen, Calculator, Heart, Eye } from "lucide-react";

export default function MontessoriMethodPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Page Header */}
      <PageHeader
        breadcrumb="Montessori Method"
        badge="Pedagogical Science"
        title="The Proven Montessori Learning Method"
        highlightedWord="Montessori Learning Method"
        description="Discover how Dr. Maria Montessori's scientifically prepared environments cultivate deep concentration, concrete numerical logic, and joyous independent thinkers."
      />

      {/* 6 Montessori Pillars Component */}
      <MontessoriPillars onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Concrete to Abstract Deep Dive Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50/70 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/80 shadow-sm">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0750B8] bg-white px-3.5 py-1 rounded-full shadow-sm">
                Pedagogical Breakthrough
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121D28] mt-3">
                From Concrete Hands-on Senses to Abstract Intellect
              </h2>
              <p className="text-sm sm:text-base text-[#5E6D7A] mt-3 leading-relaxed">
                Conventional schools force young children to memorize abstract numbers on chalkboards. Montessori children physically touch three-dimensional materials before writing numerals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#0750B8]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                  Tactile Sensorial Foundation
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed">
                  Touching sandpaper letters, sorting color grading tablets, and lifting weighted cylinders isolates physical dimensions for deep cognitive muscle memory.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#0750B8]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                  Concrete Mathematical Manipulatives
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed">
                  Holding a single golden bead (1 unit), a bar of ten (10), a hundred square (100), and a thousand cube (1000) makes decimal place value immediately intuitive.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#0750B8]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center font-bold mb-4">
                  3
                </div>
                <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                  Self-Correction & Intrinsic Confidence
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed">
                  Because materials have built-in mechanical control of error (e.g. cylinder only fits in its own socket), children self-correct joyfully without fear of teacher reprimand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Rhythm Timeline */}
      <MontessoriJourney />

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
