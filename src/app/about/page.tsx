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
  ChevronRight,
  Phone,
  BookOpen,
} from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PhilosophySection } from "@/components/philosophy/PhilosophySection";
import { TeamMembersSection } from "@/components/about/TeamMembersSection";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const { language, t } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* 1. HERO / ABOUT BANNER SECTION WITH about-bg.webp */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden text-white min-h-[380px] sm:min-h-[420px] flex items-center bg-[#0750B8]">
        {/* Full-bleed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('/about-bg.webp')` }}
        />
        {/* Ultra-luxe cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0750B8]/92 via-[#0750B8]/75 to-[#121D28]/90 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,185,0,0.25),transparent_65%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/15 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-xs">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                {t.nav.home}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              <span className="text-amber-300 font-bold">{t.nav.about}</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Bold Headline & Story */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h1 className="font-display font-black text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white tracking-tight leading-[1.2] drop-shadow-md">
                {language === "ta" ? (
                  <>
                    இளம் தளிர்களை செதுக்கும்{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                      மாண்டிசோரி கல்விச் சோலை
                    </span>
                  </>
                ) : (
                  <>
                    Nurturing Curious Minds in{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                      Kinathukadavu
                    </span>
                  </>
                )}
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-normal max-w-xl drop-shadow-xs">
                {t.about.bannerDesc}
              </p>

              {/* Interactive CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-white text-[#0750B8] hover:bg-amber-300 hover:text-[#121D28] font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#F36B12]" />
                  <span>{t.common.scheduleVisit}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/30 backdrop-blur-md shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>{t.common.callNow}: {SCHOOL_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: 4 Stat Glass Cards + Director Chip */}
            <div className="lg:col-span-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/15 hover:bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center shadow-md transition-all hover:scale-102">
                  <div className="font-display font-black text-2xl sm:text-3xl text-amber-300 mb-0.5">
                    100%
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white/90">
                    {language === "ta" ? "மாண்டிசோரி முறை" : "Montessori Method"}
                  </div>
                </div>

                <div className="bg-white/15 hover:bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center shadow-md transition-all hover:scale-102">
                  <div className="font-display font-black text-2xl sm:text-3xl text-emerald-300 mb-0.5">
                    1:6
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white/90">
                    {language === "ta" ? "தனிநபர் வழிகாட்டல்" : "Teacher-Student Ratio"}
                  </div>
                </div>

                <div className="bg-white/15 hover:bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center shadow-md transition-all hover:scale-102">
                  <div className="font-display font-black text-2xl sm:text-3xl text-white mb-0.5">
                    5+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white/90">
                    {language === "ta" ? "கல்வி நிலைகள்" : "Foundational Stages"}
                  </div>
                </div>

                <div className="bg-white/15 hover:bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center shadow-md transition-all hover:scale-102">
                  <div className="font-display font-black text-2xl sm:text-3xl text-amber-300 mb-0.5">
                    LKG–12
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white/90">
                    {language === "ta" ? "அனைத்து டியூஷன்கள்" : "Tuitions & Engg Maths"}
                  </div>
                </div>
              </div>

              {/* Director Signature Chip */}
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-amber-300">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">{t.about.founderName}</div>
                    <div className="text-[10px] text-white/75">{t.about.founderQual} • {t.about.founderTitle}</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-400/30">
                  {language === "ta" ? "சான்றிதழ் பெற்றவர்" : "Certified"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Leadership Spotlight Section - Seamless Open Premium Layout */}

      {/* Founder & Leadership Spotlight Section - Seamless Open Premium Layout */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-gray-100">
        {/* Soft Ambient Background Highlights */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0750B8]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#159447]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Founder Visual Frame (Open Modern Floating Portrait) */}
            <div className="lg:col-span-5 relative">
              {/* Layered Decorative Backdrop Accent */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-tr from-[#0750B8]/15 via-[#159447]/10 to-amber-300/20 -z-10 transform -rotate-1 hidden sm:block" />

              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 aspect-[4/5] bg-slate-900 group">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Mrs. S Tharani - Educational Director"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/25 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    {language === "ta" ? "நிறுவனர் & கல்வி இயக்குநர்" : "Founder & Director"}
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {SCHOOL_INFO.founder}
                  </h3>
                  <p className="text-xs text-white/80">{SCHOOL_INFO.qualifications}</p>
                </div>
              </div>

              {/* Verified Badge Floating Bottom-Right */}
              <div className="absolute -bottom-4 -right-2 sm:right-2 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    {language === "ta" ? "PGMTTC சான்றிதழ்" : "PGMTTC Certified"}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {language === "ta" ? "மாண்டிசோரி முதன்மை பயிற்சியாளர்" : "Montessori Master Trainer"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Founder Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3FF] text-[#0750B8] text-xs font-bold uppercase tracking-wider border border-[#0750B8]/15 shadow-xs">
                <GraduationCap className="w-4 h-4 text-[#F36B12]" />
                <span>{language === "ta" ? "இயக்குநரின் செய்தி" : "Director's Message"}</span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#0F172A] tracking-tight leading-tight">
                {language === "ta"
                  ? "“ஒவ்வொரு குழந்தையிடமும் எல்லையற்ற உள்ளார்ந்த திறன் உள்ளது.”"
                  : "“Every Child Has Limitless Inborn Potential.”"}
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                {t.about.directorMessage}
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal italic border-l-4 border-amber-400 pl-4 py-1 bg-amber-50/50 rounded-r-xl">
                {t.about.founderQuote}
              </p>

              {/* Ultra-Premium 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Card 1: Montessori Care */}
                <div className="group p-4.5 sm:p-5 rounded-2xl bg-white hover:bg-[#EAF8EF]/40 border border-gray-200/80 hover:border-[#159447]/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0F172A] group-hover:text-[#159447] transition-colors">
                      {t.about.pillar1Title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed font-normal">
                      {t.about.pillar1Desc}
                    </p>
                  </div>
                </div>

                {/* Card 2: Tuition Support */}
                <div className="group p-4.5 sm:p-5 rounded-2xl bg-white hover:bg-[#EBF3FF]/40 border border-gray-200/80 hover:border-[#0750B8]/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0F172A] group-hover:text-[#0750B8] transition-colors">
                      {t.about.pillar2Title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed font-normal">
                      {t.about.pillar2Desc}
                    </p>
                  </div>
                </div>

                {/* Card 3: Engineering Maths */}
                <div className="group p-4.5 sm:p-5 rounded-2xl bg-white hover:bg-[#FFF2E8]/40 border border-gray-200/80 hover:border-[#F36B12]/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0F172A] group-hover:text-[#F36B12] transition-colors">
                      {t.about.pillar3Title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed font-normal">
                      {t.about.pillar3Desc}
                    </p>
                  </div>
                </div>

                {/* Card 4: Prepared Environment */}
                <div className="group p-4.5 sm:p-5 rounded-2xl bg-white hover:bg-[#FFF9E5]/40 border border-gray-200/80 hover:border-[#F5B900]/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9E5] text-[#9A6700] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0F172A] group-hover:text-[#9A6700] transition-colors">
                      {t.about.pillar4Title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed font-normal">
                      {t.about.pillar4Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsTourModalOpen(true)}
                  className="whitespace-nowrap px-7 py-3.5 rounded-2xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="whitespace-nowrap">{t.common.scheduleVisit}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="whitespace-nowrap px-6 py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs sm:text-sm border border-gray-200/90 shadow-sm hover:border-[#0750B8]/40 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0750B8] shrink-0" />
                  <span className="whitespace-nowrap">{t.common.callNow}: {SCHOOL_INFO.phone}</span>
                </a>
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
                  {language === "ta" ? "எங்கள் தொலைநோக்கு (Vision)" : "Our Vision"}
                </h3>
                <p className="text-sm text-[#5E6D7A] leading-relaxed">
                  {language === "ta"
                    ? "“சிறந்த கற்றல். சிறந்த நாளை. ஒளிமயமான எதிர்காலம்.” ஒவ்வொரு குழந்தையிடமும் தன்னம்பிக்கை, கல்வியறிவு மற்றும் நற்பண்புகளை வளர்த்தெடுப்பதே எங்கள் தொலைநோக்கு."
                    : "“Better Learning. Better Tomorrow. Brighter Future.” To be Coimbatore's leading educational community where every young mind is empowered with self-reliance, academic poise, and ethical empathy."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#0750B8]">
                • {language === "ta" ? "வாழ்நாள் கற்றல் ஆர்வம்" : "Lifelong Love for Learning"}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#0750B8]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  {language === "ta" ? "எங்கள் நோக்கம் (Mission)" : "Our Mission"}
                </h3>
                <p className="text-sm text-[#5E6D7A] leading-relaxed">
                  {language === "ta"
                    ? "“ஒவ்வொரு குழந்தைக்கும். ஒவ்வொரு வாய்ப்பும். ஒவ்வொரு முறையும்.” உண்மையான மாண்டிசோரி சூழலில், சான்றிதழ் பெற்ற ஆசிரியர்களின் வழிகாட்டலில் மன அழுத்தமில்லா கல்வியை வழங்குதல்."
                    : "“Every Child. Every Opportunity. Every Time.” Providing authentic prepared environments with hands-on didactic apparatus, certified guidance, and stress-free academic coaching."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#159447]">
                • {language === "ta" ? "குழந்தை மையக் கல்வி சிறப்பு" : "Child-Centered Excellence"}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#0750B8]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#121D28] mb-3">
                  {language === "ta" ? "எங்கள் தாரக மந்திரம் (Motto)" : "Our Motto"}
                </h3>
                <p className="text-sm text-[#5E6D7A] leading-relaxed">
                  {language === "ta"
                    ? "“வெற்றி இங்கே தொடங்குகிறது!” கணித தன்னம்பிக்கை, மொழி புலமை மற்றும் ஆக்கப்பூர்வமான கற்பனைத் திறனை ஒவ்வொரு குழந்தையிடமும் உருவாக்குதல்."
                    : "“Success Begins Here!” Fostering emotional resilience, mathematical confidence, language fluency, and creative imagination in every child."}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-[#F36B12]">
                • {language === "ta" ? "100% தனிநபர் கவனம்" : "Individual Attention Guaranteed"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montessori Philosophy Pillars */}
      <PhilosophySection />

      {/* 5. Dedicated Faculty & Mentors Section */}
      <TeamMembersSection onOpenTourModal={() => setIsTourModalOpen(true)} />

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
