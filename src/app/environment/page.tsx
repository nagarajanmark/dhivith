"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnvironmentSection } from "@/components/environment/EnvironmentSection";
import { WhyChooseUs } from "@/components/why-us/WhyChooseUs";
import { SchoolVisitCTA } from "@/components/cta/SchoolVisitCTA";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { ShieldCheck, Sun, Trees, Wind, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EnvironmentPage() {
  const { language } = useLanguage();
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      <PageHeader
        breadcrumb={language === "ta" ? "கற்றல் சூழல் & வளாகம்" : "Our Prepared Environment"}
        title={language === "ta" ? "சுதந்திர சிந்தனை & அமைதியான கற்றல் சோலை" : "Prepared for Peaceful Autonomy & Wonder"}
        highlightedWord={language === "ta" ? "அமைதியான கற்றல் சோலை" : "Prepared for Peaceful Autonomy"}
        description={language === "ta" ? "இயற்கை வெளிச்சம், பாதுகாப்பான மரத்தாலான தளபாடங்கள், குறைந்த உயர அலமாரிகள் மற்றும் பசுமையான தோட்டம் கொண்ட கிணத்துக்கடவு வளாகம்." : "Step inside our Kinathukadavu learning environment where natural daylight, non-toxic Scandinavian blonde wood, low open shelves, and organic garden terraces inspire joyful focus."}
        bannerImage="/school_images/1000227874.webp"
        gradientTheme="green"
      />

      {/* Environment Core Showcase Component */}
      <EnvironmentSection />

      {/* Health, Safety & Architecture Standards Section */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159447] bg-[#EAF8EF] px-4 py-1.5 rounded-full border border-[#159447]/20">
              {language === "ta" ? "பாதுகாப்பு & சுகாதார நெறிமுறைகள்" : "Safety & Hygiene Protocols"}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#121D28] mt-3">
              {language === "ta" ? "முழுமையான மன அமைதிக்கான பாதுகாப்பு" : "Designed for Absolute Peace of Mind"}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5E6D7A] mt-2">
              {language === "ta" ? "எங்கள் வளாகம் குழந்தைகளுக்கான உயர் சுகாதார மற்றும் பாதுகாப்பு தரநிலைகளைப் பின்பற்றுகிறது." : "Our campus adheres to stringent early-learning child-safety, hygiene, and wellness standards."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50/70 rounded-3xl p-6 border border-gray-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                24/7 CCTV & Security
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                Complete continuous monitoring in common spaces and controlled biometric entry ensuring total safety.
              </p>
            </div>

            <div className="bg-gray-50/70 rounded-3xl p-6 border border-gray-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center mb-4">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                Air Purity & Sunlight
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                Large anti-glare low glass windows, cross-ventilation, and HEPA air filtration for healthy breathing.
              </p>
            </div>

            <div className="bg-gray-50/70 rounded-3xl p-6 border border-gray-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center mb-4">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                Eco Terrace Garden
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                Raised organic planting beds, sensory herbal pathways, and safe outdoor play equipment.
              </p>
            </div>

            <div className="bg-gray-50/70 rounded-3xl p-6 border border-gray-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9E5] text-[#9A6700] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#121D28] mb-2">
                Child-Height Fixtures
              </h3>
              <p className="text-xs text-[#5E6D7A] leading-relaxed">
                Miniature sinks at 55cm, safe ceramic utensils, and low cedar shelves designed at the child&apos;s physical scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

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
