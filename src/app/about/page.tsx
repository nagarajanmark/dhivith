"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  Heart,
  Target,
  Award,
  CheckCircle2,
  Calendar,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhilosophySection } from "@/components/philosophy/PhilosophySection";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function AboutPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Page Header */}
      <PageHeader
        breadcrumb="About Us"
        badge="Our Heritage & Philosophy"
        title="Nurturing Curious Minds in Kinathukadavu"
        highlightedWord="Curious Minds"
        description="Founded on July 2, 2024, DHIVITH EDU CARE blends authentic Montessori early-learning principles with personalized student-centred coaching to shape confident lifelong achievers."
      />

      {/* Founder & Leadership Spotlight Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-50/70 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/80 shadow-sm">
            {/* Founder Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#121D28]">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Mrs. S Tharani - Educational Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121D28]/85 via-[#121D28]/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    Founder & Director
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {SCHOOL_INFO.founder}
                  </h3>
                  <p className="text-xs text-white/80">{SCHOOL_INFO.qualifications}</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-4 -right-2 sm:right-4 bg-white rounded-2xl p-3.5 shadow-xl border border-[#159447]/20 flex items-center gap-2.5">
                <Award className="w-8 h-8 text-[#159447]" />
                <div>
                  <div className="text-xs font-bold text-[#121D28]">PGMTTC Certified</div>
                  <div className="text-[10px] text-[#5E6D7A]">Montessori Master Trainer</div>
                </div>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#0750B8] shadow-sm border border-[#0750B8]/15">
                <GraduationCap className="w-4 h-4 text-[#F36B12]" />
                Director&apos;s Message
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121D28]">
                &ldquo;Every Child Has Limitless Inborn Potential.&rdquo;
              </h2>

              <p className="text-base text-[#5E6D7A] leading-relaxed">
                Welcome to <strong>DHIVITH EDU CARE</strong>. As an educator certified in Montessori Teacher Training (PGMTTC) and post-graduate management, my lifelong conviction is that true education does not force children into a rigid mold—it awakens their spontaneous joy of discovery.
              </p>

              <p className="text-sm sm:text-base text-[#5E6D7A] leading-relaxed">
                Since our inception on <strong>July 2, 2024</strong> in Kinathukadavu, Coimbatore, we have created an environment where toddlers, preschoolers, and school students receive genuine individual attention, self-correcting tactile learning tools, and stress-free academic coaching.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#0750B8]/10 text-xs font-semibold text-[#121D28]">
                  <CheckCircle2 className="w-4 h-4 text-[#159447]" />
                  <span>Student-Centred Montessori Care</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#0750B8]/10 text-xs font-semibold text-[#121D28]">
                  <CheckCircle2 className="w-4 h-4 text-[#0750B8]" />
                  <span>Tuition Support from LKG to Grade 12</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#0750B8]/10 text-xs font-semibold text-[#121D28]">
                  <CheckCircle2 className="w-4 h-4 text-[#F36B12]" />
                  <span>Engineering Mathematics Coaching</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#0750B8]/10 text-xs font-semibold text-[#121D28]">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B900]" />
                  <span>Stress-Free Learning Environment</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="px-6 py-3.5 rounded-2xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Schedule Meeting with Director</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#0750B8]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  Our Vision
                </h3>
                <p className="text-sm text-[#5E6D7A] leading-relaxed">
                  &ldquo;Better Learning. Better Tomorrow. Brighter Future.&rdquo; To be Coimbatore&apos;s leading educational community where every young mind is empowered with self-reliance, academic poise, and ethical empathy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#0750B8]">
                • Lifelong Love for Learning
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#0750B8]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-[#5E6D7A] leading-relaxed">
                  &ldquo;Every Child. Every Opportunity. Every Time.&rdquo; Providing authentic prepared environments with hands-on didactic apparatus, certified guidance, and stress-free academic coaching.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#159447]">
                • Child-Centered Excellence
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#0750B8]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  Our Motto
                </h3>
                <p className="text-sm text-[#5E6D7A] leading-relaxed">
                  &ldquo;Success Begins Here!&rdquo; Fostering emotional resilience, mathematical confidence, language fluency, and creative imagination in every child.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#F36B12]">
                • Individual Attention Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montessori Philosophy Pillars */}
      <PhilosophySection />

      {/* School Visit CTA */}
      <SchoolVisitCTA onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Footer */}
      <Footer onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Tour Booking Modal */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </main>
  );
}
