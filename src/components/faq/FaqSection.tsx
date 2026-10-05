"use client";
import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { FAQS } from "@/data/schoolData";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText="Common Inquiries"
          badgeVariant="blue"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Montessori education, our daily routines, and the enrollment experience at Dhivith Edu Care."
          align="center"
          className="mb-14"
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-gray-50/70 rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-300 hover:border-[#0750B8]/25"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-white text-[#0750B8] flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0">
                      Q{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#121D28]">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-xl bg-white text-[#121D28] flex items-center justify-center flex-shrink-0 transition-transform duration-300 shadow-sm ${
                      isOpen ? "rotate-180 bg-[#0750B8] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-6 text-sm text-[#5E6D7A] leading-relaxed border-t border-gray-200/60 bg-white/60">
                    <p className="pl-11">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
