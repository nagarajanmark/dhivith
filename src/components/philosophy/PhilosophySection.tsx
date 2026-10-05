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
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
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
      image: "https://images.unsplash.com/photo-1596464716127-f2a829822391?auto=format&fit=crop&w=900&q=80",
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
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80",
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
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
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
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
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
      className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100"
    >
      {/* Background Subtle Shapes */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-gray-100 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText="Our Educational Philosophy"
          badgeVariant="blue"
          title="Every Child Is Unique. Every Journey Matters."
          subtitle="At Dhivith Edu Care, education is not something given by a teacher; it is a natural, joyous process spontaneously carried out by the human individual."
          align="center"
          className="mb-16"
        />

        {/* Interactive Tab Navigation */}
        <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
          {pillars.map((pillar, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-[#121D28] text-white shadow-lg scale-[1.03]"
                    : "bg-gray-100 text-[#2A343D] hover:bg-[#EBF3FF] hover:text-[#0750B8] border border-gray-200/70"
                }`}
              >
                <span className="p-1 rounded-lg bg-white/10">{pillar.icon}</span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Layout: Content + Large Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-gray-50/70 rounded-3xl p-6 sm:p-10 lg:p-14 border border-gray-200/80 shadow-sm">
          {/* Left Column: Deep Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white shadow-sm border border-[#0750B8]/10 text-[#0750B8]">
              <Sparkles className="w-3.5 h-3.5 text-[#F36B12]" />
              Pillar {activeTab + 1} of {pillars.length}
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#121D28] leading-tight">
              {activePillar.title}
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-[#2A343D] font-medium leading-relaxed italic border-l-4 border-[#0750B8] pl-4">
              &ldquo;{activePillar.shortDesc}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#5E6D7A] leading-relaxed">
              {activePillar.detailedText}
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#121D28]">
                How your child flourishes:
              </h4>
              {activePillar.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2A343D]">
                  <CheckCircle2 className="w-4 h-4 text-[#159447] flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Dr. Montessori Quote Block */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#0750B8]/15 shadow-sm relative">
              <Quote className="w-8 h-8 text-[#F5B900]/40 absolute top-3 right-3" />
              <p className="text-xs sm:text-sm italic text-[#121D28] relative z-10 leading-relaxed font-serif">
                &ldquo;{activePillar.quote}&rdquo;
              </p>
              <div className="mt-2 text-[11px] font-bold text-[#0750B8] uppercase tracking-wider">
                — Dr. Maria Montessori (Physician & Educator)
              </div>
            </div>
          </div>

          {/* Right Column: Large Frame Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-[#121D28]">
              <Image
                src={activePillar.image}
                alt={activePillar.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Ambient Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#121D28]/85 backdrop-blur-md text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-amber-300">
                    Prepared Learning Environment
                  </div>
                  <div className="text-[11px] text-white/80">
                    Self-Correcting Tactile Materials
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
