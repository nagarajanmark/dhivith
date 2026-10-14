"use client";

import React from "react";
import PolaroidLineCarousel, { Slide } from "@/components/ui/polaroid-line-carousel";
import { Camera, Sparkles, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SCHOOL_INFO } from "@/data/schoolData";

export function PolaroidMemoriesSection() {
  const { language } = useLanguage();

  const isTamil = language === "ta";
  const youtubeUrl = SCHOOL_INFO.youtube;

  const slides: Slide[] = [
    {
      image: "/school_images/toddler-sensorial-discovery-wooden-toys-kinathukadavu.webp",
      title: isTamil ? "தொடு உணர்வு விளையாட்டு" : "Sensorial Exploration",
      caption: isTamil
        ? "குழந்தைகளின் நுண் அறிவை வளர்க்கும் இயற்கை மர விளையாட்டுப் பொருட்கள்"
        : "Hands-on tactile discovery and sensory wooden materials.",
      alt: "Sensorial Wooden Materials and Tactile Learning at Dhivith Edu Care Kinathukadavu",
      youtubeUrl,
    },
    {
      image: "/school_images/wooden-alphabet-letter-matching-board-coimbatore.webp",
      title: isTamil ? "மர எழுத்து பலகை பயிற்சி" : "Alphabet Carving Board",
      caption: isTamil
        ? "தொட்டுப் பார்த்து எழுத்துக்களைக் கற்கும் சுயவழிகாட்டல் முறை"
        : "Fine motor grip & phonetic letter matching practice.",
      alt: "Phonetic Alphabet Carving Board at Dhivith Edu Care Kinathukadavu Coimbatore",
      youtubeUrl,
    },
    {
      image: "/school_images/montessori-teacher-guidance-nomenclature-kinathukadavu.webp",
      title: isTamil ? "ஆசிரியர் கனிவான வழிகாட்டல்" : "Guided Mentorship",
      caption: isTamil
        ? "ஒவ்வொரு குழந்தைக்கும் தனித்துவமான அக்கறையுடனான ஆதரவு"
        : "One-on-one certified Montessori educator interaction.",
      alt: "One on one Certified Montessori Mentorship at Dhivith Edu Care",
      youtubeUrl,
    },
    {
      image: "/school_images/3d-animal-picture-cube-puzzle-blocks-palladam.webp",
      title: isTamil ? "3D விலங்கு படக் கட்டை புதிர்" : "3D Animal Cube Puzzles",
      caption: isTamil
        ? "முப்பரிமாண சிந்தனை மற்றும் சிக்கல் தீர்க்கும் திறன்"
        : "Spatial visualization & creative problem-solving blocks.",
      alt: "3D Animal Cube Puzzles and Spatial Reasoning at Dhivith Edu Care",
      youtubeUrl,
    },
    {
      image: "/school_images/creative-crayon-drawing-coloring-art-tirupur.webp",
      title: isTamil ? "வண்ணக் கலை & வரைபடம்" : "Creative Color Studio",
      caption: isTamil
        ? "வண்ண மெழுகுக் குச்சிகள் கொண்டு கற்பனையை விரியச் செய்யும் தருணம்"
        : "Expressive crayon artistry and imaginative drawing sessions.",
      alt: "Creative Coloring Art and Fine Motor Development at Dhivith Edu Care",
      youtubeUrl,
    },
    {
      image: "/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp",
      title: isTamil ? "அன்பான பகல்நேரப் பராமரிப்பு" : "Loving Day Care Sanctuary",
      caption: isTamil
        ? "தாய்மடி போன்ற பாதுகாப்பான சூழல் மற்றும் ஊட்டமளிக்கும் கவனிப்பு"
        : "Cozy rest zones, caring supervision, and joyful play.",
      alt: "Loving Day Care and Toddler Haven in Kinathukadavu near Pollachi and Coimbatore",
      youtubeUrl,
    },
    {
      image: "/school_images/happy-montessori-children-uniform-steps-kinathukadavu.webp",
      title: isTamil ? "சீருடையில் பள்ளி தோழர்கள்" : "Happy Learner Cohort",
      caption: isTamil
        ? "மகிழ்ச்சியான சூழலில் ஒன்றாகக் கூடிப் புன்னகைக்கும் மழலையர் செல்வங்கள்"
        : "Vibrant smiling students gathered together on our joyful campus steps.",
      alt: "Happy Montessori Preschool Children in Uniform at Dhivith Edu Care Kinathukadavu",
      youtubeUrl,
    },
    {
      image: "/school_images/morning-assembly-activity-outdoor-turf-coimbatore.webp",
      title: isTamil ? "காலை உடலியக்கப் பயிற்சி" : "Morning Activity & Assembly",
      caption: isTamil
        ? "பசுமைப் புல்வெளியில் குழந்தைகள் வரிசையாக நின்று காலைப் பயிற்சிகள் செய்தல்"
        : "Energizing morning coordination and peer assembly on safe play turf.",
      alt: "Morning Assembly and Outdoor Turf Activity at Dhivith Edu Care Coimbatore",
      youtubeUrl,
    },
    {
      image: "/school_images/joyful-circle-time-celebration-preschool-pollachi.webp",
      title: isTamil ? "விழாக் கொண்டாட்டம் & வட்டம்" : "Joyful Circle Celebration",
      caption: isTamil
        ? "பண்டிகை ஆடை அணிந்து வண்ண நாற்காலிகளில் விழாக் கொண்டாடும் குழந்தைகள்"
        : "Children in festive attire celebrating togetherness in an outdoor circle.",
      alt: "Festival Celebration and Circle Time Activity at Dhivith Edu Care Kinathukadavu",
      youtubeUrl,
    },
    {
      image: "/school_images/cheerful-preschool-students-group-lawn-dhivith.webp",
      title: isTamil ? "புல்வெளியில் தோழமை" : "Play Turf Bonding",
      caption: isTamil
        ? "பாதுகாப்பான மென் புல்வெளியில் அமர்ந்து உற்சாகமாகப் பேசிப் பழகும் மாணவர்கள்"
        : "Students sitting happily together on child-safe artificial grass lawn.",
      alt: "Preschool Students Group Bonding on Green Turf at Dhivith Edu Care",
      youtubeUrl,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-amber-900/10 relative overflow-hidden">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F36B12]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0750B8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#F36B12] text-xs font-bold uppercase tracking-wider border border-[#F36B12]/20 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-[#F36B12]" />
              <span>{isTamil ? "மழலையர் நினைவுகள்" : "Moments Pegged in Time"}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>

            {/* Direct Channel Link */}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>{isTamil ? "YouTube சேனல்" : "YouTube Channel"}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#121D28] tracking-tight leading-tight">
            {isTamil ? (
              <>
                திவித் எடு கேர் <span className="text-[#0750B8]">வகுப்பறை வாழ்வின்</span> இனிய தருணங்கள்
              </>
            ) : (
              <>
                Cherished Moments at <span className="text-[#0750B8]">Dhivith Edu Care</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-3 font-normal max-w-2xl mx-auto">
            {isTamil
              ? "புகைப்படங்களை கிளிக் செய்து நேரடியாக YouTube வீடியோக்களைக் காணலாம் அல்லது கயிற்றை இழுத்து உலா வரலாம்."
              : "Click any polaroid print to watch the activity video on YouTube, or drag the string to sway through memories."}
          </p>
        </div>

        {/* The Polaroid Line Carousel Container */}
        <div className="rounded-[32px] overflow-hidden border border-amber-900/15 shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-[#f5f2eb]">
          <PolaroidLineCarousel
            slides={slides}
            height="560px"
            cardWidth={280}
            sag={48}
            swing={1.1}
            autoplay={4000}
            string="#8a7f72"
            background="#efece6"
            ink="#161513"
            defaultYoutubeUrl={youtubeUrl}
            watchButtonLabel={isTamil ? "YouTube-ல் காண்க" : "Watch on YouTube"}
            ariaLabel={isTamil ? "திவித் மழலையர் புகைப்பட தொகுப்பு" : "Dhivith Classroom Polaroid Carousel"}
          />
        </div>

        {/* Helpful interaction prompt under carousel */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500 font-medium">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF0000]" />
          <span>
            {isTamil
              ? "புகைப்படத்தை கிளிக் செய்தால் YouTube-ல் வீடியோ திறக்கும் • கயிற்றை இழுத்து பார்க்கலாம்"
              : "Click any photo to open on YouTube • Drag the string to swing prints • Use arrows to browse"}
          </span>
        </div>
      </div>
    </section>
  );
}
