"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { PROGRAMS, COMPREHENSIVE_SERVICES, SCHOOL_INFO } from "@/data/schoolData";
import {
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Calculator,
  Baby,
  GraduationCap,
  Star,
  Check,
} from "lucide-react";

export default function ClassesPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "preschool" | "tuition">("all");
  const [selectedProgram, setSelectedProgram] = useState<string>("pre-kg");

  const handleOpenTour = (progId?: string) => {
    setSelectedProgram(progId || "pre-kg");
    setIsTourModalOpen(true);
  };

  const tuitionOfferings = [
    {
      id: "primary-tuition",
      title: "Primary Academic Coaching (LKG – Grade 5)",
      grades: "LKG to 5th Std",
      syllabus: "CBSE • ICSE • State Board • Matriculation",
      tagline: "Solid foundations in phonics, English grammar, reading fluency, and mental arithmetic.",
      features: [
        "Phonics & English handwriting improvement",
        "Daily concept worksheets & math drills",
        "Small batch size with individual attention",
        "Daily homework support & doubt clearing",
      ],
      timing: "Evening Batches: 4:30 PM – 6:30 PM",
      ratio: "Max 8 Students / Batch",
      color: "#0750B8",
      bg: "bg-[#EBF3FF]",
    },
    {
      id: "middle-secondary-tuition",
      title: "Middle & High School (Grades 6 – 10)",
      grades: "6th to 10th Std",
      syllabus: "CBSE • ICSE • Tamil Nadu State Board",
      tagline: "Subject-matter mastery in Mathematics, Science (Physics, Chemistry, Biology), and Languages.",
      features: [
        "Chapter-wise unit tests & board revision",
        "Step-by-step problem-solving methods",
        "Science practical concepts explained simply",
        "Special focus on 10th Board Exam score boost",
      ],
      timing: "Evening: 5:00 PM – 7:30 PM / Weekend Batches",
      ratio: "Small Group Guidance",
      color: "#159447",
      bg: "bg-[#EAF8EF]",
    },
    {
      id: "higher-secondary-tuition",
      title: "Higher Secondary (Grades 11 & 12)",
      grades: "11th & 12th (+1 & +2)",
      syllabus: "CBSE & State Board",
      tagline: "Rigorous coaching for Mathematics, Physics, Chemistry, and Computer Science.",
      features: [
        "In-depth concept lectures by senior faculty",
        "Previous 10-year question paper solving",
        "Formula sheets, derivations & time-management tips",
        "Regular parent performance reviews",
      ],
      timing: "Evening: 5:30 PM – 8:00 PM",
      ratio: "Focused Coaching",
      color: "#F36B12",
      bg: "bg-[#FFF2E8]",
    },
    {
      id: "engg-maths-hub",
      title: "Engineering Mathematics Coaching",
      grades: "B.E. / B.Tech (M1, M2, M3, M4, Discrete Maths)",
      syllabus: "Anna University & Autonomous Colleges",
      tagline: "Expert coaching under Mrs. S Tharani (M.Sc., PGDM, PGMTTC) for fast backlog clearance and top GPA.",
      features: [
        "Clear step-by-step proofs and numericals",
        "Anna University previous exam papers solved",
        "Individual doubt resolution for every student",
        "Proven 100% pass track record",
      ],
      timing: "Flexible Weekend & Evening Batches",
      ratio: "Personal Mentorship",
      color: "#F5B900",
      bg: "bg-[#FFF9E5]",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => handleOpenTour()} />

      {/* Page Header */}
      <PageHeader
        breadcrumb="All Classes & Courses"
        badge="Admissions Open 2024 - 2025"
        title="Pre-School Programs & All Subject Tuitions"
        highlightedWord="Pre-School & Tuitions"
        description="From loving Montessori Play School (Day Care to UKG) to comprehensive Tuitions & Coaching (LKG to 12th Std & Engineering Maths) in Kinathukadavu, Coimbatore."
      />

      {/* Category Switcher Tabs */}
      <section className="bg-gray-50 border-b border-gray-200 py-6 sticky top-16 z-30 backdrop-blur-md bg-gray-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-[#0750B8] text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            All Classes & Courses
          </button>
          <button
            onClick={() => setSelectedCategory("preschool")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === "preschool"
                ? "bg-[#159447] text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            🎒 Pre-School & Day Care (Age 1.5 – 6)
          </button>
          <button
            onClick={() => setSelectedCategory("tuition")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === "tuition"
                ? "bg-[#F36B12] text-white shadow-md scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            📚 Tuitions (LKG to 12th & Engg Maths)
          </button>
        </div>
      </section>

      {/* 1. MONTESSORI PRE-SCHOOL PROGRAMS */}
      {(selectedCategory === "all" || selectedCategory === "preschool") && (
        <section id="preschool-section" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#159447] bg-[#EAF8EF] px-4 py-1.5 rounded-full border border-[#159447]/20">
                Montessori Pre-School Pathway
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121D28] mt-3">
                Early Childhood Classes (Day Care to UKG)
              </h2>
              <p className="text-sm text-[#5E6D7A] mt-2">
                Certified Montessori environments with 1:6 individual educator attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROGRAMS.map((prog) => (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Program Image */}
                    <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                      <Image
                        src={prog.image}
                        alt={prog.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-white/95 text-[#0750B8] shadow-sm backdrop-blur-md">
                          Age: {prog.ageRange}
                        </span>
                      </div>
                    </div>

                    {/* Program Content */}
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-[#121D28]">
                        {prog.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#159447] mt-0.5 mb-3">
                        {prog.subTitle}
                      </p>
                      <p className="text-xs text-[#5E6D7A] leading-relaxed mb-4">
                        {prog.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        {prog.keyBenefits.slice(0, 3).map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#2A343D]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleOpenTour(prog.id)}
                      className="w-full py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-amber-300" />
                      <span>Enquire Admission</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. TUITION & COACHING CLASSES */}
      {(selectedCategory === "all" || selectedCategory === "tuition") && (
        <section id="tuition-section" className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F36B12] bg-[#FFF2E8] px-4 py-1.5 rounded-full border border-[#F36B12]/20">
                Academic Coaching Hub
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121D28] mt-3">
                Tuition Classes (LKG to 12th Std & Engineering Maths)
              </h2>
              <p className="text-sm text-[#5E6D7A] mt-2">
                Concept-based teaching with individual doubt clearing in small focused batches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tuitionOfferings.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-extrabold"
                        style={{ backgroundColor: `${t.color}15`, color: t.color }}
                      >
                        {t.grades}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {t.syllabus}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#121D28] mb-2">
                      {t.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed mb-6">
                      {t.tagline}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {t.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#2A343D]">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-[#5E6D7A] space-y-0.5 text-center sm:text-left">
                      <p>⏰ {t.timing}</p>
                      <p>👥 {t.ratio}</p>
                    </div>

                    <button
                      onClick={() => handleOpenTour(t.id)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-amber-300" />
                      <span>Join Batch</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* School Visit CTA */}
      <SchoolVisitCTA onOpenTourModal={() => handleOpenTour()} />

      {/* Footer */}
      <Footer onOpenTourModal={() => handleOpenTour()} />

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        defaultProgram={selectedProgram}
      />
    </main>
  );
}
