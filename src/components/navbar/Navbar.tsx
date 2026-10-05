"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Calendar, ArrowRight, Phone } from "lucide-react";
import { Logo } from "../ui/Logo";
import { SCHOOL_INFO } from "@/data/schoolData";

interface NavbarProps {
  onOpenTourModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTourModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Method", href: "/montessori-method" },
    { label: "Programs", href: "/programs" },
    { label: "Tuition", href: "/tuitions" },
    { label: "Environment", href: "/environment" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const handleBookVisit = () => {
    if (onOpenTourModal) {
      onOpenTourModal();
    } else {
      router.push("/contact");
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-full pointer-events-auto transition-all duration-500 px-3.5 sm:px-5 py-2 flex items-center justify-between ${
          isScrolled ? "glass-pill-scrolled" : "glass-pill"
        }`}
      >
        {/* Compact Logo */}
        <Logo size="sm" />

        {/* Short & Clean Desktop Navigation Links with Frosted Glass Hover & Active States */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "glass-item-active text-[#0750B8] font-bold shadow-xs scale-[1.02]"
                    : "text-[#2A343D] hover:text-[#0750B8] hover:bg-white/50 hover:shadow-xs"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Sleek Glass CTA Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleBookVisit}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#0750B8] to-[#0962dc] text-white text-xs font-bold shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>Book Visit</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/70 hover:bg-[#EBF3FF] text-[#121D28] hover:text-[#0750B8] transition-colors focus:outline-none border border-white/80 shadow-xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden pointer-events-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel with Glass */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white/95 backdrop-blur-2xl shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-white/40 animate-slideLeft">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200/60">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white/80 text-[#121D28] border border-gray-200"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-5 flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-[#0750B8]/10 text-[#0750B8] font-bold border border-[#0750B8]/20"
                          : "text-[#2A343D] hover:bg-white/60"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-gray-200/60 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBookVisit();
                }}
                className="w-full py-3 rounded-full bg-[#0750B8] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>Book a Campus Visit</span>
              </button>

              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="w-full py-2.5 rounded-full bg-[#EAF8EF] text-[#159447] font-bold text-xs border border-[#159447]/30 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
