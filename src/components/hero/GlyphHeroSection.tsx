"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Calendar,
  Phone,
  ArrowRight,
  ChevronRight,
  Award,
  MapPin,
} from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

interface GlyphHeroSectionProps {
  onOpenTourModal: () => void;
}

export const GlyphHeroSection: React.FC<GlyphHeroSectionProps> = ({ onOpenTourModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  // Link scroll progress across the hero container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 25,
    mass: 0.25,
    restDelta: 0.001,
  });

  // 1. Text Zoom: Scales from 1x to 8x as user scrolls down
  const textScale = useTransform(smoothProgress, [0, 1], [1, 8]);
  const textOpacity = useTransform(smoothProgress, [0, 0.7, 0.95], [1, 0.6, 0]);

  // 2. UI Elements (badges, buttons, metrics, narrative) fade out on scroll
  const uiOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
  const uiY = useTransform(smoothProgress, [0, 0.35], [0, 30]);
  const topBadgesY = useTransform(smoothProgress, [0, 0.35], [0, -25]);

  // 3. Background video subtle scale
  const videoScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(smoothProgress, [0, 0.8, 1], [0.55, 0.75, 0.9]);

  return (
    <div ref={containerRef} className="relative w-full h-[180vh] bg-[#0b131e]">
      {/* Sticky Fullscreen Viewport during the zoom scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8 text-white">
        {/* 1. Full Screen Background Video */}
        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/hero_banner.mp4" type="video/mp4" />
          </video>

          {/* Cinematic Dark Frosted Overlay & Enhanced Shadow */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-[#0b131e]/90 via-[#0b131e]/65 to-[#0b131e]/95"
          />
          {/* Deep Vignette Shadow centered on the text */}
          <div className="absolute inset-0 bg-radial-[at_center] from-black/40 via-black/60 to-black/85 pointer-events-none" />
        </motion.div>

        {/* 2. Main Hero Content Composition */}
        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center space-y-4 sm:space-y-6 my-auto">
          {/* Top Badges */}
          <motion.div
            style={{ opacity: uiOpacity, y: topBadgesY }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#1e293b]/80 border border-white/20 text-[11px] sm:text-xs text-white shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="font-extrabold tracking-wider uppercase">
                {language === "ta" ? "திவித் எடு கேர்" : "DHIVITH EDU CARE"}
              </span>
              <span className="text-white/40">|</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                {language === "ta" ? "கிணத்துக்கடவு" : "Kinathukadavu"}
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1e3a8a]/70 border border-blue-400/30 text-xs font-semibold text-blue-200 shadow-lg backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === "ta" ? "மாண்டிசோரி அங்கீகாரம்" : "Montessori Certified"}</span>
            </div>
          </motion.div>

          {/* Massive Solid White DHIVITH Typography with Scroll Zoom */}
          <div className="w-full flex items-center justify-center select-none overflow-visible py-0.5">
            <motion.h1
              style={{
                scale: textScale,
                opacity: textOpacity,
                transformOrigin: "center center",
              }}
              className="font-display font-black text-5xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[150px] tracking-wider text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] leading-none uppercase text-center"
            >
              DHIVITH
            </motion.h1>
          </div>

          {/* Narrative & Headline */}
          <motion.div
            style={{ opacity: uiOpacity, y: uiY }}
            className="space-y-1.5 sm:space-y-2 max-w-2xl mx-auto px-3"
          >
            <h2 className="font-display font-extrabold text-xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight drop-shadow-lg">
              {language === "ta" ? "மகிழ்ச்சியான கற்றல் தொடங்கும் இடம்" : "Where Joyful Learning Begins"}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed drop-shadow-md">
              {t.hero.description}
            </p>
          </motion.div>

          {/* Dual Action Buttons Row */}
          <motion.div
            style={{ opacity: uiOpacity, y: uiY }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-xl mx-auto"
          >
            <button
              onClick={onOpenTourModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#059669] to-[#10b981] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105"
            >
              <div className="p-1 rounded-md bg-[#0284c7]">
                <Calendar className="w-3.5 h-3.5 text-white" />
              </div>
              <span>{t.common.scheduleVisit}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <Link
                href="/classes"
                className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-[#334155]/80 hover:bg-[#475569]/90 border border-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center justify-center gap-1.5 shadow-lg hover:scale-105"
              >
                <span>{t.nav.classes}</span>
                <ChevronRight className="w-4 h-4 text-white/70" />
              </Link>

              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="flex-1 sm:flex-initial px-5 py-3.5 rounded-xl bg-[#0f172a]/80 hover:bg-[#1e293b]/90 border border-white/20 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{SCHOOL_INFO.phoneFormatted}</span>
              </a>
            </div>
          </motion.div>

          {/* Metrics Row */}
          <motion.div
            style={{ opacity: uiOpacity, y: uiY }}
            className="grid grid-cols-3 gap-2 sm:gap-8 pt-3 sm:pt-4 w-full max-w-lg mx-auto px-2"
          >
            <div className="text-center p-2 rounded-xl bg-white/5 border border-white/10 sm:border-transparent sm:bg-transparent">
              <div className="font-display font-black text-xl sm:text-3xl text-[#fbbf24] drop-shadow-md">
                {t.hero.stat1Label}
              </div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium leading-tight mt-0.5">
                {t.hero.stat1Sub}
              </div>
            </div>

            <div className="text-center p-2 rounded-xl bg-white/5 border border-white/10 sm:border-transparent sm:bg-transparent">
              <div className="font-display font-black text-xl sm:text-3xl text-[#34d399] drop-shadow-md">
                PGMTTC
              </div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium leading-tight mt-0.5">
                {language === "ta" ? "சான்றிதழ் ஆசிரியர்கள்" : "Certified Teachers"}
              </div>
            </div>

            <div className="text-center p-2 rounded-xl bg-white/5 border border-white/10 sm:border-transparent sm:bg-transparent">
              <div className="font-display font-black text-xl sm:text-3xl text-[#60a5fa] drop-shadow-md">
                {t.hero.stat3Label}
              </div>
              <div className="text-[10px] sm:text-xs text-white/80 font-medium leading-tight mt-0.5">
                {t.hero.stat3Sub}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
