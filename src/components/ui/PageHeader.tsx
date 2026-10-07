"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  breadcrumb: string;
  bannerImage?: string;
  gradientTheme?: "blue" | "green" | "emerald" | "amber" | "dark";
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  breadcrumb,
  bannerImage,
  gradientTheme = "blue",
}) => {
  const renderTitle = (isDarkTheme: boolean) => {
    if (!highlightedWord) return title;
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span
          className={
            isDarkTheme
              ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-sm"
              : "text-transparent bg-clip-text bg-gradient-to-r from-[#0750B8] via-[#159447] to-[#F36B12]"
          }
        >
          {highlightedWord}
        </span>
        {parts[1]}
      </>
    );
  };

  if (bannerImage) {
    return (
      <section className="relative pt-32 sm:pt-40 pb-16 lg:pb-24 overflow-hidden text-white min-h-[360px] sm:min-h-[420px] flex items-center bg-[#0750B8] border-b border-gray-100 shadow-md">
        {/* Full-bleed Optimized Background Image */}
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt={title}
            fill
            priority
            className="object-cover object-center transition-transform duration-1000 scale-105"
            sizes="100vw"
          />
        </div>

        {/* Ultra-luxe Cinematic Multi-Stop Gradient Overlay */}
        <div
          className={`absolute inset-0 ${
            gradientTheme === "green"
              ? "bg-gradient-to-r from-[#0C622C]/95 via-[#159447]/85 to-[#0F172A]/92"
              : gradientTheme === "amber"
              ? "bg-gradient-to-r from-[#9A3412]/95 via-[#F36B12]/85 to-[#0F172A]/92"
              : "bg-gradient-to-r from-[#0750B8]/95 via-[#0750B8]/80 to-[#0F172A]/92"
          } backdrop-blur-[1px]`}
        />

        {/* Ambient Radial Highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,185,0,0.25),transparent_65%)] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          {/* Breadcrumb Pill */}
          <nav className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/15 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md mb-5 shadow-sm hover:bg-white/20 transition-colors">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-amber-300 font-bold">{breadcrumb}</span>
          </nav>

          {/* Title */}
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white tracking-tight max-w-4xl mx-auto leading-tight mb-4 sm:mb-5 drop-shadow-md">
            {renderTitle(true)}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-white/90 font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-xs">
            {description}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 lg:pb-24 bg-white overflow-hidden border-b border-gray-100">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0750B8]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#F5B900]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="inline-flex items-center gap-2 text-xs font-semibold text-[#5E6D7A] bg-white/80 px-4 py-1.5 rounded-full border border-gray-200 mb-6 shadow-sm">
          <Link href="/" className="hover:text-[#0750B8] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#0750B8] font-bold">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#121D28] tracking-tight max-w-4xl mx-auto leading-tight mb-4 sm:mb-6">
          {renderTitle(false)}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] font-normal leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

