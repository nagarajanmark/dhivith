import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Compass, Home, BookOpen, GraduationCap, Phone, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | DHIVITH EDU CARE Kinathukadavu",
  description:
    "The page you are looking for does not exist or has been moved. Explore Montessori preschool admissions, programs, and tuitions at DHIVITH EDU CARE in Kinathukadavu, Coimbatore.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickLinks = [
    {
      title: "Home",
      description: "Return to DHIVITH EDU CARE homepage",
      href: "/",
      icon: Home,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      title: "Admissions & Classes",
      description: "Play Group, Pre-KG, LKG, UKG & Day Care admissions",
      href: "/classes",
      icon: BookOpen,
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      title: "Tuitions & Maths Coaching",
      description: "Grade 1-12 & Collegiate Engineering Mathematics",
      href: "/tuitions",
      icon: GraduationCap,
      color: "bg-sky-50 text-sky-600 border-sky-200",
    },
    {
      title: "Contact Campus",
      description: "Campus location, phone inquiry & tour scheduling",
      href: "/contact",
      icon: Phone,
      color: "bg-rose-50 text-rose-600 border-rose-200",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col text-slate-800">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-amber-100 border border-amber-200 text-amber-600 mb-8 shadow-sm">
            <Compass className="w-12 h-12 animate-pulse" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Error 404 • Page Not Found
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-serif mb-4">
            Oops! This Path Isn&apos;t on the Map
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg mx-auto">
            The page you are looking for might have been relocated or no longer exists. Let&apos;s get you back on track to explore DHIVITH EDU CARE.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-4 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-3"
                >
                  <div className={`p-2.5 rounded-xl border ${link.color} shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {link.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">{link.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
