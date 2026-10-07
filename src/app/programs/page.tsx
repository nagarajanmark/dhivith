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

import { useLanguage } from "@/context/LanguageContext";

export default function ProgramsPage() {
  const { language } = useLanguage();
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string>("");

  const handleOpenTour = (progId?: string) => {
    setSelectedProgram(progId || "pre-kg");
    setIsTourModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => handleOpenTour()} />

      <PageHeader
        breadcrumb={language === "ta" ? "மழலையர் வகுப்புகள்" : "Preschool Programs"}
        title={language === "ta" ? "டே கேர், ப்ளே குரூப், ப்ரீ-கேஜி, எல்கேஜி & யூகேஜி" : "Day Care, Play Group, Pre-KG, LKG & UKG"}
        highlightedWord={language === "ta" ? "டே கேர், ப்ளே குரூப், ப்ரீ-கேஜி, எல்கேஜி & யூகேஜி" : "Day Care, Play Group, Pre-KG, LKG & UKG"}
        description={
          language === "ta"
            ? "ஒவ்வொரு குழந்தை. ஒவ்வொரு வாய்ப்பு. எப்போதும். உங்கள் குழந்தையின் உடல் அசைவு, மொழி வளர்ச்சி மற்றும் பள்ளித் தயார்நிலையை உறுதி செய்யும் ஐந்து படிநிலைக் கல்வி."
            : "Every Child. Every Opportunity. Every Time. Explore our five structured developmental stages designed to guide your child from initial sensory motor exploration to confident elementary graduation."
        }
        bannerImage="/school_images/1000453992.webp"
        gradientTheme="blue"
      />

      {/* Programs Detailed Grid Component */}
      <ProgramsSection onOpenTourModal={handleOpenTour} />

      {/* Admission Journey & Phased Settling In */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0750B8] bg-[#EBF3FF] px-4 py-1 rounded-full shadow-sm">
              {language === "ta" ? "மன அமைதியான சேர்க்கை முறை" : "Stress-Free Transition"}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#121D28] mt-3">
              {language === "ta" ? "எங்கள் கனிவான 4 படிநிலை சேர்க்கை & பள்ளி பழகுதல் அனுபவம்" : "Our Gentle 4-Step Admission & Settling Experience"}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-2">
              {language === "ta"
                ? "ஒவ்வொரு மழலையும் பள்ளிச் சூழலை அன்போடும், மகிழ்ச்சியோடும், ஆழ்ந்த பாதுகாப்பு உணர்வோடும் பழக நாங்கள் உதவுகிறோம்."
                : "We ensure every toddler and preschooler transitions into school with warmth, joy, and deep emotional security."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#0750B8]/10 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#0750B8] font-bold flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                {language === "ta" ? "வளாக ஆய்வுப் பார்வை" : "Campus Discovery Tour"}
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                {language === "ta"
                  ? "திருமதி. S. தாரணி அவர்களை சந்தித்து, எங்கள் பிரகாசமான வகுப்பறைகளை நேரில் கண்டு, குழந்தைகளின் அமைதியான கற்றல் சூழலைக் காணுங்கள்."
                  : "Meet Mrs. S Tharani, explore our bright classrooms, and observe children working peacefully with didactic apparatus."}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#0750B8]/10 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#EAF8EF] text-[#159447] font-bold flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                {language === "ta" ? "குழந்தையின் தயார்நிலை உரையாடல்" : "Child Readiness Dialogue"}
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                {language === "ta"
                  ? "உங்கள் குழந்தையின் தினசரி வழக்கம், உணவுப் பழக்கங்கள் மற்றும் தனிப்பட்ட திறன்கள் பற்றிய கனிவான கலந்துரையாடல்."
                  : "A warm informal conversation about your child's routine, dietary preferences, motor milestones, and personality."}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#0750B8]/10 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#F36B12] font-bold flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                {language === "ta" ? "படிப்படியான பள்ளிப் பழக்கம்" : "Phased Settling Schedule"}
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                {language === "ta"
                  ? "பெற்றோருடன் 1 மணி நேர விளையாட்டு வகுப்பில் தொடங்கி, பின்னர் முழுநேர வகுப்புக்கு மாற்றப்படும் மென்மையான முறை."
                  : "Gentle gradual entry starting with 1-hour parent-accompanied play sessions before transitioning to the full schedule."}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#0750B8]/10 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#FFF9E5] text-[#9A6700] font-bold flex items-center justify-center mb-4">
                04
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                {language === "ta" ? "சுய தன்னம்பிக்கை மலர்தல்" : "Flourishing Autonomy"}
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                {language === "ta"
                  ? "1:6 ஆசிரியர் கவனத்தில் உங்கள் குழந்தை சுயபராமரிப்பு, மொழி, எளிய கணிதம் மற்றும் நட்புறவுப் பிணைப்பை வளர்த்துக் கொள்கிறது."
                  : "Your child builds self-care, language, math logic, and peer friendships under our close 1:6 educator guidance."}
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
