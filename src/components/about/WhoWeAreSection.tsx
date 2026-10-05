"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

interface WhoWeAreSectionProps {
  onOpenTourModal: () => void;
}

// Animated 0 -> 100% counter component
const PercentCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200; // 1.2s
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView]);

  return <span ref={ref}>{count}%</span>;
};

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  onOpenTourModal,
}) => {
  const { t, language } = useLanguage();
  const statsRef = React.useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Clean Visual Presentation with large sitting.webp perched on top and logo inside */}
          <div className="lg:col-span-6 relative pt-24 sm:pt-32 md:pt-36">
            {/* Card & Overlay Wrapper */}
            <div className="relative">
              {/* Big 3D Sitting Children Sitting Exactly on Card Top Border */}
              <div className="absolute top-0 right-4 sm:right-8 z-30 w-52 sm:w-64 md:w-76 lg:w-84 aspect-square -translate-y-[62%] pointer-events-none transition-transform duration-500 hover:scale-105 select-none">
                <Image
                  src="/sitting.webp"
                  alt="Children Sitting on Card Joyfully"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_16px_16px_rgba(0,0,0,0.35)]"
                />
              </div>

              {/* Main Brand Logo Card */}
              <div className="relative rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-[#EBF3FF] via-white to-[#EAF8EF] aspect-[4/3] sm:aspect-[16/11] p-6 sm:p-8 flex flex-col justify-between group">
                {/* Background decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/70 rounded-full blur-2xl pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#0750B8]/15 shadow-sm text-xs font-bold text-[#0750B8] inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Montessori Pre-School</span>
                  </span>
                </div>

                {/* Center Large Logo Presentation */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-4">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 drop-shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/logo.png"
                      alt="Dhivith Edu Care Official Logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Bottom Campus Strip */}
                <div className="relative z-10 flex items-center justify-center pt-3 border-t border-gray-200/60 text-xs">
                  <span className="flex items-center gap-1.5 font-bold text-[#159447]">
                    <span className="w-2 h-2 rounded-full bg-[#159447] animate-pulse" />
                    Kinathukadavu, Coimbatore
                  </span>
                </div>
              </div>

              {/* Founder Mini Badge */}
              <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-4 bg-white rounded-2xl p-3.5 shadow-xl border border-gray-100 flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0750B8] text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                  DT
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#121D28]">
                      {SCHOOL_INFO.founder}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#159447]" />
                  </div>
                  <div className="text-[10px] text-[#5E6D7A]">
                    Founder & Director • {SCHOOL_INFO.qualifications}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Short & Crisp Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] text-[#0750B8] text-xs font-bold uppercase tracking-wider border border-[#0750B8]/15 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#0750B8]" />
                <span>{t.whoWeAre.badge}</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121D28] tracking-tight leading-tight">
                {t.whoWeAre.title}
              </h2>

              <p className="text-sm sm:text-base text-[#5E6D7A] mt-3 leading-relaxed">
                {t.whoWeAre.description}
              </p>
            </div>

            {/* 3 Simple Feature Points */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-[#121D28]">
                    {t.whoWeAre.f1Title}
                  </div>
                  <div className="text-xs text-[#5E6D7A]">
                    {t.whoWeAre.f1Desc}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-[#121D28]">
                    {t.whoWeAre.f2Title}
                  </div>
                  <div className="text-xs text-[#5E6D7A]">
                    {t.whoWeAre.f2Desc}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#EAF8EF] text-[#159447] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-[#121D28]">
                    {t.whoWeAre.f3Title}
                  </div>
                  <div className="text-xs text-[#5E6D7A]">
                    {t.whoWeAre.f3Desc}
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTourModal}
                className="px-6 py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>{t.whoWeAre.btnTour}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/classes"
                className="px-5 py-3 rounded-xl bg-white hover:bg-gray-50 text-[#121D28] font-bold text-xs sm:text-sm border border-gray-200 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#0750B8]" />
                <span>{t.whoWeAre.btnClasses}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Animated Stats Loader Cards */}
        <div
          ref={statsRef}
          className="mt-14 sm:mt-16 pt-8 border-t border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {/* Card 1: 1:6 Ratio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-5 sm:p-6 rounded-3xl bg-gray-50/70 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#0750B8]/30 transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden group"
          >
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0750B8] tracking-tight mb-2 group-hover:scale-105 transition-transform">
                {t.whoWeAre.statRatio}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#121D28]">
                {t.whoWeAre.statRatioLabel}
              </div>
              <div className="text-[11px] text-[#5E6D7A] mt-0.5">
                {t.whoWeAre.statRatioSub}
              </div>
            </div>
            {/* Animated Loader Bar */}
            <div className="mt-4 w-full bg-gray-200/80 h-1.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isStatsInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#0750B8] to-[#0962dc] rounded-full"
              />
            </div>
          </motion.div>

          {/* Card 2: 1.5 - 6 Yrs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 sm:p-6 rounded-3xl bg-gray-50/70 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#159447]/30 transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden group"
          >
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#159447] tracking-tight mb-2 group-hover:scale-105 transition-transform">
                {t.whoWeAre.statPreschool}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#121D28]">
                {t.whoWeAre.statPreschoolLabel}
              </div>
              <div className="text-[11px] text-[#5E6D7A] mt-0.5">
                {t.whoWeAre.statPreschoolSub}
              </div>
            </div>
            {/* Animated Loader Bar */}
            <div className="mt-4 w-full bg-gray-200/80 h-1.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isStatsInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#159447] to-emerald-400 rounded-full"
              />
            </div>
          </motion.div>

          {/* Card 3: 1 - 12th */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 sm:p-6 rounded-3xl bg-gray-50/70 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#F36B12]/30 transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden group"
          >
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F36B12] tracking-tight mb-2 group-hover:scale-105 transition-transform">
                {t.whoWeAre.statTuition}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#121D28]">
                {t.whoWeAre.statTuitionLabel}
              </div>
              <div className="text-[11px] text-[#5E6D7A] mt-0.5">
                {t.whoWeAre.statTuitionSub}
              </div>
            </div>
            {/* Animated Loader Bar */}
            <div className="mt-4 w-full bg-gray-200/80 h-1.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isStatsInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#F36B12] to-amber-400 rounded-full"
              />
            </div>
          </motion.div>

          {/* Card 4: 100% Practical Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 sm:p-6 rounded-3xl bg-gray-50/70 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#9A6700]/30 transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden group"
          >
            <div>
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#9A6700] tracking-tight mb-2 group-hover:scale-105 transition-transform">
                <PercentCounter />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#121D28]">
                {t.whoWeAre.statPractical}
              </div>
              <div className="text-[11px] text-[#5E6D7A] mt-0.5">
                {t.whoWeAre.statPracticalSub}
              </div>
            </div>
            {/* Animated Loader Bar */}
            <div className="mt-4 w-full bg-gray-200/80 h-1.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isStatsInView ? { width: "100%" } : {}}
                transition={{ duration: 1.2, delay: 0.65, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#F5B900] to-amber-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
