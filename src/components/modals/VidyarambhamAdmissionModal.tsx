"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Calendar,
  MapPin,
  Phone,
  Sparkles,
  CheckCircle2,
  Send,
  BellRing,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";

// Expiration date: Active until October 21, 2026 23:59:59 IST
const EXPIRATION_DATE = new Date("2026-10-21T23:59:59+05:30");

export const VidyarambhamAdmissionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const isTa = language === "ta";

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.5 },
        colors: ["#F5B900", "#F36B12", "#0750B8", "#159447", "#800020"],
      });
    } catch {
      // ignore
    }
  };

  // Initial load auto-open
  useEffect(() => {
    const now = new Date();
    if (now > EXPIRATION_DATE) return;

    const initialTimer = setTimeout(() => {
      setIsOpen(true);
      triggerCelebration();
    }, 800);

    return () => clearTimeout(initialTimer);
  }, []);

  // 30 seconds once recurring trigger when modal is closed
  useEffect(() => {
    const now = new Date();
    if (now > EXPIRATION_DATE) return;

    if (!isOpen) {
      const recurringTimer = setTimeout(() => {
        setIsOpen(true);
        triggerCelebration();
      }, 30000); // 30 seconds

      return () => clearTimeout(recurringTimer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      isTa
        ? "வணக்கம் திருமதி. S. தாரணி! விஜயதசமி வித்யாரம்பம் 2026 (20-10-2026) சேர்க்கை மற்றும் சிறப்பு விழாவில் கலந்துகொள்ள முன்பதிவு செய்ய விரும்புகிறேன்."
        : "Hello Dhivith Edu Care! I would like to register for the Vijayadashami Vidyarambham 2026 Ceremony on 20-10-2026 and admissions for my child."
    );
    window.open(`https://wa.me/917448981592?text=${text}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="vidyarambham-title"
      /* z-[100] ensures the modal is strictly higher than Navbar (z-50) and always centered */
      className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto"
    >
      {/* Blurred Royal Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#070E18]/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      />

      {/* Ultra-Premium Centered Modal Card with strictly constrained height */}
      <div className="relative w-full max-w-4xl max-h-[86vh] sm:max-h-[88vh] bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_25px_90px_rgba(0,0,0,0.55)] border-2 border-amber-300/90 overflow-hidden z-10 my-auto flex flex-col md:flex-row animate-scaleUp">
        {/* Floating Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Announcement"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/95 hover:text-white transition-all backdrop-blur-md focus:outline-none cursor-pointer z-30 shadow-lg group hover:scale-110 active:scale-95"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Left Side: Authentic Festive Photo (Compact height on mobile, full height on desktop) */}
        <div className="relative w-full md:w-[42%] h-[150px] sm:h-[190px] md:h-auto shrink-0 bg-[#800020] overflow-hidden flex flex-col justify-between p-4 sm:p-6 text-white">
          {/* Background Festive Photo with Rich Blend */}
          <Image
            src="/school_images/joyful-circle-time-celebration-preschool-pollachi.webp"
            alt="Vijayadashami Vidyarambham Celebration and Admission Ceremony at Dhivith Edu Care"
            fill
            priority
            className="object-cover object-center filter saturate-[1.15] contrast-[1.05]"
            sizes="(max-width: 768px) 100vw, 400px"
          />

          {/* Luxurious Golden Maroon Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A0012] via-[#800020]/40 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,185,0,0.35),transparent_70%)] pointer-events-none" />

          {/* Top Brand Logo Pill */}
          <div className="relative z-10 flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white/95 backdrop-blur-md shadow-md max-w-max border border-white/40">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-white p-0.5 shadow-xs">
              <Image
                src="/logo.png"
                alt="Dhivith Edu Care Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-[10px] sm:text-[11px] font-black text-[#800020] leading-none uppercase tracking-wide">
                Dhivith Edu Care
              </div>
              <div className="text-[8px] sm:text-[9px] font-bold text-[#0750B8] leading-none mt-0.5">
                Montessori Pre-School & Tuitions
              </div>
            </div>
          </div>

          {/* Bottom Floating Visual Card on Image (Hidden on very small mobile to save space, visible on tablet/desktop) */}
          <div className="relative z-10 hidden sm:block pt-4">
            <div className="p-3 sm:p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 shadow-xl space-y-1 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-400 text-[#800020] text-[10px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3 fill-current" />
                <span>20-10-2026 • 12:00 PM</span>
              </div>
              <h4 className="font-display font-black text-xs sm:text-sm text-white leading-snug drop-shadow">
                {isTa ? "வித்யாரம்பம் புனித தொடக்கம்" : "Vidyarambham Sacred Start"}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-amber-100/90 leading-tight">
                {isTa
                  ? "அனைத்துக் குழந்தைகளும் பெற்றோர்களும் வருகை தந்து சிறப்பிக்க அன்புடன் அழைக்கிறோம்!"
                  : "Open to all! Begin your child's golden educational journey with us."}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Event Details & Action Buttons with Smooth Internal Scrolling */}
        <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between bg-white text-left space-y-3.5 overflow-y-auto no-scrollbar">
          {/* Header Ribbon */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-orange-500/15 border border-amber-300/80 text-[#9A3412] text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                <BellRing className="w-3 h-3 text-amber-600 animate-bounce" />
                <span>{isTa ? "சிறப்பு சேர்க்கை திருவிழா" : "Special Admission Ceremony"}</span>
              </span>
              <span className="text-[11px] font-bold text-gray-400 hidden sm:inline">
                • 2026
              </span>
            </div>

            <h2
              id="vidyarambham-title"
              className="font-display font-black text-lg sm:text-2xl text-[#800020] tracking-tight leading-tight uppercase"
            >
              VIJAYADASHAMI VIDYARAMBHAM 2026
            </h2>

            <p className="text-[11px] sm:text-xs font-extrabold text-[#0750B8] mt-0.5">
              {isTa ? "மாபெரும் கல்வி தொடக்க & சேர்க்கை விழா" : "Grand Admission & Learning Ceremony"}
            </p>

            {/* Auspicious Badge */}
            <div className="mt-2 p-2 px-3 rounded-xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200 text-[#9A3412] text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xs">
              <span className="text-xs">✨</span>
              <span>{isTa ? "கல்வி & ஞானத்தின் மங்களகரமான தொடக்கம்!" : "An Auspicious Start to Knowledge and Learning!"}</span>
              <span className="text-xs">✨</span>
            </div>

            <p className="text-[11px] text-[#5E6D7A] mt-1.5 leading-relaxed">
              {isTa
                ? "இந்த மங்களகரமான நன்னாளில் உங்கள் செல்லக் குழந்தைகளின் கல்விப் பயணத்தை திவித் எடு கேரில் இனிதே தொடங்கிட அன்புடன் அழைக்கிறோம்."
                : "We cordially invite all children to begin their educational journey with us on this auspicious day."}
            </p>
          </div>

          {/* Event Highlights List */}
          <div className="rounded-2xl p-3 sm:p-3.5 bg-gray-50/90 border border-gray-200/80 space-y-2 shadow-xs">
            <div className="text-[11px] font-black uppercase tracking-wider text-[#121D28] flex items-center gap-1.5">
              <span className="text-amber-500">🌟</span>
              <span>{isTa ? "சிறப்பம்சங்கள் (Event Highlights):" : "Event Highlights:"}</span>
            </div>

            <ul className="space-y-1.5 text-[11px] sm:text-xs text-[#334155] font-medium">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#121D28] font-bold">
                    {isTa ? "அனைவருக்கும் அனுமதி!" : "Open to All!"}
                  </strong>{" "}
                  {isTa ? "(அனைத்து பெற்றோர்களும் வரவேற்கப்படுகிறார்கள்)" : "(Everyone is Welcome)"}
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#121D28] font-bold">
                    {isTa ? "பாரம்பரிய வித்யாரம்ப சடங்கு:" : "Traditional Vidyarambham:"}
                  </strong>{" "}
                  {isTa ? "அரிசி மற்றும் நெல்லில் முதல் எழுத்து எழுதும் புனித தொடக்கம்." : "Traditional Vijayadashami Vidyarambham Ceremony."}
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0750B8] font-bold">
                    {isTa ? "மழலையர் & டே கேர் சேர்க்கை:" : "Preschool & Day Care:"}
                  </strong>{" "}
                  {isTa ? "ப்ளே குரூப், ப்ரீ-கேஜி, எல்கேஜி, யூகேஜி சேர்க்கை." : "Admissions Open for Preschool & Day Care."}
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F36B12] font-bold">
                    {isTa ? "டியூஷன் & கலை வகுப்புகள் துவக்கம்:" : "Tuitions & Extra-Curricular:"}
                  </strong>{" "}
                  {isTa ? "அனைத்து பாட டியூஷன் & சிறப்பு வகுப்புகள் துவக்கம்." : "Special Inauguration for Tuition & Extra-Curricular Classes."}
                </span>
              </li>
            </ul>
          </div>

          {/* Date, Time & Venue Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#EBF3FF] border border-[#0750B8]/15 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white text-[#0750B8] flex items-center justify-center shrink-0 shadow-xs">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold text-gray-500">
                  {isTa ? "நாள் & நேரம்" : "Date & Time"}
                </div>
                <div className="font-extrabold text-[#121D28] text-xs">
                  20-10-2026
                </div>
                <div className="text-[10px] font-bold text-[#0750B8]">
                  {isTa ? "நண்பகல் 12:00 மணி முதல்" : "12:00 PM Onwards"}
                </div>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-2xl bg-[#EAF8EF] border border-[#159447]/15 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white text-[#159447] flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold text-gray-500">
                  {isTa ? "நடைபெறும் இடம்" : "Venue"}
                </div>
                <div className="font-bold text-[#121D28] text-[10px] leading-snug">
                  SK Garden, Sokkanur Road, Vadapudur, Kinathukadavu.
                </div>
              </div>
            </div>
          </div>

          {/* Touch Action CTA Buttons */}
          <div className="space-y-1.5 pt-0.5">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {/* WhatsApp Register Button */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:flex-1 py-3 px-4 rounded-2xl bg-[#159447] hover:bg-[#117a3a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isTa ? "வாட்ஸ்அப்பில் பதிவு செய்" : "Register via WhatsApp"}</span>
              </button>

              {/* Direct Call Button */}
              <a
                href="tel:7448981592"
                className="w-full sm:w-auto py-3 px-4 rounded-2xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call: 744 898 1592</span>
              </a>
            </div>

            <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 px-1">
              <span>⏱️ {isTa ? "30 வினாடிகளுக்கு ஒருமுறை" : "Re-notifies every 30s"}</span>
              <button
                type="button"
                onClick={handleClose}
                className="text-gray-500 hover:text-[#0750B8] font-bold cursor-pointer underline"
              >
                {isTa ? "இப்போது மூடுக (Close)" : "Close"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
