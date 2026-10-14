"use client";

import React from "react";
import { MapPin, Phone, Navigation } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

export const CampusLocationMap: React.FC = () => {
  const { t, language } = useLanguage();
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Dhivith Edu Care, S.K.Garden, Site Nos. 16,17, Vadapudur, Kinathukadavu, Coimbatore - 641032"
  )}`;

  const embedMapUrl = `https://maps.google.com/maps?q=Vadapudur%2C%20Kinathukadavu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641032&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header in Dhivith Brand Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] text-[#0750B8] text-xs font-bold uppercase tracking-wider border border-[#0750B8]/20 mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0750B8]" />
              <span>{t.campusMap.badge}</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#121D28] tracking-tight uppercase">
              {t.campusMap.title}
            </h2>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0750B8] via-[#0962dc] to-[#159447] hover:brightness-110 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#0750B8]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all self-start md:self-auto cursor-pointer"
          >
            <MapPin className="w-4 h-4 fill-white" />
            <span>{t.campusMap.getDirections}</span>
            <span className="text-base font-normal leading-none">↗</span>
          </a>
        </div>

        {/* Interactive Map Wrapper Card */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#0750B8]/15 shadow-xl sm:shadow-2xl bg-white">
          {/* Map Viewport Area */}
          <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[520px] bg-gray-100">
            <iframe
              title="Dhivith Edu Care Campus Location Map"
              src={embedMapUrl}
              className="w-full h-full border-0 filter contrast-[1.02] saturate-[1.1]"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Location Details Card in Dhivith Brand Theme - TABLET & DESKTOP ONLY */}
            <div className="hidden sm:block absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#0750B8]/15 max-w-md">
              <div className="flex items-start justify-between gap-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#159447] animate-pulse flex-shrink-0" />
                  <h3 className="font-display font-black text-base text-[#121D28] uppercase tracking-wide">
                    {language === "ta" ? "திவித் எடு கேர்" : "DHIVITH EDU CARE"}
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-md bg-[#EAF8EF] text-[#159447] text-[11px] font-bold uppercase tracking-wider flex-shrink-0 border border-[#159447]/20">
                  {t.campusMap.locationCity}
                </span>
              </div>

              <p className="text-xs text-[#5E6D7A] mt-3 leading-relaxed">
                {language === "ta"
                  ? "வ.எண். 382/35, 382/36, S.K.கார்டன், வடபுதூர், கிணத்துக்கடவு, கோயம்புத்தூர் - 641032"
                  : `${SCHOOL_INFO.address}, ${SCHOOL_INFO.city} (PIN: 641032)`}
              </p>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-3 text-xs">
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="font-bold text-[#121D28] hover:text-[#0750B8] flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0750B8]" />
                  <span>+91 {SCHOOL_INFO.phone}</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0750B8] hover:text-[#159447] uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  <span>{t.campusMap.getDirections}</span>
                  <span className="text-sm font-semibold">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location Details Card - MOBILE ONLY (< sm) - Stacked cleanly below the map so map is 100% visible */}
          <div className="block sm:hidden p-4 sm:p-5 bg-white border-t border-gray-100">
            <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#159447] animate-pulse flex-shrink-0" />
                <h3 className="font-display font-black text-sm text-[#121D28] uppercase tracking-wide">
                  {language === "ta" ? "திவித் எடு கேர்" : "DHIVITH EDU CARE"}
                </h3>
              </div>

              <span className="px-2.5 py-0.5 rounded-md bg-[#EAF8EF] text-[#159447] text-[10px] font-bold uppercase tracking-wider border border-[#159447]/20">
                {t.campusMap.locationCity}
              </span>
            </div>

            <p className="text-[11px] text-[#5E6D7A] mt-2.5 leading-relaxed">
              {language === "ta"
                ? "வ.எண். 382/35, 382/36, S.K.கார்டன், வடபுதூர், கிணத்துக்கடவு, கோயம்புத்தூர் - 641032"
                : `${SCHOOL_INFO.address}, ${SCHOOL_INFO.city} (PIN: 641032)`}
            </p>

            {/* Quick Action Touch Buttons on Mobile */}
            <div className="grid grid-cols-2 gap-2.5 mt-3.5 pt-3 border-t border-gray-100 text-xs font-bold">
              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="py-2.5 px-3 rounded-xl bg-[#EBF3FF] text-[#0750B8] border border-[#0750B8]/20 flex items-center justify-center gap-1.5 transition-colors active:scale-98"
              >
                <Phone className="w-3.5 h-3.5 text-[#0750B8]" />
                <span>{SCHOOL_INFO.phone}</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-[#EAF8EF] text-[#159447] border border-[#159447]/20 flex items-center justify-center gap-1.5 transition-colors active:scale-98"
              >
                <Navigation className="w-3.5 h-3.5 text-[#159447]" />
                <span>{t.campusMap.getDirections}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Regional Highway Connectivity & Distance Pills */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-4">
            <h3 className="font-display font-extrabold text-sm sm:text-base text-[#121D28] uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0750B8]" />
              <span>{language === "ta" ? "அருகிலுள்ள நகரங்களுக்கான பயண நேரம் & தூரம்" : "Commute Distance & Nearby Connectivity"}</span>
            </h3>
            <span className="text-xs text-gray-500 font-medium">
              {language === "ta" ? "NH 83 தேசிய நெடுஞ்சாலை நேரடி வழி" : "Direct access via Pollachi-Coimbatore NH 83 Highway"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: "Kinathukadavu", nameTa: "கிணத்துக்கடவு", dist: "0 km (Campus)", time: "2 mins", color: "border-[#0750B8]/30 bg-[#EBF3FF]/70" },
              { name: "Pollachi", nameTa: "பொள்ளாச்சி", dist: "~18 km", time: "15-18 mins", color: "border-[#F36B12]/30 bg-[#FFF2E8]/70" },
              { name: "Coimbatore", nameTa: "கோயம்புத்தூர்", dist: "~16 km", time: "18-20 mins", color: "border-[#159447]/30 bg-[#EAF8EF]/70" },
              { name: "Palladam", nameTa: "பல்லடம்", dist: "~28 km", time: "25-30 mins", color: "border-purple-300 bg-purple-50/70" },
              { name: "Tirupur", nameTa: "திருப்பூர்", dist: "~45 km", time: "40-45 mins", color: "border-sky-300 bg-sky-50/70", extraClass: "col-span-2 sm:col-span-1" },
            ].map((item) => (
              <div
                key={item.name}
                className={`p-3.5 rounded-2xl border ${item.color} shadow-xs flex flex-col justify-between ${item.extraClass || ""}`}
              >
                <div className="font-extrabold text-xs text-[#121D28]">
                  {language === "ta" ? item.nameTa : item.name}
                </div>
                <div className="text-[11px] font-semibold text-gray-600 mt-1 flex items-center justify-between">
                  <span>{item.dist}</span>
                  <span className="font-bold text-[#0750B8]">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
