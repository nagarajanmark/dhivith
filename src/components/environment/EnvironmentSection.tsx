"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Layers,
  Trees,
  BookOpen,
  Sun,
  Coffee,
  CheckCircle2,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ENVIRONMENT_HOTSPOTS, EnvironmentHotspot } from "@/data/schoolData";

export const EnvironmentSection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<EnvironmentHotspot>(
    ENVIRONMENT_HOTSPOTS[0]
  );

  return (
    <section id="environment" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText="Prepared Educational Spaces"
          badgeVariant="yellow"
          title="Designed with Natural Light, Calm & Child Scale"
          subtitle="Every physical element in our preschool is purposely tailored to the child's height, strength, and sensory comfort—fostering effortless autonomy and deep concentration."
          align="center"
          className="mb-16"
        />

        {/* Interactive Hotspot Selection Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {ENVIRONMENT_HOTSPOTS.map((hotspot) => {
            const isSelected = activeHotspot.id === hotspot.id;
            return (
              <button
                key={hotspot.id}
                onClick={() => setActiveHotspot(hotspot)}
                className={`flex-shrink-0 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  isSelected
                    ? "bg-[#0750B8] text-white border-[#0750B8] shadow-lg scale-[1.02]"
                    : "bg-gray-100 text-[#2A343D] border-gray-200 hover:bg-[#EBF3FF] hover:text-[#0750B8]"
                }`}
              >
                <span>{hotspot.title}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Selected Spotlight (7 cols) */}
          <div className="lg:col-span-7 bg-gray-50/70 rounded-3xl p-6 sm:p-8 border border-gray-200/80 flex flex-col justify-between shadow-sm">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md bg-[#121D28] mb-6">
              <Image
                src={activeHotspot.image}
                alt={activeHotspot.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121D28]/80 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-white/90 text-[#0750B8] shadow-md backdrop-blur-md">
                  {activeHotspot.area}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {activeHotspot.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#5E6D7A] leading-relaxed">
                {activeHotspot.description}
              </p>

              {/* Architectural features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activeHotspot.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#0750B8]/10 text-xs text-[#121D28] font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#159447] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Editorial Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {ENVIRONMENT_HOTSPOTS.filter((h) => h.id !== activeHotspot.id)
              .slice(0, 3)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveHotspot(item)}
                  className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#0750B8]/10 hover:border-[#0750B8]/30 shadow-sm hover:shadow-md cursor-pointer transition-all flex items-center gap-4"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#121D28]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="100px"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F36B12]">
                      {item.area}
                    </span>
                    <h4 className="font-display font-bold text-base text-[#121D28] group-hover:text-[#0750B8] transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5E6D7A] line-clamp-2 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            {/* Quick architectural badge */}
            <div className="p-5 rounded-2xl bg-[#EBF3FF] border border-[#0750B8]/20 flex items-center gap-4 text-xs">
              <div className="w-10 h-10 rounded-xl bg-[#0750B8] text-white flex items-center justify-center flex-shrink-0">
                <Sun className="w-5 h-5" />
              </div>
              <p className="text-[#0750B8] font-medium leading-relaxed">
                <strong className="font-bold">Natural Light & Air Purity:</strong> 100% of our learning ateliers have direct cross-ventilation, low glass panels, and medical-grade air filtration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
