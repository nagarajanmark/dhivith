"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactSection } from "@/components/contact/ContactSection";
import { CampusLocationMap } from "@/components/contact/CampusLocationMap";
import { FaqSection } from "@/components/faq/FaqSection";
import { TourBookingModal } from "@/components/modals/TourBookingModal";

export default function ContactPage() {
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Page Header */}
      <PageHeader
        breadcrumb="Contact & Admissions"
        badge="Get in Touch"
        title="We Would Love to Welcome Your Family"
        highlightedWord="Welcome Your Family"
        description="Every Child. Every Opportunity. Every Time. Schedule an intimate campus tour, discuss your child's developmental readiness with Mrs. S Tharani, or inquire about school tuitions."
      />

      {/* Main Interactive Contact Section */}
      <ContactSection />

      {/* Location & Directions Map Section */}
      <CampusLocationMap />

      {/* FAQs Section */}
      <FaqSection />

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
