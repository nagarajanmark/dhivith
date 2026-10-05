"use client";
import React from "react";
import Image from "next/image";
import { X, CheckCircle2, Clock, Users, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { Program } from "@/data/schoolData";
import { Badge } from "../ui/Badge";

interface ProgramDetailModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTour: (programId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  isOpen,
  onClose,
  onBookTour,
}) => {
  if (!isOpen || !program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Header */}
        <div className="relative h-64 sm:h-72 w-full flex-shrink-0">
          <Image
            src={program.image}
            alt={program.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121D28] via-[#121D28]/50 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="yellow" size="sm">
                {program.ageRange}
              </Badge>
              <Badge variant="blue" size="sm">
                {program.ratio}
              </Badge>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl">
              {program.name}
            </h3>
            <p className="text-white/80 text-sm mt-0.5">{program.subTitle}</p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div>
            <h4 className="font-display font-bold text-lg text-[#121D28] mb-2">
              Program Philosophy & Overview
            </h4>
            <p className="text-[#5E6D7A] text-sm sm:text-base leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Quick Details Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0750B8] shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#5E6D7A]">Daily Timing</div>
                <div className="text-sm font-bold text-[#121D28]">{program.schedule}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#159447] shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#5E6D7A]">Educator Guidance</div>
                <div className="text-sm font-bold text-[#121D28]">{program.ratio}</div>
              </div>
            </div>
          </div>

          {/* Curriculum Highlights */}
          <div>
            <h4 className="font-display font-bold text-lg text-[#121D28] mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0750B8]" />
              Core Curriculum Milestones
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.curriculumHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200/80 text-xs sm:text-sm text-[#2A343D]"
                >
                  <Sparkles className="w-4 h-4 text-[#F36B12] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="font-display font-bold text-lg text-[#121D28] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#159447]" />
              Key Developmental Benefits
            </h4>
            <div className="space-y-2">
              {program.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E6D7A]">
                  <div className="w-2 h-2 rounded-full bg-[#159447] mt-1.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#5E6D7A] text-center sm:text-left">
            Limited batch admissions to preserve individual mentor ratios.
          </div>
          <button
            onClick={() => {
              onClose();
              onBookTour(program.id);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            <span>Schedule a Visit for this Program</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
