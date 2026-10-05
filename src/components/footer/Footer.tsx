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

interface FooterProps {
  onOpenTourModal: (programId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTourModal }) => {
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
              <strong className="text-slate-900">DHIVITH EDU CARE</strong> is a premier Montessori Pre-School and Comprehensive Academic Coaching Institution in Kinathukadavu, Coimbatore. Established July 2, 2024 by <strong className="text-slate-900">{SCHOOL_INFO.founder}, {SCHOOL_INFO.qualifications}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 shadow-xs">
              <span className="font-bold text-slate-900 block mb-1">&ldquo;{SCHOOL_INFO.motto}&rdquo;</span>
              <span className="text-amber-800/90">{SCHOOL_INFO.visionMotto} • {SCHOOL_INFO.successMotto}</span>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0750B8] mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5B900]" />
                Montessori Parenting & Academic Insights
              </div>
              {newsletterSuccess ? (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
                  ✓ Thank you! You will receive our monthly updates.
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
                    className="px-4 py-2.5 rounded-xl bg-[#0750B8] hover:bg-[#063f91] text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-base text-[#121D28] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-[#0750B8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0750B8] transition-colors">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/montessori-method" className="hover:text-[#0750B8] transition-colors">
                  Montessori Method
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#0750B8] transition-colors">
                  Preschool Programs
                </Link>
              </li>
              <li>
                <Link href="/tuitions" className="hover:text-[#0750B8] transition-colors">
                  Tuition & Coaching
                </Link>
              </li>
              <li>
                <Link href="/environment" className="hover:text-[#0750B8] transition-colors">
                  Prepared Environment
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#0750B8] transition-colors">
                  3D Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0750B8] transition-colors">
                  Admissions & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Coaching (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-base text-[#121D28] uppercase tracking-wider">
              Programs & Services
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              {PROGRAMS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onOpenTourModal(p.id)}
                    className="text-left hover:text-[#0750B8] transition-colors group flex items-start justify-between w-full"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-[#0750B8] transition-colors">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-slate-500">{p.ageRange}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-[#0750B8]/10 text-slate-600 group-hover:text-[#0750B8] border border-slate-200 transition-colors">
                      Inquire
                    </span>
                  </button>
                </li>
              ))}
              <li className="pt-2.5 border-t border-slate-200 space-y-1.5">
                <Link href="/tuitions" className="text-[#0750B8] hover:text-[#063f91] hover:underline font-semibold block">
                  • Tuition Classes (LKG - Grade 12)
                </Link>
                <Link href="/tuitions" className="text-[#0750B8] hover:text-[#063f91] hover:underline font-semibold block">
                  • Engineering Mathematics Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Leadership (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-base text-[#121D28] uppercase tracking-wider">
              Campus Contact
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
                <span className="text-slate-700">Mon–Sat: 8:30 AM – 7:30 PM</span>
              </div>
            </div>

            {/* Leadership Badge */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs shadow-xs">
              <div className="font-bold text-[#0750B8]">{SCHOOL_INFO.founder}</div>
              <div className="text-[11px] text-slate-700 font-medium">{SCHOOL_INFO.qualifications}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{SCHOOL_INFO.founderRole}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-800 font-semibold">DHIVITH EDU CARE</strong> – A Montessori Pre-School. Established July 2, 2024. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-[#0750B8] transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#0750B8] transition-colors cursor-pointer">
              Admissions Policy
            </span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-[#0750B8] transition-colors cursor-pointer">
              Coimbatore Campus
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-[#0750B8] hover:text-white hover:border-[#0750B8] text-slate-700 shadow-xs transition-colors flex items-center gap-1.5 focus:outline-none"
            aria-label="Back to top"
          >
            <span className="font-semibold text-xs">Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
