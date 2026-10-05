"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Heart,
  Star,
  Users,
  CheckCircle2,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Badge } from "../ui/Badge";
import { SCHOOL_INFO } from "@/data/schoolData";

interface HeroSectionProps {
  onOpenTourModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTourModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden flex items-center bg-white"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0750B8]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-soft" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F5B900]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#159447]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Organic Brand Shapes */}
      <div className="absolute top-32 left-8 lg:left-16 w-12 h-12 text-[#F36B12]/80 animate-float-slow pointer-events-none hidden md:block">
        <svg viewBox="0 0 50 50" fill="currentColor" className="w-full h-full drop-shadow">
          <path d="M25 0 C25 25 50 25 50 25 C25 25 25 50 25 50 C25 25 0 25 0 25 C25 25 25 0 25 0 Z" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-6 lg:right-12 w-14 h-14 text-[#159447]/70 animate-float-reverse pointer-events-none hidden md:block">
        <svg viewBox="0 0 50 50" fill="currentColor" className="w-full h-full drop-shadow">
          <path d="M25 0 C40 10 50 30 40 45 C30 50 10 40 0 25 C10 10 20 0 25 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography, Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Admissions Badge with Location */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#0750B8]/20 shadow-sm mb-6 backdrop-blur-md flex-wrap">
              <span className="w-2.5 h-2.5 rounded-full bg-[#159447] animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#159447] -ml-4.5" />
              <span className="text-xs sm:text-sm font-extrabold text-[#0750B8]">
                DHIVITH EDU CARE
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs sm:text-sm font-semibold text-[#159447] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#F36B12]" />
                Kinathukadavu, Coimbatore
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-[#5E6D7A]">
                Est. {SCHOOL_INFO.establishedDate}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[66px] tracking-tight text-[#121D28] leading-[1.1] mb-5">
              Little Minds.{" "}
              <span className="block mt-1 bg-gradient-to-r from-[#0750B8] via-[#159447] to-[#F36B12] bg-clip-text text-transparent">
                Limitless Possibilities.
              </span>
            </h1>

            {/* Motto Highlight */}
            <div className="p-3 rounded-2xl bg-[#EBF3FF] border border-[#0750B8]/15 text-xs sm:text-sm font-bold text-[#0750B8] mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F36B12] flex-shrink-0" />
              <span>&ldquo;{SCHOOL_INFO.motto}&rdquo; • {SCHOOL_INFO.successMotto}</span>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5E6D7A] font-normal leading-relaxed max-w-2xl mb-8">
              Under the visionary guidance of <strong className="text-[#121D28]">{SCHOOL_INFO.founder}</strong> ({SCHOOL_INFO.qualifications}), we offer a peaceful, prepared Montessori environment for <strong>Day Care, Play Group, Pre-KG, LKG, and UKG</strong> alongside comprehensive tuition classes from LKG to Grade 12.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenTourModal}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0750B8] to-[#0962dc] text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 text-amber-300" />
                <span>Book a School Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/90 hover:bg-white text-[#121D28] font-bold text-base border border-[#0750B8]/15 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span>Call Admissions</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#EAF8EF] text-[#159447] font-bold">
                  {SCHOOL_INFO.phone}
                </span>
              </a>
            </div>

            {/* Micro Trust Markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#0750B8]/10 w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#121D28]">1:6 Ratio</div>
                  <div className="text-[11px] text-[#5E6D7A]">Individual Focus</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EAF8EF] text-[#159447] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#121D28]">PGMTTC Trained</div>
                  <div className="text-[11px] text-[#5E6D7A]">Montessori Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#121D28]">Preschool to 12th</div>
                  <div className="text-[11px] text-[#5E6D7A]">Tuition & Coaching</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Image Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0750B8]/20 via-[#159447]/20 to-[#F5B900]/25 rounded-[36px] blur-xl transform -rotate-2" />

              <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-white">
                <Image
                  src="/school_images/1000453992.webp"
                  alt="Dhivith Edu Care Montessori Classroom"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121D28]/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white p-1 shadow-sm flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Dhivith Edu Care"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#121D28]">
                        Dhivith Edu Care Campus
                      </div>
                      <div className="text-[11px] text-[#5E6D7A]">
                        Vadapudur, Kinathukadavu • 641032
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#0750B8]/15 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-[#159447] text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#121D28]">Day Care to 12th</div>
                  <div className="text-[10px] text-[#159447] font-semibold">Montessori & Tuitions</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#F36B12]/20 flex items-center gap-3 animate-float-reverse">
                <div className="w-10 h-10 rounded-xl bg-[#F36B12] text-white flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#121D28]">Success Begins Here</div>
                  <div className="text-[10px] text-[#F36B12] font-semibold">Individual Attention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
