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

import { GalleryLightboxModal } from "@/components/modals/GalleryLightboxModal";
import ThreeDParallaxUnfurlingGallery from "@/components/ui/3d-parallax-unfurling-gallery";
import { SCHOOL_INFO, PROGRAMS, TESTIMONIALS, GALLERY_ITEMS, GalleryItem } from "@/data/schoolData";

export default function HomePage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>("pre-kg");
  const [is3DMode, setIs3DMode] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const featuredGalleryItems = GALLERY_ITEMS.slice(0, 6);

  const handleOpenLightbox = (item: GalleryItem) => {
    const index = featuredGalleryItems.findIndex((i) => i.id === item.id);
    if (index !== -1) setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) + 1) % featuredGalleryItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) - 1 + featuredGalleryItems.length) % featuredGalleryItems.length);
    }
  };

  const ageCategories = [
    {
      id: "day-care",
      label: "1.5 – 6 Years",
      title: "Day Care Sanctuary",
      sub: "Loving home-like rest pods & sensory play",
      badge: "Full / Half Day",
      href: "/programs",
      color: "#0750B8",
      bg: "bg-[#EBF3FF]",
    },
    {
      id: "play-group",
      label: "2 – 3 Years",
      title: "Play Group",
      sub: "First joyful steps in social motor rhythm",
      badge: "Morning Session",
      href: "/programs",
      color: "#F36B12",
      bg: "bg-[#FFF2E8]",
    },
    {
      id: "pre-kg",
      label: "3 – 4 Years",
      title: "Pre-KG Montessori",
      sub: "Practical Life autonomy & sandpaper phonics",
      badge: "Core Foundation",
      href: "/programs",
      color: "#159447",
      bg: "bg-[#EAF8EF]",
    },
    {
      id: "lkg-ukg",
      label: "4 – 6 Years",
      title: "LKG & UKG Kindergarten",
      sub: "Golden bead math & reading fluency",
      badge: "Elementary Ready",
      href: "/programs",
      color: "#F5B900",
      bg: "bg-[#FFF9E5]",
    },
    {
      id: "tuitions",
      label: "Grades 1 – 12",
      title: "Tuition & Coaching Hub",
      sub: "CBSE / ICSE / State Board + Engg Maths",
      badge: "Evening Batches",
      href: "/tuitions",
      color: "#0750B8",
      bg: "bg-[#EBF3FF]",
    },
  ];

  const currentAgeData = ageCategories.find((a) => a.id === selectedAgeGroup) || ageCategories[2];

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28] overflow-x-hidden">
      {/* Floating Glass Navbar */}
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* 1. CINEMATIC SPLIT HERO PORTAL */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-white">
        {/* Ambient background glows */}
        <div className="absolute top-12 left-10 w-96 h-96 bg-[#0750B8]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F5B900]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Top pill badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#0750B8]/15 shadow-xs backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#159447] animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#159447] -ml-4.5" />
                <span className="text-xs font-bold text-[#0750B8] uppercase tracking-wider">
                  DHIVITH EDU CARE
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-semibold text-[#159447]">
                  Kinathukadavu, Coimbatore
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight text-[#121D28] leading-[1.08]">
                Where Joyful Learning{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0750B8] via-[#159447] to-[#F36B12]">
                  Meets Limitless Potential.
                </span>
              </h1>

              {/* Tagline & Slogan */}
              <p className="text-base sm:text-lg md:text-xl text-[#5E6D7A] leading-relaxed max-w-2xl">
                Founded by <strong>Mrs. S Tharani</strong> (<em>M.Sc., PGDM, PGMTTC</em>), our campus offers premier Montessori early-learning (Day Care, Play Group, Pre-KG, LKG, UKG) and comprehensive school tuitions up to Grade 12.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0750B8] to-[#0962dc] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 group"
                >
                  <Calendar className="w-5 h-5 text-amber-300" />
                  <span>Book a Campus Visit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <Link
                  href="/programs"
                  className="px-7 py-4 rounded-2xl bg-white hover:bg-gray-50 text-[#121D28] font-bold text-sm sm:text-base border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Programs</span>
                  <ChevronRight className="w-4 h-4 text-[#0750B8]" />
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200/80">
                <div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#0750B8]">1:6</div>
                  <div className="text-[11px] text-[#5E6D7A] font-medium">Individual Attention</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#159447]">PGMTTC</div>
                  <div className="text-[11px] text-[#5E6D7A] font-medium">Certified Leadership</div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F36B12]">LKG to 12th</div>
                  <div className="text-[11px] text-[#5E6D7A] font-medium">Complete Education</div>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-[36px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#121D28]">
                <Image
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80"
                  alt="Dhivith Edu Care Montessori Classroom"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121D28]/80 via-transparent to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl bg-white p-1 shadow-xs flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#121D28]">
                        &ldquo;Success Begins Here!&rdquo;
                      </div>
                      <div className="text-[10px] text-[#5E6D7A]">
                        {SCHOOL_INFO.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 CORE PILLARS BENTO PORTAL */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0750B8] bg-[#EBF3FF] px-4 py-1.5 rounded-full border border-[#0750B8]/15">
              Explore Our Campus Ecosystem
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#121D28] mt-3">
              Four Pillars of Academic & Personal Growth
            </h2>
            <p className="text-sm sm:text-base text-[#5E6D7A] mt-2">
              Click any section below to explore our detailed programs, educational philosophy, and campus facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Preschool */}
            <Link
              href="/programs"
              className="group p-6 rounded-3xl bg-gray-50/60 hover:bg-white border border-[#0750B8]/10 hover:border-[#0750B8]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Baby className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0750B8]">
                  Ages 1.5 – 6 Years
                </span>
                <h3 className="font-display font-bold text-xl text-[#121D28] mt-1 mb-2 group-hover:text-[#0750B8] transition-colors">
                  Montessori Pre-School
                </h3>
                <p className="text-xs text-[#5E6D7A] leading-relaxed">
                  Day Care, Play Group, Pre-KG, LKG & UKG with self-correcting wooden didactic materials.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#0750B8]">
                <span>View All 5 Stages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Tuitions */}
            <Link
              href="/tuitions"
              className="group p-6 rounded-3xl bg-gray-50/60 hover:bg-white border border-[#0750B8]/10 hover:border-[#159447]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#159447]">
                  LKG to Grade 12
                </span>
                <h3 className="font-display font-bold text-xl text-[#121D28] mt-1 mb-2 group-hover:text-[#159447] transition-colors">
                  Tuition & Coaching Hub
                </h3>
                <p className="text-xs text-[#5E6D7A] leading-relaxed">
                  CBSE, ICSE, State Board subject coaching, Hindi basics, and collegiate Engineering Mathematics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#159447]">
                <span>Explore Coaching</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Montessori Method */}
            <Link
              href="/montessori-method"
              className="group p-6 rounded-3xl bg-gray-50/60 hover:bg-white border border-[#0750B8]/10 hover:border-[#F36B12]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F36B12]">
                  The 6 Avenues
                </span>
                <h3 className="font-display font-bold text-xl text-[#121D28] mt-1 mb-2 group-hover:text-[#F36B12] transition-colors">
                  The Montessori Method
                </h3>
                <p className="text-xs text-[#5E6D7A] leading-relaxed">
                  Practical Life, Sensorial Geometry, Phonetics, Golden Bead Decimal Math, Science & Process Art.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#F36B12]">
                <span>Learn the Science</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 4: Prepared Environment */}
            <Link
              href="/environment"
              className="group p-6 rounded-3xl bg-gray-50/60 hover:bg-white border border-[#0750B8]/10 hover:border-[#F5B900]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF9E5] text-[#9A6700] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Trees className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#9A6700]">
                  Prepared Campus
                </span>
                <h3 className="font-display font-bold text-xl text-[#121D28] mt-1 mb-2 group-hover:text-[#9A6700] transition-colors">
                  Learning Environment
                </h3>
                <p className="text-xs text-[#5E6D7A] leading-relaxed">
                  Natural daylight classrooms, Finnish birch furniture, organic herb terrace & biometric security.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#9A6700]">
                <span>Tour Our Spaces</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS GALLERY & 3D PARALLAX UNFURLING SHOWCASE */}
      <section className="relative bg-white text-[#121D28] border-t border-[#0750B8]/10 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF8EF] text-[#159447] text-xs font-bold uppercase tracking-wider mb-3 border border-[#159447]/20 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F36B12]" />
                <span>Visual Portfolio & Life at Campus</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#121D28] tracking-tight">
                Moments of Wonder & Discovery
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6D7A] mt-1.5 max-w-xl leading-relaxed">
                Experience our prepared Montessori environments, hands-on didactic apparatus, and joyful learners in Kinathukadavu.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Mode Switcher Bar */}
              <div className="flex items-center gap-2 p-1 bg-gray-100/80 rounded-full border border-gray-200 shadow-xs">
                <button
                  onClick={() => setIs3DMode(false)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    !is3DMode
                      ? "bg-[#0750B8] text-white shadow-sm scale-105"
                      : "text-[#2A343D] hover:text-[#0750B8]"
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Masonry Grid</span>
                </button>

                <button
                  onClick={() => setIs3DMode(true)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    is3DMode
                      ? "bg-[#159447] text-white shadow-sm scale-105"
                      : "text-[#2A343D] hover:text-[#159447]"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>3D Parallax Mode</span>
                </button>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-[#121D28] font-bold text-xs transition-all duration-300 border border-gray-200 shadow-xs hover:shadow-sm"
              >
                <span>Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0750B8]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Display Mode */}
        {is3DMode ? (
          <div className="relative pt-2 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
              <span className="text-xs font-bold text-[#159447] bg-[#EAF8EF] px-3.5 py-1 rounded-full border border-[#159447]/20 shadow-xs">
                ⚡ 3D Parallax Scroll Experience (Scroll Down to Unfurl)
              </span>
              <button
                onClick={() => setIs3DMode(false)}
                className="px-4 py-1.5 rounded-full bg-white hover:bg-gray-100 text-xs font-bold text-[#121D28] flex items-center gap-1.5 border border-gray-200 shadow-xs cursor-pointer transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Exit 3D Mode</span>
              </button>
            </div>
            <div className="w-full relative">
              <ThreeDParallaxUnfurlingGallery theme="light" />
            </div>
          </div>
        ) : (
          /* Masonry Grid Preview with Lightbox Interaction */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGalleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightbox(item)}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-white/95 text-[#0750B8] shadow-sm backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Lightbox Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-bold text-base sm:text-lg drop-shadow-sm mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Launch 3D Mode Card Banner */}
            <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-[#EBF3FF] via-[#EAF8EF] to-[#FFF2E8] border border-[#0750B8]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#159447] shadow-sm flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-[#159447]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[#121D28]">
                    Experience Dynamic 3D Matrix Parallax View
                  </h4>
                  <p className="text-xs text-[#5E6D7A]">
                    Unfurl campus images into a full 3D spatial perspective linked to your scroll.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIs3DMode(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#159447] hover:bg-[#117a39] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 flex-shrink-0 hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Launch 3D Parallax Mode</span>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 4. INTERACTIVE AGE SELECTOR & PROGRAM MATCHER */}
      <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159447] bg-[#EAF8EF] px-4 py-1.5 rounded-full border border-[#159447]/20">
              Interactive Program Finder
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121D28] mt-3">
              Find the Perfect Program for Your Child
            </h2>
            <p className="text-xs sm:text-sm text-[#5E6D7A] mt-2">
              Select your child&apos;s age or grade stage to view the tailored curriculum focus:
            </p>
          </div>

          {/* Age Group Buttons */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {ageCategories.map((cat) => {
              const isSelected = selectedAgeGroup === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedAgeGroup(cat.id)}
                  className={`flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${isSelected
                      ? "bg-[#0750B8] text-white border-[#0750B8] shadow-md scale-105"
                      : "bg-white text-[#2A343D] border-gray-200 hover:border-[#0750B8]/40"
                    }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Spotlight Card */}
          <div className="bg-gray-50/70 rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: `${currentAgeData.color}15`,
                  color: currentAgeData.color,
                }}
              >
                {currentAgeData.badge} • Age: {currentAgeData.label}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#121D28]">
                {currentAgeData.title}
              </h3>
              <p className="text-sm text-[#5E6D7A] max-w-lg">
                {currentAgeData.sub}. Nurturing curiosity with certified Montessori educators and structured attention.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                href={currentAgeData.href}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-gray-100 text-[#121D28] font-bold text-xs sm:text-sm text-center transition-all border border-gray-200 shadow-xs"
              >
                Learn More
              </Link>
              <button
                onClick={() => setIsTourModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs sm:text-sm shadow-md transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book a Tour</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER'S VISION & EDITORIAL BANNER */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] bg-gradient-to-r from-[#121D28] via-[#1a2b3c] to-[#121D28] p-8 sm:p-14 text-white shadow-2xl overflow-hidden border-2 border-white/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0750B8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#159447]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Quote className="w-3.5 h-3.5" />
                <span>Our Founding Commitment</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                &ldquo;Every Child. Every Opportunity. Every Time.&rdquo;
              </h2>

              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                &ldquo;At Dhivith Edu Care, education is not something given by an instructor; it is a natural, joyous exploration spontaneously carried out by the human child.&rdquo;
              </p>

              <div className="pt-2 text-xs font-bold text-amber-200 uppercase tracking-wider">
                — Mrs. S Tharani, M.Sc., PGDM, PGMTTC (Founder & Director)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARENT PERSPECTIVES & RATINGS SPOTLIGHT */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F36B12] bg-[#FFF2E8] px-4 py-1.5 rounded-full border border-[#F36B12]/20">
              Trusted in Coimbatore
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121D28] mt-3">
              Loved by Families & Cherished by Children
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="bg-gray-50/60 rounded-3xl p-6 sm:p-8 border border-gray-200/70 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xs sm:text-sm text-[#2A343D] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${t.avatarBg} text-white font-bold text-xs flex items-center justify-center`}>
                    {t.avatarText}
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#121D28]">{t.parentName}</div>
                    <div className="text-[10px] text-[#0750B8]">{t.childInfo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VISIT & ADMISSION CALL TO ACTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] bg-gradient-to-r from-[#0750B8] via-[#0962dc] to-[#159447] p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden border-4 border-white">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md inline-block">
                Campus Tours Available Mon–Sat
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Come Discover the Joy of Learning.
              </h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto">
                Schedule an intimate walkthrough with Mrs. S Tharani to experience our live Montessori classrooms in Kinathukadavu, Coimbatore.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-white text-[#0750B8] font-bold text-sm sm:text-base shadow-xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
                >
                  <Calendar className="w-5 h-5 text-[#F36B12]" />
                  <span>Book a Campus Tour</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="px-7 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base border border-white/30 backdrop-blur-md transition-all flex items-center gap-2"
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

      {/* Gallery Lightbox Modal */}
      <GalleryLightboxModal
        items={featuredGalleryItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </main>
  );
}
