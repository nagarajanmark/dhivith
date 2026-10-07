"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Sparkles,
  GraduationCap,
  Calendar,
  MessageSquare,
  ArrowRight,
  Award,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Logo } from "../ui/Logo";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
  onOpenTourModal: (programId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTourModal }) => {
  const { language, t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes("@")) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterSuccess(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-white text-[#2D3748] pt-16 sm:pt-20 pb-10 relative overflow-hidden border-t-2 border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
      {/* Soft Ambient Luminous Highlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0750B8]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#159447]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
      
        {/* 2. Main 4-Column Mega Grid (Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-gray-200">
          
          {/* Column 1: Brand, Legacy & Vision Quote (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="dark" size="md" showText={true} />

            <p className="text-xs sm:text-sm text-[#5E6D7A] leading-relaxed font-normal">
              {t.footer.aboutText}
            </p>

            {/* Quote Pill Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-white border-2 border-amber-200/80 text-xs shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/20 rounded-full blur-xl pointer-events-none" />
              <span className="font-extrabold text-[#9A3412] block mb-1">
                {language === "ta"
                  ? "“ஒவ்வொரு குழந்தைக்கும். ஒவ்வொரு வாய்ப்பும். எப்போதும்.”"
                  : `“${SCHOOL_INFO.motto}”`}
              </span>
              <span className="text-amber-900/80 text-[11px] leading-relaxed block font-medium">
                {language === "ta"
                  ? "சிறந்த கற்றல் • சிறந்த எதிர்காலம் • வெற்றி இங்கே தொடங்குகிறது!"
                  : `${SCHOOL_INFO.visionMotto} • ${SCHOOL_INFO.successMotto}`}
              </span>
            </div>

            {/* Verified Accreditation Badges */}
            <div className="flex items-center gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EAF8EF] border border-[#159447]/20 text-xs font-bold text-[#159447] shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#159447]" />
                <span>PGMTTC Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EBF3FF] border border-[#0750B8]/20 text-xs font-bold text-[#0750B8] shadow-xs">
                <Shield className="w-3.5 h-3.5 text-[#0750B8]" />
                <span>Child-Safe Campus</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-[#121D28] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#0750B8] rounded-full" />
              <span>{t.footer.quickLinks}</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#5E6D7A]">
              <li>
                <Link href="/" className="hover:text-[#0750B8] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0750B8] group-hover:translate-x-0.5 transition-all" />
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-[#0750B8] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0750B8] group-hover:translate-x-0.5 transition-all" />
                  <span>{t.nav.classes}</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#0750B8] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0750B8] group-hover:translate-x-0.5 transition-all" />
                  <span>{t.nav.gallery}</span>
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-[#F36B12] hover:text-[#d95806] font-bold transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F36B12] group-hover:translate-x-0.5 transition-all" />
                  <span>🎮 {t.nav.games}</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#F36B12] text-white text-[9px] font-black uppercase">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0750B8] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0750B8] group-hover:translate-x-0.5 transition-all" />
                  <span>{t.nav.about}</span>
                </Link>
              </li>
             
              <li>
                <Link href="/contact" className="hover:text-[#0750B8] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0750B8] group-hover:translate-x-0.5 transition-all" />
                  <span>{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic & Montessori Pathways (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-[#121D28] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#159447] rounded-full" />
              <span>{t.footer.programs}</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-1.5 shadow-xs">
                <div className="font-extrabold text-[#0750B8] text-[11px] uppercase tracking-wider">
                  {language === "ta" ? "மழலையர் பள்ளிப் பிரிவுகள்" : "Early Childhood Programs"}
                </div>
                <ul className="space-y-1 text-[#4A5568] font-medium">
                  <li>
                    <Link href="/classes" className="hover:text-[#0750B8] transition-colors block">
                      • {t.classes.daycare} (6 Months+)
                    </Link>
                  </li>
                  <li>
                    <Link href="/classes" className="hover:text-[#0750B8] transition-colors block">
                      • {t.classes.playgroup} & {t.classes.prekg}
                    </Link>
                  </li>
                  <li>
                    <Link href="/classes" className="hover:text-[#0750B8] transition-colors block">
                      • {t.classes.lkg} & {t.classes.ukg}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-1.5 shadow-xs">
                <div className="font-extrabold text-[#159447] text-[11px] uppercase tracking-wider">
                  {language === "ta" ? "அனைத்துப் பாட டியூஷன் & கணிதம்" : "Academic Coaching & Maths"}
                </div>
                <ul className="space-y-1 text-[#4A5568] font-medium">
                  <li>
                    <Link href="/classes" className="hover:text-[#159447] transition-colors block">
                      • LKG to Grade 12 (CBSE / ICSE / State)
                    </Link>
                  </li>
                  <li>
                    <Link href="/classes" className="hover:text-[#159447] transition-colors block">
                      • Engineering Mathematics (M1, M2, M3, M4)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Contact, Leadership & Newsletter (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-[#121D28] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#F36B12] rounded-full" />
              <span>{t.footer.contactInfo}</span>
            </h4>

            {/* Direct Contact List */}
            <div className="space-y-2.5 text-xs text-[#4A5568]">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-snug">
                  {SCHOOL_INFO.address},<br />
                  <strong className="text-[#121D28] font-bold">{SCHOOL_INFO.city}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${SCHOOL_INFO.phoneRaw}`} className="hover:text-[#0750B8] font-extrabold text-sm text-[#121D28] transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-[#0750B8] text-[#4A5568] font-medium transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#4A5568] font-medium">
                  {language === "ta" ? "திங்கள் – சனி: 8:30 AM – 7:30 PM" : "Mon–Sat: 8:30 AM – 7:30 PM"}
                </span>
              </div>
            </div>

            {/* Leadership Spotlight Card */}
            <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200 text-xs shadow-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0750B8] text-white flex items-center justify-center font-black text-xs flex-shrink-0 shadow-sm">
                DT
              </div>
              <div className="min-w-0">
                <div className="font-extrabold text-[#121D28] flex items-center gap-1 truncate">
                  <span>{t.about.founderName}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#159447] flex-shrink-0" />
                </div>
                <div className="text-[11px] text-[#0750B8] font-semibold truncate">{t.about.founderQual}</div>
                <div className="text-[10px] text-gray-500">{t.about.founderTitle}</div>
              </div>
            </div>

         

          </div>

        </div>

        {/* 3. Luxe Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E6D7A]">
          <div className="text-center sm:text-left font-medium">
            © {new Date().getFullYear()} <strong className="text-[#121D28] font-bold">{language === "ta" ? "திவித் எடு கேர்" : "DHIVITH EDU CARE"}</strong>. {t.footer.copyright}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs text-[#5E6D7A] font-medium">
            <span className="hover:text-[#0750B8] transition-colors cursor-pointer">
              {language === "ta" ? "தனியுரிமைக் கொள்கை" : "Privacy Policy"}
            </span>
            <span className="text-gray-300">•</span>
            <span className="hover:text-[#0750B8] transition-colors cursor-pointer">
              {language === "ta" ? "சேர்க்கை விதிமுறைகள்" : "Admissions Policy"}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-[#159447] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#159447]" />
              {language === "ta" ? "கிணத்துக்கடவு, கோயம்புத்தூர்" : "Kinathukadavu, Coimbatore"}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 px-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-[#0750B8] hover:text-white hover:border-[#0750B8] text-[#121D28] shadow-xs transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer group font-bold"
            aria-label="Back to top"
          >
            <span className="text-xs">{language === "ta" ? "மேலே செல்ல" : "Top"}</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
