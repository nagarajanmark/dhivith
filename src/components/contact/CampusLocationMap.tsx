"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export const CampusLocationMap: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Dhivith Edu Care, S.K.Garden, Site Nos. 16,17, Vadapudur, Kinathukadavu, Coimbatore - 641032"
  )}`;

  const embedMapUrl = `https://maps.google.com/maps?q=Vadapudur%2C%20Kinathukadavu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641032&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header in Dhivith Brand Theme */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] text-[#0750B8] text-xs font-bold uppercase tracking-wider border border-[#0750B8]/20 mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0750B8]" />
              <span>Location & Directions</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#121D28] tracking-tight uppercase">
              VISIT OUR CAMPUS & HEADQUARTERS
            </h2>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0750B8] via-[#0962dc] to-[#159447] hover:brightness-110 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#0750B8]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all self-start md:self-auto cursor-pointer"
          >
            <MapPin className="w-4 h-4 fill-white" />
            <span>GET DIRECTIONS ON GOOGLE MAPS</span>
            <span className="text-base font-normal leading-none">↗</span>
          </a>
        </div>

        {/* Interactive Map Container */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#0750B8]/15 shadow-2xl bg-gray-100 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[420px]">
          {/* Google Maps Iframe */}
          <iframe
            title="Dhivith Edu Care Campus Location Map"
            src={embedMapUrl}
            className="w-full h-full border-0 filter contrast-[1.02] saturate-[1.1]"
            loading="lazy"
            allowFullScreen
          />

          {/* Floating Location Details Card in Dhivith Brand Theme */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto z-20 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#0750B8]/15 max-w-lg">
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#159447] animate-pulse flex-shrink-0" />
                <h3 className="font-display font-black text-sm sm:text-base text-[#121D28] uppercase tracking-wide">
                  DHIVITH EDU CARE
                </h3>
              </div>

              <span className="px-3 py-1 rounded-md bg-[#EAF8EF] text-[#159447] text-[11px] font-bold uppercase tracking-wider flex-shrink-0 border border-[#159447]/20">
                COIMBATORE, TN
              </span>
            </div>

            <p className="text-xs text-[#5E6D7A] mt-3 leading-relaxed">
              {SCHOOL_INFO.address}, {SCHOOL_INFO.city} (PIN: 641032)
            </p>

            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
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
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                <span className="text-sm font-semibold">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
