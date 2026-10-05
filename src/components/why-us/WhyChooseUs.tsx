"use client";
import React from "react";
import {
  ShieldCheck,
  Award,
  Heart,
  Users,
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  Compass,
  Smile,
  BookOpen,
  Leaf,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Users className="w-6 h-6 text-[#0750B8]" />,
      title: "Intimate 1:6 Educator Ratio",
      description:
        "Every child receives deep observational attention from certified Montessori educators who tailor individualized lesson plans.",
      color: "#0750B8",
      bgLight: "bg-[#EBF3FF]",
    },
    {
      icon: <Award className="w-6 h-6 text-[#159447]" />,
      title: "Authentic Montessori Materials",
      description:
        "No imitation plastic toys. We provide complete AMI-standard sensorial apparatus, golden bead math, and tactile language materials.",
      color: "#159447",
      bgLight: "bg-[#EAF8EF]",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F36B12]" />,
      title: "Biometric Safety & Pure Living",
      description:
        "Child-proofed architectural design, 24/7 CCTV in common areas, HEPA air purification, and staff trained in pediatric first aid.",
      color: "#F36B12",
      bgLight: "bg-[#FFF2E8]",
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#159447]" />,
      title: "Nature-Connected Campus",
      description:
        "Daily outdoor garden time, sensory herb beds, open terrace exploration, and real plant care embedded into the curriculum.",
      color: "#159447",
      bgLight: "bg-[#EAF8EF]",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#F5B900]" />,
      title: "3-Hour Deep Work Cycles",
      description:
        "Children build remarkable attention spans, uninterrupted by ringing bells or fragmented adult transitions.",
      color: "#F5B900",
      bgLight: "bg-[#FFF9E5]",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#0750B8]" />,
      title: "Parent Partnership & Transparency",
      description:
        "Regular developmental observations, private parent-educator dialogue, and intimate parenting workshops.",
      color: "#0750B8",
      bgLight: "bg-[#EBF3FF]",
    },
  ];

  const comparisonData = [
    {
      feature: "Classroom Dynamic",
      montessori: "Child-directed work with specialized tactile materials at individual pace",
      traditional: "Teacher-led lecture to entire class simultaneously on fixed schedule",
    },
    {
      feature: "Motivation & Discipline",
      montessori: "Intrinsic joy of mastery, self-regulation, and natural problem-solving",
      traditional: "External rewards, gold stars, comparison, and punishment",
    },
    {
      feature: "Age Grouping",
      montessori: "Multi-age communities (1.5-3, 3-6 yrs) fostering peer mentorship",
      traditional: "Strict single-age cohorts with uniform developmental expectations",
    },
    {
      feature: "Math & Language Grasp",
      montessori: "Concrete 3D golden beads & sandpaper tracing before abstract paper symbols",
      traditional: "Abstract memorization from flashcards and repetitive worksheets",
    },
    {
      feature: "Environment & Materials",
      montessori: "Child-height natural Scandinavian wood shelves; zero screen time",
      traditional: "High plastic furniture, plastic battery toys, and video screens",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText="The Dhivith Distinction"
          badgeVariant="blue"
          title="Why Parents Choose Dhivith Edu Care"
          subtitle="We combine the proven brilliance of Montessori pedagogical science with a safe, luxurious, and deeply nurturing early childhood community."
          align="center"
          className="mb-16"
        />

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0750B8]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgLight} flex items-center justify-center mb-5 shadow-inner`}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-[#121D28] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#159447]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Standard at Dhivith</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0750B8]/10 shadow-xl overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121D28]">
              Dhivith Montessori vs. Conventional Daycare
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6D7A] mt-2">
              See the fundamental distinction that creates joyful, self-reliant thinkers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 px-4 font-display font-bold text-sm text-[#121D28] w-1/4">
                    Pedagogical Dimension
                  </th>
                  <th className="py-4 px-4 font-display font-bold text-sm text-[#0750B8] bg-[#EBF3FF] rounded-t-2xl w-2/5">
                    DHIVITH EDU CARE (Montessori)
                  </th>
                  <th className="py-4 px-4 font-display font-bold text-sm text-gray-500 w-1/3">
                    Traditional Daycare / Nursery
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#121D28]">{row.feature}</td>
                    <td className="py-4 px-4 bg-[#EBF3FF]/40 text-[#121D28] font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#159447] flex-shrink-0 mt-0.5" />
                        <span>{row.montessori}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#5E6D7A]">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
