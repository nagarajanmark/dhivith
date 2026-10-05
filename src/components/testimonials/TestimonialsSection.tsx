"use client";
import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { TESTIMONIALS, Testimonial } from "@/data/schoolData";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0750B8]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText="Parent Perspectives"
          badgeVariant="yellow"
          title="Loved by Families. Cherished by Children."
          subtitle="Discover what parents share about their child's emotional growth, academic confidence, and daily joy at Dhivith Edu Care."
          align="center"
          className="mb-16"
        />

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#0750B8]/10 shadow-xl relative">
          {/* Large Quote Mark */}
          <Quote className="w-16 h-16 text-[#F5B900]/30 absolute top-6 right-6 pointer-events-none" />

          <div className="flex flex-col items-start text-left relative z-10">
            {/* Star Rating */}
            <div className="flex items-center gap-1.5 text-amber-500 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-xs font-bold text-[#121D28]">5.0 Verified Experience</span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif italic text-lg sm:text-2xl text-[#121D28] leading-relaxed mb-8">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center justify-between w-full pt-6 border-t border-gray-100 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${current.avatarBg} text-white font-display font-bold text-lg flex items-center justify-center shadow-md`}
                >
                  {current.avatarText}
                </div>
                <div>
                  <div className="font-display font-bold text-base sm:text-lg text-[#121D28]">
                    {current.parentName}
                  </div>
                  <div className="text-xs text-[#0750B8] font-semibold">{current.childInfo}</div>
                  <div className="text-[11px] text-[#5E6D7A]">{current.relationship}</div>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-2xl bg-gray-100 hover:bg-[#EBF3FF] text-[#121D28] hover:text-[#0750B8] transition-colors focus:outline-none border border-gray-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-2xl bg-[#0750B8] hover:bg-[#063f91] text-white transition-colors focus:outline-none shadow-md"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-[#0750B8]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
