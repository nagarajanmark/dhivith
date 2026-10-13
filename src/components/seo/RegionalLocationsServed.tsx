"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Navigation, Compass, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SCHOOL_INFO } from "@/data/schoolData";

interface LocationTarget {
  name: string;
  nameTa: string;
  role: string;
  roleTa: string;
  badgeColor: string;
  distance: string;
  distanceTa: string;
  neighborhoods: string[];
  programs: string[];
  programsTa: string[];
  description: string;
  descriptionTa: string;
}

export const RegionalLocationsServed: React.FC<{ onOpenTourModal?: () => void }> = ({ onOpenTourModal }) => {
  const { language } = useLanguage();
  const isTamil = language === "ta";

  const locations: LocationTarget[] = [
    {
      name: "Kinathukadavu",
      nameTa: "கிணத்துக்கடவு",
      role: "Main Campus & Learning Haven",
      roleTa: "முதன்மை பள்ளி வளாகம் & கற்றல் மையம்",
      badgeColor: "bg-[#0750B8] text-white",
      distance: "0 km • Vadapudur, S.K. Garden",
      distanceTa: "0 கி.மீ • வடபுதூர், S.K. கார்டன்",
      neighborhoods: ["Vadapudur", "S.K. Garden", "Kinathukadavu Bus Stand", "RS Road", "Kovilpalayam"],
      programs: [
        "Day Care (1.5 - 6 Yrs)",
        "Play Group & Pre-KG",
        "LKG & UKG Montessori",
        "School Tuitions (1 - 12)",
        "Engineering Maths (M1-M4)",
      ],
      programsTa: [
        "டே கேர் (பகல் நேர பராமரிப்பு)",
        "ப்ளே குரூப் & பிரீ-கேஜி",
        "எல்.கே.ஜி & யுகேஜி மாண்டிசோரி",
        "பள்ளி டியூஷன் (1 - 12)",
        "பொறியியல் கணிதம் (M1-M4)",
      ],
      description:
        "Home to our state-of-the-art Montessori campus with sunlit classrooms, CCTV security, child-safe turf, and early morning/evening tuition batches.",
      descriptionTa:
        "இயற்கை எழில் சூழ்ந்த அமைதியான வளாகம், சிசிடிவி பாதுகாப்பு, தூய்மையான விளையாட்டுப் புல்வெளி மற்றும் காலை, மாலை நேர டியூஷன் வகுப்புகள்.",
    },
    {
      name: "Coimbatore",
      nameTa: "கோயம்புத்தூர்",
      role: "South Coimbatore Educational Hub",
      roleTa: "தெற்கு கோவை கல்வி மையம்",
      badgeColor: "bg-[#159447] text-white",
      distance: "15-20 mins via NH 83 Highway",
      distanceTa: "15-20 நிமிடங்கள் (NH 83 தேசிய நெடுஞ்சாலை)",
      neighborhoods: ["Eachanari", "Malumichampatti", "Othakkalmandapam", "Sundarapuram", "Pollachi Main Rd"],
      programs: [
        "Montessori Early Foundation",
        "Safe Day Care Facility",
        "CBSE / ICSE Board Tuitions",
        "Collegiate Engineering Maths",
      ],
      programsTa: [
        "மாண்டிசோரி ஆரம்பக் கல்வி",
        "பாதுகாப்பான பகல்நேரப் பராமரிப்பு",
        "CBSE / ICSE போர்டு டியூஷன்",
        "கல்லூரி பொறியியல் கணிதப் பயிற்சி",
      ],
      description:
        "Directly connected via the smooth Coimbatore-Pollachi highway, serving parents seeking authentic Montessori education and premier math coaching.",
      descriptionTa:
        "கோவை-பொள்ளாச்சி நெடுஞ்சாலை வழியாக எளிதில் வந்தடையும் வசதி. தரமான மாண்டிசோரி கல்வி மற்றும் கணிதப் பயிற்சிக்கான தேர்வு.",
    },
    {
      name: "Pollachi",
      nameTa: "பொள்ளாச்சி",
      role: "Adjacent Educational Corridor",
      roleTa: "அருகிலுள்ள முதன்மை கல்வி மண்டலம்",
      badgeColor: "bg-[#F36B12] text-white",
      distance: "15-18 mins via NH 83",
      distanceTa: "15-18 நிமிடங்கள் (NH 83 வழித்தடம்)",
      neighborhoods: ["Mahalingapuram", "Pollachi Town", "Achipatti", "Suleeswaranpatti", "Udumalpet Rd Link"],
      programs: [
        "Toddler & Play Group",
        "Pre-KG, LKG, UKG",
        "All Subject Tuitions",
        "Engineering Maths Batches",
      ],
      programsTa: [
        "மழலையர் விளையாட்டு வகுப்பு",
        "பிரீ-கேஜி, எல்.கே.ஜி, யுகேஜி",
        "அனைத்துப் பாட டியூஷன்",
        "பொறியியல் கணித வகுப்புகள்",
      ],
      description:
        "Just a short drive from Pollachi town, providing parents an accredited Montessori early learning sanctuary and dedicated evening coaching.",
      descriptionTa:
        "பொள்ளாச்சி நகரிலிருந்து மிகக் குறைந்த தூரத்தில் அமைந்துள்ள மாண்டிசோரி மழலையர் பள்ளி மற்றும் மாலை நேர சிறப்புப் பயிற்சி மையம்.",
    },
    {
      name: "Palladam",
      nameTa: "பல்லடம்",
      role: "Connected Regional Center",
      roleTa: "இணைக்கப்பட்ட பிராந்திய மையம்",
      badgeColor: "bg-[#8B5CF6] text-white",
      distance: "~28 km via Arterial Roads",
      distanceTa: "~28 கி.மீ முக்கிய சாலை இணைப்பு",
      neighborhoods: ["Chettipalayam Road", "Palladam Junction", "Karanampettai", "Somanur Link"],
      programs: [
        "Day Care Support",
        "Early Montessori Foundation",
        "High School Subject Tuitions",
        "Maths Special Mentorship",
      ],
      programsTa: [
        "பகல்நேரப் பராமரிப்பு ஆதரவு",
        "ஆரம்ப மாண்டிசோரி கல்வி",
        "உயர்நிலைப் பள்ளி டியூஷன்",
        "கணித சிறப்பு வழிகாட்டல்",
      ],
      description:
        "Connecting families and students across the Palladam-Kinathukadavu belt with focused academic attention and certified educators.",
      descriptionTa:
        "பல்லடம் சுற்றுவட்டாரக் குழந்தைகளுக்கு தனித்துவமான கற்றல் வழிகாட்டல் மற்றும் தகுதியான ஆசிரியர்களின் கனிவான கவனிப்பு.",
    },
    {
      name: "Tirupur",
      nameTa: "திருப்பூர்",
      role: "Industrial & Student Gateway",
      roleTa: "தொழில் மற்றும் மாணவர் இணைப்பு மையம்",
      badgeColor: "bg-[#0284C7] text-white",
      distance: "~45 km Direct Transit",
      distanceTa: "~45 கி.மீ நேரடி போக்குவரத்து இணைப்பு",
      neighborhoods: ["Tirupur South", "Kangeyam Road Link", "Veerapandi", "Palladam Highway Corridor"],
      programs: [
        "Higher Secondary Board Tuitions",
        "Engineering Maths (M1, M2, M3)",
        "CBSE Class 10 & 12 Coaching",
        "Early Foundation Enrolment",
      ],
      programsTa: [
        "மேல்நிலைப் பள்ளி பொதுத்தேர்வு டியூஷன்",
        "பொறியியல் கணிதம் (M1, M2, M3)",
        "CBSE 10 & 12-ஆம் வகுப்பு பயிற்சி",
        "ஆரம்பக் கல்வி வழிகாட்டல்",
      ],
      description:
        "Providing rigorous academic mentorship for board exam candidates and engineering students seeking score-boosting math guidance.",
      descriptionTa:
        "பொதுத்தேர்வு எழுதும் மாணவர்கள் மற்றும் பொறியியல் கணிதத்தில் அதிக மதிப்பெண் பெற விரும்பும் மாணவர்களுக்கான தனிப்பயிற்சி.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0750B8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#159447]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with High SEO Semantic Weight */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#0750B8]/20 text-xs font-bold uppercase tracking-wider text-[#0750B8] mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#0750B8]" />
            <span>{isTamil ? "எங்கள் சேவைப் பகுதிகள்" : "Regional Coverage & Target Locations"}</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#121D28] tracking-tight uppercase leading-tight">
            {isTamil ? (
              <>
                கிணத்துக்கடவு, கோயம்புத்தூர், பொள்ளாச்சி, பல்லடம் & திருப்பூர் <br className="hidden sm:inline" />
                <span className="text-[#0750B8]">குடும்பங்களுக்கான முதன்மை கல்வி மையம்</span>
              </>
            ) : (
              <>
                Serving Families Across Kinathukadavu, Coimbatore, <br className="hidden sm:inline" />
                <span className="text-[#0750B8]">Pollachi, Palladam & Tirupur</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-3 leading-relaxed">
            {isTamil
              ? "டிவித் எடு கேர் வடபுதூர், கிணத்துக்கடவில் அமைந்துள்ள தலைசிறந்த மாண்டிசோரி மழலையர் பள்ளி மற்றும் அனைத்துப் பாட டியூஷன் மையம். அருகில் உள்ள அனைத்து நகரங்களுக்கும் சிறந்த போக்குவரத்து இணைப்பு."
              : "DHIVITH EDU CARE is centrally situated in Vadapudur, Kinathukadavu with direct connectivity to major arterial highways. Welcoming children and students across Kinathukadavu, Coimbatore, Pollachi, Palladam, and Tirupur for world-class early education and academic excellence."}
          </p>
        </div>

        {/* 5-Location Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {locations.map((loc, idx) => (
            <div
              key={loc.name}
              className={`group bg-white rounded-3xl border border-gray-200/90 hover:border-[#0750B8]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 relative ${
                idx === 0 ? "lg:col-span-1 ring-2 ring-[#0750B8]/20 bg-gradient-to-b from-blue-50/30 to-white" : ""
              }`}
            >
              {/* Top Accent Strip */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${loc.badgeColor} shadow-xs`}>
                    {isTamil ? loc.nameTa : loc.name}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#159447]" />
                    <span>{isTamil ? loc.distanceTa : loc.distance}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#121D28] group-hover:text-[#0750B8] transition-colors">
                    {isTamil ? loc.roleTa : loc.role}
                  </h3>
                  <p className="text-xs text-[#5E6D7A] leading-relaxed mt-1.5">
                    {isTamil ? loc.descriptionTa : loc.description}
                  </p>
                </div>

                {/* Offerings Tag Chips */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                    {isTamil ? "முக்கிய கல்விச் சேவைகள்:" : "Key Offerings & Batches:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(isTamil ? loc.programsTa : loc.programs).map((prog, pIdx) => (
                      <span
                        key={pIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-[11px] font-medium text-[#121D28]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#159447] flex-shrink-0" />
                        <span>{prog}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Localities */}
                <div className="pt-2 text-[11px] text-[#5E6D7A]">
                  <strong className="text-gray-700 font-semibold">
                    {isTamil ? "அருகிலுள்ள பகுதிகள்: " : "Localities: "}
                  </strong>
                  <span>{loc.neighborhoods.join(" • ")}</span>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between gap-2">
                <Link
                  href="/classes"
                  className="text-xs font-bold text-[#0750B8] hover:text-[#053784] inline-flex items-center gap-1 transition-colors group/link"
                >
                  <span>{isTamil ? "சேர்க்கை விவரங்கள்" : "View Admissions"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-[#159447] text-gray-700 hover:text-white transition-all text-xs font-bold"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call +91 {SCHOOL_INFO.phoneRaw}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
