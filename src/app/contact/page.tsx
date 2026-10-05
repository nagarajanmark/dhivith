"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactSection } from "@/components/contact/ContactSection";
import { CampusLocationMap } from "@/components/contact/CampusLocationMap";
import { FaqSection } from "@/components/faq/FaqSection";
import { TourBookingModal } from "@/components/modals/TourBookingModal";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121D28]">
      <Navbar onOpenTourModal={() => setIsTourModalOpen(true)} />

      {/* Page Header */}
      <PageHeader
        breadcrumb={t.contact.breadcrumb}
        badge={t.contact.badge}
        title={t.contact.title}
        highlightedWord={t.contact.highlight}
        description={t.contact.desc}
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
