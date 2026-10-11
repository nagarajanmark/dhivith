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
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SectionHeading } from "../ui/SectionHeading";
import { SCHOOL_INFO, PROGRAMS } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";
import {
  validateParentName,
  validatePhone,
  validateChildInfo,
  validateEmail,
  normalizeIndianPhone,
} from "@/lib/validation";

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isTa = language === "ta";

  const [parentName, setParentName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceChoice, setServiceChoice] = useState("pre-kg");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Anti-bot honeypot

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Comprehensive Form Validation
  const validate = () => {
    const errs: Record<string, string> = {};

    const nameCheck = validateParentName(parentName, isTa);
    if (!nameCheck.isValid) errs.parentName = nameCheck.error!;

    const childCheck = validateChildInfo(childAge, isTa);
    if (!childCheck.isValid) errs.childAge = childCheck.error!;

    const phoneCheck = validatePhone(phone, isTa);
    if (!phoneCheck.isValid) errs.phone = phoneCheck.error!;

    const emailCheck = validateEmail(email, isTa);
    if (!emailCheck.isValid) errs.email = emailCheck.error!;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Real-time input handling with active sanitization
  const handleParentNameChange = (val: string) => {
    // Strip numbers and code injection characters immediately
    const sanitized = val.replace(/[0-9<>{}/]/g, "").slice(0, 60);
    setParentName(sanitized);
    if (touched.parentName) {
      const check = validateParentName(sanitized, isTa);
      setErrors((prev) => ({ ...prev, parentName: check.isValid ? "" : check.error || "" }));
    }
  };

  const handlePhoneChange = (val: string) => {
    // Digits, spaces, plus sign, max 15 characters
    const filtered = val.replace(/[^0-9+\s-]/g, "").slice(0, 15);
    setPhone(filtered);
    if (touched.phone) {
      const check = validatePhone(filtered, isTa);
      setErrors((prev) => ({ ...prev, phone: check.isValid ? "" : check.error || "" }));
    }
  };

  const handleChildAgeChange = (val: string) => {
    const filtered = val.replace(/[<>{}/]/g, "").slice(0, 80);
    setChildAge(filtered);
    if (touched.childAge) {
      const check = validateChildInfo(filtered, isTa);
      setErrors((prev) => ({ ...prev, childAge: check.isValid ? "" : check.error || "" }));
    }
  };

  const handleEmailChange = (val: string) => {
    const trimmed = val.trim().slice(0, 100);
    setEmail(trimmed);
    if (touched.email) {
      const check = validateEmail(trimmed, isTa);
      setErrors((prev) => ({ ...prev, email: check.isValid ? "" : check.error || "" }));
    }
  };

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === "parentName") {
      const c = validateParentName(parentName, isTa);
      setErrors((prev) => ({ ...prev, parentName: c.isValid ? "" : c.error || "" }));
    } else if (field === "phone") {
      const c = validatePhone(phone, isTa);
      setErrors((prev) => ({ ...prev, phone: c.isValid ? "" : c.error || "" }));
    } else if (field === "childAge") {
      const c = validateChildInfo(childAge, isTa);
      setErrors((prev) => ({ ...prev, childAge: c.isValid ? "" : c.error || "" }));
    } else if (field === "email") {
      const c = validateEmail(email, isTa);
      setErrors((prev) => ({ ...prev, email: c.isValid ? "" : c.error || "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      parentName: true,
      childAge: true,
      phone: true,
      email: true,
    });

    if (!validate()) {
      return;
    }

    // Bot detection check
    if (honeypot) {
      console.warn("Spam submission blocked");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const cleanPhone = normalizeIndianPhone(phone);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "enquiry",
          parentName: parentName.trim(),
          phone: cleanPhone,
          email: email.trim() || undefined,
          childAge: childAge.trim(),
          program: serviceChoice,
          message: message.trim() || undefined,
          website: honeypot || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry");
      }

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
    } catch (err: any) {
      setSubmitError(
        err?.message ||
          (isTa
            ? "மின்னஞ்சல் அனுப்புவதில் பிழை ஏற்பட்டது. தயவுசெய்து வாட்ஸ்அப் மூலம் தொடர்பு கொள்ளவும்."
            : "Failed to submit enquiry. Please try again or connect directly on WhatsApp.")
      );
    } finally {
      setIsSubmitting(false);
    }
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
                {email && (
                  <p className="text-xs text-[#159447] font-bold mt-2 bg-[#EAF8EF] border border-[#159447]/20 py-1.5 px-3 rounded-lg inline-block">
                    ✉️ {language === "ta" ? "உறுதிப்படுத்தல் மின்னஞ்சல் உங்கள் முகவரிக்கு அனுப்பப்பட்டுள்ளது:" : "Confirmation email sent to"} <strong>{email}</strong>
                  </p>
                )}

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

                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center justify-between gap-3">
                    <span>{submitError}</span>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs whitespace-nowrap cursor-pointer transition-all"
                    >
                      WhatsApp
                    </button>
                  </div>
                )}

                {/* Hidden anti-bot honeypot */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden pointer-events-none opacity-0 h-0 w-0 absolute"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                      {t.contact.parentNameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={parentName}
                      onChange={(e) => handleParentNameChange(e.target.value)}
                      onBlur={() => markTouched("parentName")}
                      placeholder={t.contact.parentNamePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.parentName && errors.parentName
                          ? "border-red-400 bg-red-50/30 focus:ring-red-400 focus:border-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                    {touched.parentName && errors.parentName && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.parentName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                      {t.contact.childAgeLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={childAge}
                      onChange={(e) => handleChildAgeChange(e.target.value)}
                      onBlur={() => markTouched("childAge")}
                      placeholder={t.contact.childAgePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.childAge && errors.childAge
                          ? "border-red-400 bg-red-50/30 focus:ring-red-400 focus:border-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                    {touched.childAge && errors.childAge && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.childAge}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                      {t.contact.phoneLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => markTouched("phone")}
                      placeholder={t.contact.phonePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.phone && errors.phone
                          ? "border-red-400 bg-red-50/30 focus:ring-red-400 focus:border-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1.5">
                      {t.contact.emailLabel} <span className="text-gray-400 text-[10px]">({isTa ? "விருப்பத்தேர்வு" : "Optional"})</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onBlur={() => markTouched("email")}
                      placeholder={t.contact.emailPlaceholder}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.email && errors.email
                          ? "border-red-400 bg-red-50/30 focus:ring-red-400 focus:border-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
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
