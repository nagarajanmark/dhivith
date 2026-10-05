"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Star,
  BookOpen,
  Calculator,
  Baby,
  GraduationCap,
  Trees,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronRight,
  Phone,
  Heart,
  Quote,
  Eye,
  Grid,
  X,
  Maximize2,
} from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { ContinuousMarqueeGallery } from "@/components/gallery/ContinuousMarqueeGallery";
import TigerTearReveal from "@/components/ui/tiger-tear-reveal";
import { GlyphHeroSection } from "@/components/hero/GlyphHeroSection";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { CampusVideoShowcase } from "@/components/video/CampusVideoShowcase";
import { TestimonialsMasonry } from "@/components/testimonials/TestimonialsMasonry";
import { SCHOOL_INFO, PROGRAMS, TESTIMONIALS, GALLERY_ITEMS, GalleryItem } from "@/data/schoolData";

export default function HomePage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("pre-kg");

  const ageCategories = [
    {
      id: "day-care",
      label: "1.5 – 6 Years",
      title: "Day Care Sanctuary",
      sub: "Loving home-like rest pods & sensory play",
      badge: "Full / Half Day",
      href: "/classes",
      color: "#0750B8",
      bg: "bg-[#EBF3FF]",
    },
    {
      id: "play-group",
      label: "2 – 3 Years",
      title: "Play Group",
      sub: "First joyful steps in social motor rhythm",
      badge: "Morning Session",
      href: "/classes",
      color: "#F36B12",
      bg: "bg-[#FFF2E8]",
    },
    {
      id: "pre-kg",
      label: "3 – 4 Years",
      title: "Pre-KG Montessori",
      sub: "Practical Life autonomy & sandpaper phonics",
      badge: "Core Foundation",
      href: "/classes",
      color: "#159447",
      bg: "bg-[#EAF8EF]",
    },
    {
      id: "lkg-ukg",
      label: "4 – 6 Years",
      title: "LKG & UKG Kindergarten",
      sub: "Golden bead math & reading fluency",
      badge: "Elementary Ready",
      href: "/classes",
      color: "#F5B900",
      bg: "bg-[#FFF9E5]",
    },
    {
      id: "tuitions",
      label: "Grades 1 – 12",
      title: "Tuition & Coaching Hub",
      sub: "CBSE / ICSE / State Board + Engg Maths",
      badge: "Evening Batches",
      href: "/classes",
      color: "#0750B8",
      bg: "bg-[#EBF3FF]",
    },
  ];

  const currentAgeData = ageCategories.find((a) => a.id === selectedAgeGroup) || ageCategories[2];

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28] overflow-x-clip">
      {/* Floating Glass Navbar */}
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* 1. INTERACTIVE FULL-WIDTH GLYPH HERO PORTAL */}
      <GlyphHeroSection onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* 1.5 WHO WE ARE SECTION */}
      <WhoWeAreSection onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* 2. 4 CORE PILLARS PREMIUM BENTO PORTAL */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] border-t border-gray-100 relative overflow-x-clip">
        {/* Full-Height Majestic Tree Anchored Left (Visible with First Card on Mobile) */}
        <div className="absolute -left-24 sm:-left-48 md:-left-60 lg:-left-72 xl:-left-80 top-12 sm:top-0 bottom-auto sm:bottom-0 w-[360px] sm:w-[700px] lg:w-[900px] xl:w-[1020px] h-[400px] sm:h-full pointer-events-none select-none z-0 opacity-85 sm:opacity-90 lg:opacity-100 transition-all duration-700">
          <Image
            src="/tree.webp"
            alt="Nature Learning Tree"
            fill
            className="object-contain object-top-left sm:object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0750B8]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#159447]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0750B8] text-xs font-bold uppercase tracking-wider border border-gray-200/80 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0750B8]" />
              <span>Campus Ecosystem</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight">
              Four Pillars of Growth
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal">
              A balanced ecosystem fostering intellect, curiosity, and lifelong independence.
            </p>
          </div>

          {/* Stacking Cards on Mobile Scroll • 4-Column Grid on Desktop */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
            {/* Card 1: Montessori Pre-School (Sticky on mobile, z-10) */}
            <Link
              href="/classes"
              className="sticky top-20 sm:static z-10 group relative bg-white rounded-[28px] p-7 border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#0750B8]/30 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top right color aura */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0750B8]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0750B8]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                    <Baby className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-gray-300 group-hover:text-[#0750B8]/50 transition-colors font-mono">
                    01
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FF] text-[#0750B8] text-[11px] font-bold tracking-wide mb-3">
                  Ages 1.5 – 6 Yrs
                </div>

                <h3 className="font-display font-black text-xl text-[#0F172A] mb-2 group-hover:text-[#0750B8] transition-colors leading-snug">
                  Montessori Pre-School
                </h3>

                <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal">
                  Self-directed play, practical life autonomy, and sandpaper phonics.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0750B8]">
                <span>Explore Stages</span>
                <div className="w-7 h-7 rounded-full bg-[#EBF3FF] flex items-center justify-center group-hover:bg-[#0750B8] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Card 2: Tuition & Coaching Hub (Sticky on mobile, z-20) */}
            <Link
              href="/classes"
              className="sticky top-24 sm:static z-20 group relative bg-white rounded-[28px] p-7 border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#159447]/30 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top right color aura */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#159447]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#159447]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-gray-300 group-hover:text-[#159447]/50 transition-colors font-mono">
                    02
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-[#EAF8EF] text-[#159447] text-[11px] font-bold tracking-wide mb-3">
                  Grades 1 – 12 & Engg
                </div>

                <h3 className="font-display font-black text-xl text-[#0F172A] mb-2 group-hover:text-[#159447] transition-colors leading-snug">
                  Tuition & Coaching
                </h3>

                <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal">
                  CBSE / ICSE core mastery and collegiate Engineering Mathematics.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#159447]">
                <span>Explore Coaching</span>
                <div className="w-7 h-7 rounded-full bg-[#EAF8EF] flex items-center justify-center group-hover:bg-[#159447] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Card 3: The Montessori Method (Sticky on mobile, z-30) */}
            <Link
              href="/classes"
              className="sticky top-28 sm:static z-30 group relative bg-white rounded-[28px] p-7 border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#F36B12]/30 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top right color aura */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F36B12]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F36B12]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-gray-300 group-hover:text-[#F36B12]/50 transition-colors font-mono">
                    03
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-[#FFF2E8] text-[#F36B12] text-[11px] font-bold tracking-wide mb-3">
                  6 Core Avenues
                </div>

                <h3 className="font-display font-black text-xl text-[#0F172A] mb-2 group-hover:text-[#F36B12] transition-colors leading-snug">
                  Montessori Method
                </h3>

                <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal">
                  Sensorial geometry, golden bead math, and language discovery.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#F36B12]">
                <span>Learn Science</span>
                <div className="w-7 h-7 rounded-full bg-[#FFF2E8] flex items-center justify-center group-hover:bg-[#F36B12] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Card 4: Learning Environment (Sticky on mobile, z-40) */}
            <Link
              href="/classes"
              className="sticky top-32 sm:static z-40 group relative bg-white rounded-[28px] p-7 border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-[#F5B900]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top right color aura */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B900]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F5B900]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#FFF9E5] text-[#9A6700] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xs">
                    <Trees className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-gray-300 group-hover:text-[#9A6700]/50 transition-colors font-mono">
                    04
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-[#FFF9E5] text-[#9A6700] text-[11px] font-bold tracking-wide mb-3">
                  Prepared Spaces
                </div>

                <h3 className="font-display font-black text-xl text-[#0F172A] mb-2 group-hover:text-[#9A6700] transition-colors leading-snug">
                  Prepared Campus
                </h3>

                <p className="text-[13.5px] text-gray-600 leading-relaxed font-normal">
                  Natural daylight classrooms, birch furniture & biometric safety.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#9A6700]">
                <span>Tour Spaces</span>
                <div className="w-7 h-7 rounded-full bg-[#FFF9E5] flex items-center justify-center group-hover:bg-[#9A6700] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE AGE SELECTOR & PROGRAM MATCHER */}
      <section className="py-16 lg:py-24 bg-white border-y border-gray-100 relative overflow-hidden">
        {/* Subtle background ambient glows */}
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#0750B8]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-[#159447]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159447] bg-[#EAF8EF] px-4 py-1.5 rounded-full border border-[#159447]/20 inline-block mb-3 shadow-xs">
              Interactive Program Finder
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#121D28] tracking-tight leading-tight">
              Find the Perfect Program for Your Child
            </h2>
            <p className="text-sm sm:text-base text-[#5E6D7A] mt-2">
              Select your child&apos;s age or grade stage to view the tailored curriculum focus:
            </p>
          </div>

          {/* Age Group Buttons - All tabs visible with flex-wrap */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {ageCategories.map((cat) => {
              const isSelected = selectedAgeGroup === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedAgeGroup(cat.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${isSelected
                      ? "bg-[#0750B8] text-white border-[#0750B8] shadow-md scale-105"
                      : "bg-white text-[#2A343D] border-gray-200 hover:border-[#0750B8]/40 hover:bg-gray-50 shadow-xs"
                    }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Creative Spotlight Card with Responsive Image */}
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-white via-[#EBF3FF]/40 to-[#EAF8EF]/50 p-6 sm:p-10 lg:p-12 border-2 border-gray-200/90 shadow-2xl max-w-5xl mx-auto overflow-hidden">
            {/* Ambient Aura behind */}
            <div className="absolute right-0 bottom-0 w-80 sm:w-96 h-80 bg-gradient-to-tr from-[#0750B8]/10 via-[#159447]/10 to-amber-300/15 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs border border-white/60 backdrop-blur-sm"
                  style={{
                    backgroundColor: `${currentAgeData.color}15`,
                    color: currentAgeData.color,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: currentAgeData.color }}
                  />
                  <span>
                    {currentAgeData.badge} • Age: {currentAgeData.label}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#121D28] tracking-tight leading-tight">
                  {currentAgeData.title}
                </h3>

                <p className="text-sm sm:text-base text-[#5E6D7A] leading-relaxed max-w-lg font-medium">
                  {currentAgeData.sub}. Child-centered Montessori learning in Kinathukadavu.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsTourModalOpen(true)}
                    className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-amber-300" />
                    <span>Book a Campus Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href={currentAgeData.href}
                    className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-[#121D28] font-bold text-xs sm:text-sm border border-gray-200/80 shadow-xs hover:border-[#0750B8]/40 transition-all flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-[#0750B8]" />
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>

              {/* Right Image Container - Visible on Mobile and Desktop */}
              <div className="lg:col-span-5 flex items-center justify-center pt-2 lg:pt-0">
                <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none aspect-[4/3] transition-transform duration-500 hover:scale-105 select-none">
                  <Image
                    src="/together.webp"
                    alt="Children Learning Together at Dhivith Edu Care"
                    fill
                    priority
                    className="object-contain object-center drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* 6.5 INTERACTIVE MONTESSORI TEAR REVEAL */}
      <TigerTearReveal
        word="MONTESSORI"
        tagline="NURTURING CURIOSITY & INDEPENDENCE"
        subTagline="DHIVITH EDU CARE • KINATHUKADAVU, COIMBATORE"
        logoSrc="/logo.png"
        ink="#0750B8"
        paper="#ffffff"
        taglineColor="#121D28"
      />


        {/* 5. VIRTUAL CAMPUS VIDEO SPOTLIGHT */}
      <CampusVideoShowcase onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* 3. CONTINUOUS MARQUEE SHOWCASE & LIGHTBOX GALLERY */}
      <ContinuousMarqueeGallery
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />



    

      {/* 6. PARENT PERSPECTIVES & RATINGS MASONRY */}
      <TestimonialsMasonry />

   

      {/* 7. VISIT & ADMISSION CALL TO ACTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] relative overflow-hidden p-8 sm:p-12 lg:p-16 text-white text-left shadow-2xl border-4 border-white min-h-[380px] sm:min-h-[420px] flex items-center">
            {/* Background image & soft left gradient for readability */}
            <div
              className="absolute inset-0 bg-cover bg-[center_right_20%] sm:bg-right transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url('/clouds.webp')` }}
            />
            {/* Soft gradient overlay prioritizing clear image visibility on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0750B8]/85 via-[#0750B8]/50 sm:via-[#0750B8]/30 to-transparent" />

            <div className="relative z-10 max-w-xl space-y-5">
              <span className="px-4 py-1.5 rounded-full bg-white/25 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md inline-block border border-white/30 shadow-sm">
                Campus Tours Available Mon–Sat
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] drop-shadow-md">
                Come Discover the Joy of Learning.
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow font-medium max-w-lg">
                Schedule an intimate walkthrough with Mrs. S Tharani to experience our live Montessori classrooms in Kinathukadavu, Coimbatore.
              </p>
              <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-white text-[#0750B8] font-bold text-sm sm:text-base shadow-xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#F36B12]" />
                  <span>Book a Campus Tour</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-[#0750B8]/60 hover:bg-[#0750B8]/80 text-white font-bold text-sm sm:text-base border border-white/40 backdrop-blur-md shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call {SCHOOL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
