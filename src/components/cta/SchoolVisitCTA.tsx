"use client";
import React from "react";
import { Calendar, Phone, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

interface SchoolVisitCTAProps {
  onOpenTourModal: () => void;
}

export const SchoolVisitCTA: React.FC<SchoolVisitCTAProps> = ({ onOpenTourModal }) => {
  const { t, language } = useLanguage();

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Mrs. S Tharani / Dhivith Edu Care team! I would like to inquire about admissions and schedule a campus tour.`
    );
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp.replace(/\+/g, "")}?text=${text}`, "_blank");
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl border-4 border-white min-h-[380px] sm:min-h-[420px] flex items-center">
          {/* Background image & soft left gradient for readability */}
          <div
            className="absolute inset-0 bg-cover bg-[center_right_20%] sm:bg-right transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url('/clouds.webp')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0750B8]/85 via-[#0750B8]/50 sm:via-[#0750B8]/30 to-transparent" />

          <div className="relative z-10 max-w-2xl text-left space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/25 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/30 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.common.admissionsOpen}</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white tracking-tight leading-[1.2] drop-shadow-md">
              {t.homeCta.title}
            </h2>

            <p className="text-white/95 text-xs sm:text-sm md:text-base font-medium leading-relaxed drop-shadow max-w-xl">
              {t.homeCta.description}
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
              <button
                onClick={onOpenTourModal}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-white text-[#0750B8] hover:bg-gray-50 font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#F36B12]" />
                <span>{t.homeCta.btnTour}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-[#0750B8]/60 hover:bg-[#0750B8]/80 text-white border border-white/40 font-bold text-sm sm:text-base backdrop-blur-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-amber-300" />
                <span>{language === "ta" ? "வாட்ஸ்அப் உதவி" : "Chat on WhatsApp"}</span>
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-start gap-5 text-xs text-white/90 font-semibold drop-shadow">
              <span className="flex items-center gap-1.5">{language === "ta" ? "✓ இலவச வளாகப் பார்வை" : "✓ Free School Visit"}</span>
              <span className="flex items-center gap-1.5">{language === "ta" ? "✓ கல்வி இயக்குநருடன் நேரடி சந்திப்பு" : "✓ Meet Principal Directly"}</span>
              <span className="flex items-center gap-1.5">{language === "ta" ? "✓ Pre-KG முதல் 12-ஆம் வகுப்பு வரை" : "✓ Pre-KG to 12th Std"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
