"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Sunrise,
  Compass,
  HeartHandshake,
  Sun,
  Moon,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { DAILY_RHYTHM } from "@/data/schoolData";

const journeyImages = [
  "/school_images/1000223395.webp",
  "/school_images/1000453992.webp",
  "/school_images/1000450316.webp",
  "/school_images/1000452018.webp",
  "/school_images/1000452097.webp",
  "/school_images/1000454520.webp",
];

export const MontessoriJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sunrise":
        return <Sunrise className="w-5 h-5 text-[#0750B8]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#159447]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-[#F36B12]" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-[#F5B900]" />;
      case "Moon":
        return <Moon className="w-5 h-5 text-[#0750B8]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0750B8]" />;
    }
  };

  const currentRhythm = DAILY_RHYTHM[activeStep];
  const currentImage = journeyImages[activeStep];

  return (
    <section className="py-20 lg:py-32 bg-[#121D28] text-white relative overflow-hidden">
      {/* Ambient glowing orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0750B8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F36B12]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with dark mode style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Natural Daily Flow</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            A Day of Joyful Discovery & Purpose
          </h2>
          <p className="mt-4 text-white/75 text-sm sm:text-base md:text-lg leading-relaxed">
            Experience how the Montessori daily rhythm balances deep focus, hands-on creativity, social nourishment, and mindful outdoor play.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive Timeline Items */}
          <div className="lg:col-span-6 space-y-3">
            {DAILY_RHYTHM.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-start gap-4 ${
                    isActive
                      ? "bg-white/15 border-amber-400/50 shadow-xl translate-x-2"
                      : "bg-white/5 border-white/10 hover:bg-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? "bg-white shadow-md text-[#121D28]" : "bg-white/10 text-white"
                    }`}
                  >
                    {getIcon(item.icon)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {item.time}
                      </span>
                      {isActive && (
                        <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          Active Focus
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-lg text-white">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Visual Showcase Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] bg-black">
              <Image
                src={currentImage}
                alt={currentRhythm.title}
                fill
                className="object-cover transition-all duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121D28] via-transparent to-transparent" />

              {/* Bottom Details Pill on Active Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#121D28]/90 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Montessori Rhythm: {currentRhythm.time}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {currentRhythm.title}
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  {currentRhythm.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
