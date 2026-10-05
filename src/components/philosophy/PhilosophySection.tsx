"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  Sparkles,
  Heart,
  Target,
  Users2,
  Quote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

interface PhilosophyPillar {
  id: string;
  title: string;
  shortDesc: string;
  detailedText: string;
  quote: string;
  icon: React.ReactNode;
  color: string;
  bgLight: string;
  image: string;
  benefits: string[];
}

export const PhilosophySection: React.FC = () => {
  const pillars: PhilosophyPillar[] = [
    {
      id: "child-centered",
      title: "Child-Centered Learning",
      shortDesc: "The child is both the builder and the architect of their own intellect.",
      detailedText:
        "Rather than passive instruction where an adult dictates uniform tasks, the Montessori prepared environment is calibrated to each child's spontaneous curiosity. Children choose their materials, engage in deep self-selected work cycles, and discover the pure intrinsic joy of problem-solving.",
      quote: "The greatest sign of success for a teacher is to be able to say, 'The children are now working as if I did not exist.'",
      icon: <Compass className="w-6 h-6 text-[#0750B8]" />,
      color: "#0750B8",
      bgLight: "bg-[#EBF3FF]",
      image: "/school_images/1000453992.webp",
      benefits: [
        "Internalized self-motivation rather than external rewards",
        "Deep 3-hour focus and concentration stamina",
        "Freedom to explore interests without artificial rush",
      ],
    },
    {
      id: "independence",
      title: "Independence & Self-Reliance",
      shortDesc: "Never help a child with a task at which they feel they can succeed.",
      detailedText:
        "From buttoning their coats to pouring their own water and returning materials to low cedar shelves, children cultivate muscular memory, self-care mastery, and profound confidence in their own capabilities.",
      quote: "Help me to do it by myself.",
      icon: <Target className="w-6 h-6 text-[#159447]" />,
      color: "#159447",
      bgLight: "bg-[#EAF8EF]",
      image: "/school_images/1000450316.webp",
      benefits: [
        "Executive function and decision-making poise",
        "Physical coordination and spatial refinement",
        "Joyful pride in everyday life accomplishments",
      ],
    },
    {
      id: "hands-on",
      title: "Hands-On Tactile Exploration",
      shortDesc: "The human hand is the direct instrument of human intelligence.",
      detailedText:
        "Children do not learn abstract symbols by staring at screens or chalkboards. They touch three-dimensional wooden cylinders, count golden glass beads, trace textured sandpaper letters, and physically feel mathematical relationships before writing.",
      quote: "What the hand does, the mind remembers.",
      icon: <Sparkles className="w-6 h-6 text-[#F36B12]" />,
      color: "#F36B12",
      bgLight: "bg-[#FFF2E8]",
      image: "/school_images/1000449608.webp",
      benefits: [
        "Multi-sensory neurological pathways formation",
        "Concrete foundational grasp of math and phonetics",
        "Self-correcting feedback without adult criticism",
      ],
    },
    {
      id: "individual-pace",
      title: "Individual Rhythm & Pace",
      shortDesc: "Respecting the natural sensitive periods of child development.",
      detailedText:
        "Every child develops on their own unique biological timetable. At Dhivith Edu Care, there are no arbitrary deadlines or competitive rankings. Fast bloomers move ahead into multi-digit math, while deliberate thinkers are given all the patient time they need to master foundational concepts.",
      quote: "Development is a series of rebirths, each bringing a new human being into existence.",
      icon: <Heart className="w-6 h-6 text-[#F5B900]" />,
      color: "#F5B900",
      bgLight: "bg-[#FFF9E5]",
      image: "/school_images/1000452018.webp",
      benefits: [
        "Zero stress or performance anxiety",
        "Mastery-oriented learning rather than rote memorization",
        "Preservation of innate lifelong curiosity",
      ],
    },
    {
      id: "social-emotional",
      title: "Social Poise & Grace",
      shortDesc: "Multi-age harmony fostering empathy, collaboration, and peace.",
      detailedText:
        "Our mixed-age classrooms recreate a supportive family ecosystem. Older children take great joy in mentoring younger peers, while younger children observe and absorb higher-order skills effortlessly in an atmosphere of mutual courtesy.",
      quote: "Establishing lasting peace is the work of education.",
      icon: <Users2 className="w-6 h-6 text-[#0750B8]" />,
      color: "#0750B8",
      bgLight: "bg-[#EBF3FF]",
      image: "/school_images/1000452097.webp",
      benefits: [
        "Peer mentorship and genuine collaborative empathy",
        "Conflict resolution and conflict mediation tools",
        "Deep emotional security and community belonging",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activePillar = pillars[activeTab];

  return (
    <section
      id="philosophy"
      className="py-20 lg:py-28 bg-[#FAFAFA] relative overflow-hidden border-t border-gray-100"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0750B8]/5 via-[#159447]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0750B8] text-xs font-bold uppercase tracking-wider border border-gray-200/90 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Educational Philosophy</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Every Child Is Unique. Every Journey Matters.
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal max-w-2xl mx-auto">
            At Dhivith Edu Care, education is not something dictated by an adult; it is a joyous, spontaneous journey carried out by the child.
          </p>
        </div>

        {/* Interactive Tab Navigation - Clean Wrapped Grid/Flex */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {pillars.map((pillar, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? "bg-[#0750B8] text-white border-[#0750B8] shadow-lg scale-105"
                    : "bg-white text-gray-700 border-gray-200/80 hover:border-[#0750B8]/40 hover:bg-gray-50 shadow-xs"
                }`}
              >
                <span
                  className={`p-1 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-gray-100"
                  }`}
                >
                  {pillar.icon}
                </span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Layout: Content + Large Photography Frame */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-7 sm:p-12 lg:p-14 border border-gray-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Dr. Montessori Quote */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EBF3FF] text-[#0750B8] shadow-xs border border-[#0750B8]/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Pillar {activeTab + 1} of {pillars.length}</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] leading-tight">
              {activePillar.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed italic border-l-4 border-[#0750B8] pl-4 py-0.5">
              &ldquo;{activePillar.shortDesc}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              {activePillar.detailedText}
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-2.5 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Key Development Outcomes:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activePillar.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-gray-50/90 border border-gray-100 text-xs sm:text-[13px] font-medium text-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#159447] flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dr. Montessori Quote Block */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#EBF3FF]/60 to-[#EAF8EF]/60 border border-gray-200/80 relative overflow-hidden">
              <Quote className="w-10 h-10 text-amber-400/25 absolute top-2 right-3 pointer-events-none" />
              <p className="text-xs sm:text-sm italic text-[#0F172A] relative z-10 leading-relaxed font-serif">
                &ldquo;{activePillar.quote}&rdquo;
              </p>
              <div className="mt-2 text-[11px] font-bold text-[#0750B8] uppercase tracking-wider">
                — Dr. Maria Montessori (Physician & Pioneer)
              </div>
            </div>
          </div>

          {/* Right Column: Large Frame Photography + Thumbnail Switcher */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-slate-900 group">
              <Image
                src={activePillar.image}
                alt={activePillar.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent opacity-80" />

              {/* Ambient Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md text-white flex items-center justify-between border border-white/20 shadow-lg">
                <div>
                  <div className="text-xs font-bold text-amber-300">
                    Prepared Learning Environment
                  </div>
                  <div className="text-[11px] text-white/80">
                    Authentic Tactile Apparatus
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Direct Thumbnail Switcher */}
            <div className="flex items-center gap-2.5 pt-1">
              {pillars.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeTab === idx
                      ? "border-[#0750B8] scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
