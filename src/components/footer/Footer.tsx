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
} from "lucide-react";
import { Logo } from "../ui/Logo";
import { SCHOOL_INFO, PROGRAMS } from "@/data/schoolData";
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
    <footer className="bg-slate-50 text-slate-800 pt-20 pb-12 relative overflow-hidden border-t border-slate-200">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0750B8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#159447]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="dark" size="md" />

            <p className="text-sm text-slate-600 leading-relaxed">
              {t.footer.aboutText}
            </p>

            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 shadow-xs">
              <span className="font-bold text-slate-900 block mb-1">
                {language === "ta" ? "“ஒவ்வொரு குழந்தைக்கும். ஒவ்வொரு வாய்ப்பும். ஒவ்வொரு முறையும்.”" : `“${SCHOOL_INFO.motto}”`}
              </span>
              <span className="text-amber-800/90">
                {language === "ta" ? "சிறந்த கற்றல் • ஒளிமயமான எதிர்காலம் • வெற்றி இங்கே தொடங்குகிறது!" : `${SCHOOL_INFO.visionMotto} • ${SCHOOL_INFO.successMotto}`}
              </span>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0750B8] mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5B900]" />
                {language === "ta" ? "மாண்டிசோரி கல்விச் செய்திகள்" : "Montessori Parenting & Academic Insights"}
              </div>
              {newsletterSuccess ? (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
                  {language === "ta" ? "✓ நன்றி! மாதாந்திர செய்திகள் உங்களுக்கு அனுப்பி வைக்கப்படும்." : "✓ Thank you! You will receive our monthly updates."}
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="parent@example.com"
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0750B8] shadow-xs"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
                  >
                    {language === "ta" ? "பதிவு செய்ய" : "Subscribe"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-base text-[#121D28] uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-[#0750B8] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-[#0750B8] transition-colors">
                  {t.nav.classes}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#0750B8] transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0750B8] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0750B8] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Coaching (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-base text-[#121D28] uppercase tracking-wider">
              {t.footer.programs}
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li>
                <Link href="/classes" className="hover:text-[#0750B8] font-semibold text-slate-800 transition-colors block">
                  • {t.classes.daycare}
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-[#0750B8] font-semibold text-slate-800 transition-colors block">
                  • {t.classes.playgroup} & {t.classes.prekg}
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-[#0750B8] font-semibold text-slate-800 transition-colors block">
                  • {t.classes.lkg} & {t.classes.ukg}
                </Link>
              </li>
              <li className="pt-2.5 border-t border-slate-200 space-y-1.5">
                <Link href="/classes" className="text-[#0750B8] hover:text-[#063f91] hover:underline font-semibold block">
                  • {t.classes.tuitions}
                </Link>
                <Link href="/classes" className="text-[#0750B8] hover:text-[#063f91] hover:underline font-semibold block">
                  • {t.classes.enggMaths}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Leadership (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-base text-[#121D28] uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0750B8] flex-shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-700">
                  {SCHOOL_INFO.address},<br />
                  {SCHOOL_INFO.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#159447] flex-shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phoneRaw}`} className="hover:text-[#0750B8] font-bold text-sm text-slate-900 transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F36B12] flex-shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-[#0750B8] text-slate-700 transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F5B900] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  {language === "ta" ? "திங்கள் – சனி: காலை 8:30 – இரவு 7:30" : "Mon–Sat: 8:30 AM – 7:30 PM"}
                </span>
              </div>
            </div>

            {/* Leadership Badge */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs shadow-xs">
              <div className="font-bold text-[#0750B8]">{t.about.founderName}</div>
              <div className="text-[11px] text-slate-700 font-medium">{t.about.founderQual}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{t.about.founderTitle}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-800 font-semibold">{language === "ta" ? "திவித் எடு கேர்" : "DHIVITH EDU CARE"}</strong>. {t.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-[#0750B8] transition-colors cursor-pointer">
              {language === "ta" ? "தனியுரிமைக் கொள்கை" : "Privacy Policy"}
            </span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#0750B8] transition-colors cursor-pointer">
              {language === "ta" ? "சேர்க்கை விதிமுறைகள்" : "Admissions Policy"}
            </span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#0750B8] transition-colors cursor-pointer">
              {language === "ta" ? "கோயம்புத்தூர் வளாகம்" : "Coimbatore Campus"}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-[#0750B8] hover:text-white hover:border-[#0750B8] text-slate-700 shadow-xs transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer"
            aria-label="Back to top"
          >
            <span className="font-semibold text-xs">{language === "ta" ? "மேலே செல்ல" : "Top"}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
