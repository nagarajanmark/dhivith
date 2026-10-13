"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { TeamMembersSection } from "@/components/about/TeamMembersSection";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import {
  Award,
  GraduationCap,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Users,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SCHOOL_INFO } from "@/data/schoolData";
import { siteConfig } from "@/config/site";

const teachersJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Mrs. S. Tharani",
      jobTitle: "Founder & Educational Director",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "DHIVITH EDU CARE",
        url: siteConfig.url,
      },
      hasCredential: "M.Sc., PGDM, PGMTTC",
      image: `${siteConfig.url}/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png`,
      workLocation: "Kinathukadavu, Coimbatore, Tamil Nadu",
      knowsAbout: ["Montessori Pedagogy", "Early Child Development", "Collegiate Mathematics Coaching"],
    },
    {
      "@type": "Person",
      name: "Mrs. D. Ramyadevi",
      jobTitle: "KG Teacher",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "DHIVITH EDU CARE",
        url: siteConfig.url,
      },
      hasCredential: "M.Sc., B.Ed.",
      image: `${siteConfig.url}/teachers/mrs-k-ramyadevi-kindergarten-educator-pollachi-kinathukadavu.webp`,
      workLocation: "Kinathukadavu, Pollachi, Tamil Nadu",
      knowsAbout: ["Play-Based Learning", "Toddler Development", "Storytelling & Creative Art"],
    },
    {
      "@type": "Person",
      name: "Mrs. K. Vinothini",
      jobTitle: "KG Teacher",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "DHIVITH EDU CARE",
        url: siteConfig.url,
      },
      hasCredential: "B.Sc., B.Ed.",
      image: `${siteConfig.url}/teachers/mrs-k-vinothini-daycare-caregiver-specialist-kinathukadavu.jpg`,
      workLocation: "Kinathukadavu, Tamil Nadu",
      knowsAbout: ["Kindergarten Education", "Early Childhood Pedagogy", "Phonics & Play-Based Learning"],
    },
    {
      "@type": "Person",
      name: "Mrs. K. Eswari",
      jobTitle: "Care Taker / Day Care Staff",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "DHIVITH EDU CARE",
        url: siteConfig.url,
      },
      hasCredential: "Care Specialist",
      image: `${siteConfig.url}/teachers/mrs-d-eswari-kg-montessori-teacher-kinathukadavu-coimbatore.webp`,
      workLocation: "Kinathukadavu, Coimbatore, Tamil Nadu",
      knowsAbout: ["Day Care Operations", "Hygiene & Feeding Routines", "Tender Child Care"],
    },
    {
      "@type": "Person",
      name: "Mrs. S. Rajamanickam",
      jobTitle: "Care Taker",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "DHIVITH EDU CARE",
        url: siteConfig.url,
      },
      image: `${siteConfig.url}/teachers/mrs-s-rajamanickam-care-taker-vadapudur.png`,
      workLocation: "Vadapudur, Kinathukadavu, Tamil Nadu",
      knowsAbout: ["Child Safety & Care", "Motherly Supervision", "Campus Tidiness"],
    },
  ],
};

export default function TeachersPage() {
  const { language } = useLanguage();
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teachersJsonLd) }}
      />
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      <PageHeader
        breadcrumb={language === "ta" ? "ஆசிரியர்கள் & பணியாளர்கள்" : "Teachers & Staff"}
        title={
          language === "ta"
            ? "அன்பான வழிகாட்டல் & சான்றிதழ் பெற்ற ஆசிரியர்கள்"
            : "Meet Our Certified Montessori Educators & Caring Faculty"
        }
        highlightedWord={
          language === "ta" ? "சான்றிதழ் பெற்ற ஆசிரியர்கள்" : "Certified Montessori Educators"
        }
        description={
          language === "ta"
            ? "PGDNTTC சான்றிதழ் பெற்ற மாண்டிசோரி வழிகாட்டி, தகுதிவாய்ந்த மழலையர் பள்ளி ஆசிரியைகள் மற்றும் அரவணைக்கும் டே கேர் பணியாளர்கள் குழு."
            : "Meet our PGDNTTC Montessori certified directress Mrs. S Tharani, qualified B.Ed KG educators, and loving caregivers dedicated to every child in Kinathukadavu."
        }
        bannerImage="/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png"
        gradientTheme="blue"
      />

      {/* Teachers / Staff Section */}
      <TeamMembersSection onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Faculty Philosophy & Standards */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0750B8] bg-[#EBF3FF] px-4 py-1.5 rounded-full border border-[#0750B8]/15">
              {language === "ta" ? "எங்கள் கற்பித்தல் நெறிமுறை" : "Our Teaching Ethos"}
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] mt-3">
              {language === "ta"
                ? "குழந்தை மையக் கற்பித்தல் மற்றும் கனிவான கவனிப்பு"
                : "Child-Centric Mentorship Built On Respect"}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
              {language === "ta"
                ? "ஒவ்வொரு ஆசிரியரும் குழந்தைகளை தனித்துவமான திறமைகளுடன் மதித்து வழிநடத்துகின்றனர்."
                : "Our educators follow authentic Montessori observation methods, inspiring self-discipline and joyful curiosity."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 rounded-3xl bg-gray-50/80 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0F172A] mb-2">
                  {language === "ta" ? "PGMTTC & B.Ed சான்றிதழ்" : "Certified Credentials"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === "ta"
                    ? "மாண்டிசோரி சர்வதேச பயிற்சி மற்றும் அரசால் அங்கீகரிக்கப்பட்ட கல்விப் பட்டங்கள் பெற்ற தகுதிவாய்ந்த ஆசிரியர்கள்."
                    : "Postgraduate, B.Ed, and specialized PGMTTC Montessori qualifications ensuring state-of-the-art early childhood pedagogy."}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-200 text-xs font-bold text-[#159447]">
                ✓ {language === "ta" ? "அங்கீகரிக்கப்பட்ட கல்வித்தரம்" : "Qualified & Trained"}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50/80 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0F172A] mb-2">
                  {language === "ta" ? "1:10 தனிநபர் விகிதம்" : "1:10 Teacher-Child Ratio"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === "ta"
                    ? "கூட்ட நெரிசலற்ற வகுப்பறைகளில் ஒவ்வொரு குழந்தைக்கும் ஆசிரியர் அதிக நேரம் ஒதுக்கி அன்புடன் வழிநடத்துகிறார்."
                    : "Intimate class sizes guarantee personalized observation, individualized lesson pacing, and deep emotional bonding."}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-200 text-xs font-bold text-[#0750B8]">
                ✓ {language === "ta" ? "தனிநபர் கவனம்" : "Personalized Care"}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50/80 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0F172A] mb-2">
                  {language === "ta" ? "அன்பான தாய்மடி பாதுகாப்பு" : "Tender & Loving Care"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {language === "ta"
                    ? "கனிவான பராமரிப்பாளர்கள் மூலம் குழந்தைகளுக்கு சுகாதாரம், உணவு நேரம் மற்றும் பாதுகாப்பான நல்வாழ்வு."
                    : "Loving caregivers ensure clean sanitation, nutritious meals, soothing naps, and a safe home-away-from-home sanctuary."}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-200 text-xs font-bold text-[#F36B12]">
                ✓ {language === "ta" ? "பாதுகாப்பான சூழல்" : "Safe & Motherly Haven"}
              </div>
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
      />
    </main>
  );
}
