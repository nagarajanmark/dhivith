"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { PROGRAMS, Program } from "@/data/schoolData";
import { ProgramDetailModal } from "../modals/ProgramDetailModal";
import { useLanguage } from "@/context/LanguageContext";

interface ProgramsSectionProps {
  onOpenTourModal: (programId?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenTourModal }) => {
  const { language } = useLanguage();
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const handleOpenProgram = (prog: Program) => {
    setSelectedProgram(prog);
    setDetailModalOpen(true);
  };

  return (
    <section id="programs" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#159447]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText={language === "ta" ? "மாண்டிசோரி கற்றல் வழிகள்" : "Montessori Learning Pathways"}
          badgeVariant="orange"
          title={language === "ta" ? "ஒவ்வொரு வளர்ச்சி நிலையையும் செதுக்கும் சூழல்" : "Nurturing Every Developmental Stage"}
          subtitle={
            language === "ta"
              ? "மழலையர் முதல் தொடக்கப்பள்ளி வரையிலான ஒவ்வொரு கட்டத்திலும் குழந்தையின் சுயமாக கற்கும் ஆர்வத்தை வளர்க்கும் பிரத்யேக கல்வி."
              : "From tender first steps in our Toddler community to academic mastery and leadership in Kindergarten, our age-tailored environments foster lifelong independence."
          }
          align="center"
          className="mb-16"
        />

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROGRAMS.map((prog) => {
            return (
              <div
                key={prog.id}
                className="group relative bg-gray-50/70 hover:bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-[#0750B8]/25 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Top Image + Age Badge */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#121D28]">
                  <Image
                    src={prog.image}
                    alt={prog.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121D28]/90 via-[#121D28]/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-extrabold shadow-md backdrop-blur-md"
                      style={{
                        backgroundColor: prog.color,
                        color: "#FFFFFF",
                      }}
                    >
                      {language === "ta" ? (prog.ageRangeTa || prog.ageRange) : prog.ageRange}
                    </span>

                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-[#121D28] shadow-sm backdrop-blur-md">
                      {language === "ta" ? (prog.ratioTa || prog.ratio) : prog.ratio}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block mb-1">
                      {language === "ta" ? (prog.subTitleTa || prog.subTitle) : prog.subTitle}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl group-hover:text-amber-200 transition-colors">
                      {language === "ta" ? (prog.nameTa || prog.name) : prog.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-[#0750B8] mb-2 italic">
                      &ldquo;{language === "ta" ? (prog.taglineTa || prog.tagline) : prog.tagline}&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed">
                      {language === "ta" ? (prog.descriptionTa || prog.description) : prog.description}
                    </p>
                  </div>

                  {/* Key Developmental Benefits */}
                  <div className="space-y-2 pt-2 border-t border-gray-200/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#121D28] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F36B12]" />
                      <span>{language === "ta" ? "முக்கிய வளர்ச்சி மைல்கற்கள்:" : "Key Developmental Milestones:"}</span>
                    </div>
                    {((language === "ta" && prog.keyBenefitsTa) ? prog.keyBenefitsTa : prog.keyBenefits).slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#2A343D]">
                        <CheckCircle2
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: prog.color }}
                        />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule Indicator */}
                  <div className="flex items-center gap-2 text-xs text-[#5E6D7A] bg-white/80 p-2.5 rounded-xl border border-gray-100">
                    <Clock className="w-4 h-4 text-[#0750B8] flex-shrink-0" />
                    <span className="font-medium truncate">{language === "ta" ? (prog.scheduleTa || prog.schedule) : prog.schedule}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => handleOpenProgram(prog)}
                      className="w-full sm:flex-1 py-3 rounded-xl bg-white hover:bg-[#EBF3FF] text-[#0750B8] font-bold text-xs border border-[#0750B8]/20 hover:border-[#0750B8]/40 transition-all flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                    >
                      <span>{language === "ta" ? "பாடத்திட்டம் அறிக" : "Discover Curriculum"}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenTourModal(prog.id)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-amber-300" />
                      <span>{language === "ta" ? "வளாக பார்வை" : "Book Tour"}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onBookTour={(programId) => onOpenTourModal(programId)}
      />
    </section>
  );
};
