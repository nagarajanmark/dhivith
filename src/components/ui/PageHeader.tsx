"use client";
import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  description: string;
  breadcrumb: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  breadcrumb,
}) => {
  const renderTitle = () => {
    if (!highlightedWord) return title;
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0750B8] via-[#159447] to-[#F36B12]">
          {highlightedWord}
        </span>
        {parts[1]}
      </>
    );
  };

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

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF3FF] text-[#0750B8] border border-[#0750B8]/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F36B12]" />
            {badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#121D28] tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          {renderTitle()}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#5E6D7A] font-normal leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};
