"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlyphPortal from "@/components/ui/glyph-portal";
import { Sparkles, ArrowRight, Calendar, Phone, Award, ShieldCheck, Heart } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

interface DhivithPortalSectionProps {
  onOpenTourModal?: () => void;
}

export const DhivithPortalSection: React.FC<DhivithPortalSectionProps> = ({ onOpenTourModal }) => {
  const [selectedWord, setSelectedWord] = useState<string>("DHIVITH");

  return (
    <section className="relative w-full bg-[#121D28] text-white border-t border-b border-white/10">
      {/* Top Header Control Bar */}
      <div className="w-full bg-[#0d1720]/90 border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-white p-1 shadow-md flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <span>Interactive Montessori Type Portal</span>
                <span className="text-[10px] bg-[#159447] text-white font-extrabold px-2 py-0.5 rounded-full">
                  LIVE 3D CAMERA
                </span>
              </h3>
              <p className="text-[11px] text-white/70">
                Choose any letter or word below, then scroll down to travel through the typography into the campus.
              </p>
            </div>
          </div>

          {/* Word Selector */}
          <div className="flex items-center gap-2 bg-white/10 p-1 rounded-2xl border border-white/10">
            {["DHIVITH", "MONTESSORI", "LEARN", "GROW"].map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWord(w)}
                className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  selectedWord === w
                    ? "bg-[#159447] text-white shadow-md scale-105"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Edge-to-Edge Glyph Portal */}
      <div className="w-full relative">
        <GlyphPortal
          key={selectedWord}
          word={selectedWord}
          scrollLength={2.6}
          interactive={true}
          annotations={false}
          enterLabel="Step Inside Campus"
          fontFamily='"Arial Black", "Arial", sans-serif'
          fontWeight={900}
          className="w-full"
          style={{
            // @ts-ignore
            "--gp-paper": "#121D28",
            "--gp-ink": "#ffffff",
            "--gp-field": "#072013",
            "--gp-foreground": "#ffffff",
          }}
          background={
            <div className="relative w-full h-full">
              <Image
                src="/school_images/1000453992.webp"
                alt="Dhivith Edu Care Campus"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0750B8]/85 via-[#072013]/90 to-[#159447]/80" />
            </div>
          }
          front={
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 pointer-events-none">
              <div className="flex items-center justify-between pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Dhivith Edu Care • Kinathukadavu</span>
                </div>

                <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 px-3.5 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md hidden sm:inline-block">
                  Ages 1.5 – 6 Yrs & Tuitions to Grade 12
                </span>
              </div>

              <div className="text-center space-y-1.5 mb-10 pointer-events-auto">
                <p className="text-xs sm:text-base text-white/90 font-medium tracking-wide">
                  A different perspective on learning starts right here.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-amber-300 text-xs font-bold border border-white/20 shadow-md">
                  <span>Hover / tap any letter above, then scroll down</span>
                  <span className="animate-bounce">↓</span>
                </div>
              </div>
            </div>
          }
        >
          {/* Destination Scene inside the letter */}
          <div className="w-full max-w-5xl mx-auto text-left space-y-8 py-10 px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to Dhivith Edu Care</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-white leading-tight">
              Where Joyful Learning Meets Limitless Potential.
            </h2>

            <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl">
              Founded on July 2, 2024, by Mrs. S Tharani (M.Sc., PGDM, PGMTTC), we combine authentic Montessori preschooling with personalized academic mentoring in Vadapudur, Kinathukadavu, Coimbatore.
            </p>

            {/* 3 Pillars Inside Portal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#0750B8] flex items-center justify-center text-white text-xs font-extrabold mb-3">
                  01
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">
                  Authentic Montessori
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Concrete sensory materials, phonics & golden bead math in prepared child-scale environments.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#159447] flex items-center justify-center text-white text-xs font-extrabold mb-3">
                  02
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">
                  1:6 Educator Ratio
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Intimate individual attention ensuring no child is left behind or forced into arbitrary paces.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#F36B12] flex items-center justify-center text-white text-xs font-extrabold mb-3">
                  03
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-1.5">
                  Tuition & Coaching Hub
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Evening batches from LKG to Grade 12 (CBSE/ICSE/State) and Engineering Mathematics.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenTourModal}
                className="px-7 py-3.5 rounded-xl bg-[#159447] hover:bg-[#117a39] text-white font-bold text-sm shadow-xl transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book a Campus Tour</span>
              </button>

              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/25 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call {SCHOOL_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </GlyphPortal>
      </div>
    </section>
  );
};
