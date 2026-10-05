"use client";
import React from "react";
import { Calendar, Phone, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

interface SchoolVisitCTAProps {
  onOpenTourModal: () => void;
}

export const SchoolVisitCTA: React.FC<SchoolVisitCTAProps> = ({ onOpenTourModal }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Dhivith Edu Care! I would like to inquire about admissions and schedule a campus tour for my child."
    );
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp.replace(/\+/g, "")}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#0750B8] via-[#0962dc] to-[#159447] p-8 sm:p-14 lg:p-18 text-white overflow-hidden shadow-2xl border-4 border-white">
          {/* Decorative floating brand background graphics */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-[#F5B900]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Abstract SVG Brand Accents */}
          <div className="absolute top-8 right-8 text-amber-300/40 hidden md:block">
            <Sparkles className="w-16 h-16 animate-pulse-soft" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/25">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Campus Walkthrough</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Come Discover the Joy of Learning.
            </h2>

            <p className="text-white/90 text-sm sm:text-base md:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              Experience our prepared Montessori environment firsthand and discover how child-centered education can ignite your child&apos;s lifelong potential.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenTourModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#0750B8] hover:bg-gray-50 font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5 text-[#F36B12]" />
                <span>Schedule a School Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-base backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-amber-300" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                ✓ No obligation discovery visit
              </span>
              <span className="flex items-center gap-1.5">
                ✓ Observe live morning work cycle
              </span>
              <span className="flex items-center gap-1.5">
                ✓ Child developmental readiness consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
