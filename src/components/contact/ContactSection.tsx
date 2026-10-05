"use client";
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Send,
  Navigation,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SectionHeading } from "../ui/SectionHeading";
import { SCHOOL_INFO, PROGRAMS } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [parentName, setParentName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceChoice, setServiceChoice] = useState("pre-kg");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!parentName.trim()) errs.parentName = language === "ta" ? "முழு பெயர் அவசியம்" : "Full name is required";
    if (!childAge.trim()) errs.childAge = language === "ta" ? "குழந்தையின் வயது அல்லது வகுப்பு தேவை" : "Child's age / grade is required";
    if (!phone.trim() || phone.length < 8) errs.phone = language === "ta" ? "சரியான தொலைபேசி எண் தேவை" : "Valid phone number is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#0750B8", "#159447", "#F36B12", "#F5B900"],
        });
      } catch {
        // fallback
      }
    }, 800);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Mrs. S Tharani / Dhivith Edu Care team! I would like to inquire about admission for my child (${childAge || "student"}). My name is ${parentName || "Parent"}. Phone: ${phone || ""}.`
    );
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0750B8]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeText={t.contact.badge}
          badgeVariant="orange"
          title={t.contact.title}
          subtitle={t.contact.desc}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Details, Map & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Leadership Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0750B8]/10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#0750B8] text-white flex items-center justify-center font-display font-bold text-lg shadow-md">
                  DT
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#121D28]">
                    {SCHOOL_INFO.founder}
                  </h3>
                  <p className="text-xs font-semibold text-[#0750B8]">
                    {SCHOOL_INFO.qualifications}
                  </p>
                  <p className="text-[11px] text-[#5E6D7A]">
                    {t.about.founderRole}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#EBF3FF] text-[#0750B8] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6D7A]">
                    {t.contact.campusAddress}
                  </div>
                  <div className="text-sm font-bold text-[#121D28] mt-0.5 leading-snug">
                    {SCHOOL_INFO.address}
                  </div>
                  <div className="text-xs font-semibold text-[#0750B8] mt-0.5">
                    {SCHOOL_INFO.city}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF8EF] text-[#159447] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6D7A]">
                    {t.contact.directPhone}
                  </div>
                  <a
                    href={`tel:${SCHOOL_INFO.phoneRaw}`}
                    className="text-base font-extrabold text-[#121D28] hover:text-[#0750B8] transition-colors block mt-0.5"
                  >
                    {SCHOOL_INFO.phone}
                  </a>
                  <div className="text-xs text-[#159447] font-semibold">
                    {t.contact.phoneAvailable}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF2E8] text-[#F36B12] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6D7A]">
                    {t.contact.officialEmail}
                  </div>
                  <a
                    href={`mailto:${SCHOOL_INFO.email}`}
                    className="text-sm font-bold text-[#121D28] hover:text-[#0750B8] transition-colors block mt-0.5"
                  >
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#FFF9E5] text-[#9A6700] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E6D7A]">
                    {t.contact.timings}
                  </div>
                  <div className="text-xs font-bold text-[#121D28] mt-0.5">
                    {t.contact.preschoolHours}
                  </div>
                  <div className="text-xs font-bold text-[#0750B8]">
                    {t.contact.tuitionHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive School Visit & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#0750B8]/10 shadow-xl">
            {isSuccess ? (
              <div className="text-center py-10 px-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#EAF8EF] text-[#159447] flex items-center justify-center mb-6 shadow-inner animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display font-bold text-3xl text-[#121D28]">
                  {t.contact.successTitle}
                </h4>
                <p className="text-[#5E6D7A] text-base mt-3 max-w-md mx-auto leading-relaxed">
                  {t.contact.successDesc} <strong className="text-[#0750B8]">{phone}</strong>.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setParentName("");
                      setChildAge("");
                      setPhone("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0750B8] text-white font-bold text-sm hover:bg-[#063f91] transition-all shadow cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#159447] text-white font-bold text-sm hover:bg-[#117a3a] transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.contact.chatWhatsapp}: {SCHOOL_INFO.phone}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-gray-100 pb-4 mb-2">
                  <h3 className="font-display font-bold text-2xl text-[#121D28]">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6D7A] mt-1">
                    {t.contact.formSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                      {t.contact.parentNameLabel}
                    </label>
                    <input
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder={t.contact.parentNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all"
                    />
                    {errors.parentName && (
                      <p className="text-xs text-red-500 mt-1">{errors.parentName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                      {t.contact.childAgeLabel}
                    </label>
                    <input
                      type="text"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      placeholder={t.contact.childAgePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all"
                    />
                    {errors.childAge && (
                      <p className="text-xs text-red-500 mt-1">{errors.childAge}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                    {t.contact.serviceLabel}
                  </label>
                  <select
                    value={serviceChoice}
                    onChange={(e) => setServiceChoice(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8]"
                  >
                    <optgroup label={language === "ta" ? "மாண்டிசோரி மழலையர் பள்ளி" : "Montessori Pre-School"}>
                      <option value="day-care">{language === "ta" ? "டே கேர் (1.5 – 6 வயது)" : "Day Care (1.5 – 6 Years)"}</option>
                      <option value="play-group">{language === "ta" ? "ப்ளே குரூப் (2 – 3 வயது)" : "Play Group (2 – 3 Years)"}</option>
                      <option value="pre-kg">{language === "ta" ? "ப்ரீ-கேஜி (3 – 4 வயது)" : "Pre-KG (3 – 4 Years)"}</option>
                      <option value="lkg">{language === "ta" ? "எல்கேஜி (4 – 5 வயது)" : "LKG (4 – 5 Years)"}</option>
                      <option value="ukg">{language === "ta" ? "யூகேஜி (5 – 6 வயது)" : "UKG (5 – 6 Years)"}</option>
                    </optgroup>
                    <optgroup label={language === "ta" ? "டியூஷன் & சிறப்புக் கல்வி" : "Academic Tuition & Coaching"}>
                      <option value="tuition-primary">{language === "ta" ? "ஆரம்பக் கல்வி டியூஷன் (LKG முதல் 5 வரை)" : "Tuition Classes (LKG to Grade 5)"}</option>
                      <option value="tuition-middle">{language === "ta" ? "நடுநிலை & உயர்நிலை டியூஷன் (6 முதல் 10 வரை)" : "Tuition Classes (Grade 6 to 10 - ICSE/CBSE/State)"}</option>
                      <option value="tuition-higher">{language === "ta" ? "மேல்நிலைக் கல்வி டியூஷன் (11 & 12 வரை)" : "Tuition Classes (Grade 11 & 12)"}</option>
                      <option value="engg-maths">{language === "ta" ? "பொறியியல் கணிதம் (Engineering Maths - M1, M2)" : "Engineering Mathematics (Diploma/B.E./B.Tech)"}</option>
                      <option value="hindi-basics">{language === "ta" ? "அடிப்படை ஹிந்தி & ஸ்போக்கன் ஹிந்தி" : "Hindi Basics & Spoken Hindi"}</option>
                      <option value="after-school">{language === "ta" ? "பள்ளிக்குப் பிந்தைய மாலை நேரப் பராமரிப்பு" : "After-School Care & Subject Support"}</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full p-4 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-4 rounded-2xl bg-[#0750B8] text-white font-bold text-sm sm:text-base hover:bg-[#063f91] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{t.contact.submitBtn}</span>
                        <Send className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#EAF8EF] text-[#159447] border border-[#159447]/30 hover:bg-[#159447] hover:text-white transition-all text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.contact.whatsappBtn}: {SCHOOL_INFO.phone}</span>
                  </button>
                </div>

                <div className="text-[11px] text-center text-[#5E6D7A] pt-2">
                  🔒 Admissions Desk: <strong>{SCHOOL_INFO.email}</strong> • Direct: <strong>{SCHOOL_INFO.phone}</strong>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
