"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComprehensiveServices } from "@/components/services/ComprehensiveServices";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import {
  BookOpen,
  Calculator,
  Languages,
  Sparkles,
  CheckCircle2,
  Phone,
  MessageSquare,
  Award,
  GraduationCap,
  Clock,
  Users,
} from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

export default function TuitionsPage() {
  const { language } = useLanguage();
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      <PageHeader
        breadcrumb={language === "ta" ? "டியூஷன் & பயிற்சி" : "Tuition & Coaching"}
        title={language === "ta" ? "அனைத்துப் பாட டியூஷன் & பொறியியல் கணிதம்" : "Comprehensive Tuition Classes & Engineering Maths"}
        highlightedWord={language === "ta" ? "டியூஷன் & பொறியியல் கணிதம்" : "Tuition Classes & Engineering Maths"}
        description={
          language === "ta"
            ? "சிறந்த கற்றல். சிறந்த எதிர்காலம். LKG முதல் 12-ஆம் வகுப்பு வரை (CBSE, ICSE, Matric & State Board) அனைத்துப் பாடங்கள் மற்றும் பொறியியல் கணிதப் பயிற்சி (M1, M2, M3, M4)."
            : "Better Learning. Better Tomorrow. Brighter Future. Expert coaching for LKG to Grade 12 across ICSE, CBSE, and State Board syllabi, along with collegiate Engineering Mathematics."
        }
        bannerImage="/school_images/1000449608.webp"
        gradientTheme="blue"
      />

      {/* Comprehensive Services Core Component */}
      <ComprehensiveServices onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Academic Highlights & Syllabus Breakdown Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0750B8] bg-[#EBF3FF] px-4 py-1.5 rounded-full border border-[#0750B8]/20">
              Structured Multi-Board Batches
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#121D28] mt-3">
              Tailored Coaching for Every Educational Board
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-2">
              We align our evening coaching sessions with each student&apos;s specific school curriculum for guaranteed academic mastery and top marks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CBSE Stream */}
            <div className="bg-gray-50/70 rounded-3xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0750B8] text-white mb-4">
                  CBSE Curriculum
                </div>
                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  Class 1 to 12 CBSE Coaching
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed mb-6">
                  Comprehensive NCERT textbook problem solving, exemplar questions, Science practicals understanding, and Board exam question bank preparation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>Mathematics & Science Focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>Social Studies, English & Hindi</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>Weekly Sample Paper Tests</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Hi!%20I%20am%20interested%20in%20CBSE%20tuition%20classes.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#0750B8] hover:underline flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#159447]" />
                  <span>Inquire for CBSE Batch</span>
                </a>
              </div>
            </div>

            {/* ICSE Stream */}
            <div className="bg-gray-50/70 rounded-3xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#159447] text-white mb-4">
                  ICSE / ISC Curriculum
                </div>
                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  ICSE & Middle School
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed mb-6">
                  In-depth analytical coaching covering Physics, Chemistry, Biology, Commercial Applications, Computer Science, and Selina/Frank Mathematics.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>Detailed Numerical Problem Worksheets</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>Structured Essay & Language Writing</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>Doubt-Clearing & Concept Drills</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Hi!%20I%20am%20interested%20in%20ICSE%20tuition%20classes.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#159447] hover:underline flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#159447]" />
                  <span>Inquire for ICSE Batch</span>
                </a>
              </div>
            </div>

            {/* State Board & Higher Secondary */}
            <div className="bg-gray-50/70 rounded-3xl p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#F36B12] text-white mb-4">
                  Tamil Nadu State Board
                </div>
                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  Samacheer & 10th/11th/12th
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed mb-6">
                  Targeted mastery of Tamil Nadu Samacheer Kalvi books, centum-oriented revision question banks, formula charts, and model board exams.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>Class 10 Board Exam Centum Coaching</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>+1 & +2 Maths, Physics & Chemistry</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#2A343D]">
                    <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                    <span>Engineering Maths (B.E./B.Tech/Diploma)</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Hi!%20I%20am%20interested%20in%20State%20Board%20or%20Engineering%20Maths%20tuitions.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#F36B12] hover:underline flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#159447]" />
                  <span>Inquire for State/College Batch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Helpline Callout */}
          <div className="mt-14 bg-gradient-to-r from-[#0750B8] to-[#159447] rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl text-white">
                Have specific tuition timing or subject requirements?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Call Mrs. S Tharani directly or reach out on WhatsApp for fee structures and slot availability.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="px-6 py-3 rounded-xl bg-white text-[#0750B8] font-bold text-xs sm:text-sm shadow-md hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#159447]" />
                <span>Call {SCHOOL_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=Hello%20Mrs.%20Tharani!%20I%20would%20like%20to%20know%20more%20about%20Tuition%20batches.`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-[#159447] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#117a3a] transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* School Visit CTA */}
      <SchoolVisitCTA onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Footer */}
      <Footer onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        defaultProgram="tuition-all"
      />
    </main>
  );
}
