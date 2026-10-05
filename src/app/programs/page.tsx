"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProgramsSection } from "@/components/programs/ProgramsSection";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { PROGRAMS, SCHOOL_INFO } from "@/data/schoolData";
import { CheckCircle2, Clock, Users, Sparkles, Calendar, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";

export default function ProgramsPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  const handleOpenTour = (progId?: string) => {
    setSelectedProgram(progId || "pre-kg");
    setIsTourModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => handleOpenTour()} />

      {/* Page Header */}
      <PageHeader
        breadcrumb="Preschool Programs"
        badge="Early Learning Pathways"
        title="Day Care, Play Group, Pre-KG, LKG & UKG"
        highlightedWord="Day Care, Play Group, Pre-KG, LKG & UKG"
        description="Every Child. Every Opportunity. Every Time. Explore our five structured developmental stages designed to guide your child from initial sensory motor exploration to confident elementary graduation."
      />

      {/* Programs Detailed Grid Component */}
      <ProgramsSection onOpenTourModal={handleOpenTour} />

      {/* Admission Journey & Phased Settling In */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0750B8] bg-white px-4 py-1 rounded-full shadow-sm">
              Stress-Free Transition
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121D28] mt-3">
              Our Gentle 4-Step Admission & Settling Experience
            </h2>
            <p className="text-sm sm:text-base text-[#5E6D7A] mt-2">
              We ensure every toddler and preschooler transitions into school with warmth, joy, and deep emotional security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#0750B8]/10 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#0750B8] font-bold flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                Campus Discovery Tour
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                Meet Mrs. S Tharani, explore our bright classrooms, and observe children working peacefully with didactic apparatus.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#0750B8]/10 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#EAF8EF] text-[#159447] font-bold flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                Child Readiness Dialogue
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                A warm informal conversation about your child&apos;s routine, dietary preferences, motor milestones, and personality.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#0750B8]/10 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#F36B12] font-bold flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                Phased Settling Schedule
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                Gentle gradual entry starting with 1-hour parent-accompanied play sessions before transitioning to the full schedule.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#0750B8]/10 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#FFF9E5] text-[#9A6700] font-bold flex items-center justify-center mb-4">
                04
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                Flourishing Autonomy
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                Your child builds self-care, language, math logic, and peer friendships under our close 1:6 educator guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Visit CTA */}
      <SchoolVisitCTA onOpenTourModal={() => handleOpenTour()} />

      {/* Footer */}
      <Footer onOpenTourModal={handleOpenTour} />

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        defaultProgram={selectedProgram}
      />
    </main>
  );
}
