"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Eye,
  BookOpen,
  Calculator,
  Globe,
  Palette,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { LEARNING_AREAS, LearningArea } from "@/data/schoolData";

interface MontessoriPillarsProps {
  onOpenTourModal: () => void;
}

export const MontessoriPillars: React.FC<MontessoriPillarsProps> = ({ onOpenTourModal }) => {
  const [selectedArea, setSelectedArea] = useState<LearningArea | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Eye":
        return <Eye className="w-5 h-5" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5" />;
      case "Calculator":
        return <Calculator className="w-5 h-5" />;
      case "Globe":
        return <Globe className="w-5 h-5" />;
      case "Palette":
        return <Palette className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="pillars" className="py-20 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0750B8]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F5B900]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText="The Six Montessori Avenues"
          badgeVariant="green"
          title="Holistic Development Through Purposeful Work"
          subtitle="Every area of our classroom invites spontaneous exploration, moving from the concrete to the abstract through scientifically engineered didactic materials."
          align="center"
          className="mb-16"
        />

        {/* 6 Rich Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEARNING_AREAS.map((area, index) => {
            return (
              <div
                key={area.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#0750B8]/10 transition-all duration-500 hover:-translate-y-2 flex flex-col cursor-pointer"
                onClick={() => setSelectedArea(area)}
              >
                {/* Card Top Image */}
                <div className="relative h-56 w-full overflow-hidden bg-[#121D28]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121D28]/80 via-[#121D28]/20 to-transparent" />

                  {/* Icon & Category Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-lg backdrop-blur-md"
                      style={{ backgroundColor: area.color }}
                    >
                      {getIcon(area.iconName)}
                    </div>

                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#121D28] shadow-sm backdrop-blur-md">
                      Area {index + 1}
                    </span>
                  </div>

                  {/* Title on Image overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-extrabold text-2xl group-hover:text-amber-300 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-1">{area.tagline}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-[#5E6D7A] leading-relaxed line-clamp-3">
                    {area.description}
                  </p>

                  {/* Highlight activities */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#121D28]">
                      Hands-on Materials:
                    </div>
                    {area.activities.slice(0, 2).map((act, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#2A343D]">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: area.color }}
                        />
                        <span className="truncate">{act}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0750B8] group-hover:text-[#F36B12] transition-colors">
                    <span>Explore Learning Materials</span>
                    <div className="w-7 h-7 rounded-full bg-[#EBF3FF] group-hover:bg-[#FFF2E8] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning Area Deep-Dive Modal */}
      {selectedArea && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedArea(null);
          }}
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-56 w-full flex-shrink-0">
              <Image
                src={selectedArea.image}
                alt={selectedArea.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121D28] via-[#121D28]/40 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <Badge variant="yellow" size="sm" className="mb-2">
                  Montessori Curriculum Focus
                </Badge>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {selectedArea.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">{selectedArea.tagline}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              <div>
                <h4 className="font-display font-bold text-base text-[#121D28] mb-2">
                  Area Description & Scientific Rationale
                </h4>
                <p className="text-[#5E6D7A] text-sm leading-relaxed">
                  {selectedArea.description}
                </p>
              </div>

              {/* Developmental focus callout */}
              <div
                className="p-4 rounded-2xl border text-xs sm:text-sm"
                style={{
                  backgroundColor: selectedArea.bgLight,
                  borderColor: `${selectedArea.color}40`,
                }}
              >
                <span className="font-bold text-[#121D28]">Developmental Outcome: </span>
                <span className="text-[#2A343D]">{selectedArea.developmentalFocus}</span>
              </div>

              {/* Didactic Materials List */}
              <div>
                <h4 className="font-display font-bold text-base text-[#121D28] mb-3">
                  Key Didactic Materials & Activities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedArea.activities.map((act, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#0750B8]/10 text-xs sm:text-sm text-[#2A343D]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: selectedArea.color }}
                      />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#5E6D7A]">
                See these materials in our live prepared classrooms.
              </div>
              <button
                onClick={() => {
                  setSelectedArea(null);
                  onOpenTourModal();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                Schedule Classroom Observation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
