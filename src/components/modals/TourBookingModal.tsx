"use client";
import React, { useState } from "react";
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Phone, Mail, MessageSquare, Baby, HeartHandshake, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { SCHOOL_INFO, PROGRAMS } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";
import { trackTourBooking, trackWhatsAppClick } from "@/lib/analytics";
import {
  validateParentName,
  validatePhone,
  validateChildInfo,
  validateEmail,
  validateVisitDate,
  normalizeIndianPhone,
} from "@/lib/validation";

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({
  isOpen,
  onClose,
  defaultProgram = "",
}) => {
  const { t, language } = useLanguage();
  const isTa = language === "ta";

  // Form states
  const [parentName, setParentName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState(defaultProgram || "pre-kg");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("09:30 AM");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Anti-bot honeypot

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  // Date constraints: Min = Today, Max = 90 days from today
  const todayStr = new Date().toISOString().split("T")[0];
  const maxDateObj = new Date();
  maxDateObj.setDate(maxDateObj.getDate() + 90);
  const maxDateStr = maxDateObj.toISOString().split("T")[0];

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

    const dateCheck = validateVisitDate(preferredDate, isTa);
    if (!dateCheck.isValid) errs.preferredDate = dateCheck.error!;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Live input handlers with instant input sanitation
  const handleParentNameChange = (val: string) => {
    // Disallow numbers and script characters as user types
    const sanitized = val.replace(/[0-9<>{}/]/g, "").slice(0, 60);
    setParentName(sanitized);
    if (touched.parentName) {
      const check = validateParentName(sanitized, isTa);
      setErrors((prev) => ({ ...prev, parentName: check.isValid ? "" : check.error || "" }));
    }
  };

  const handlePhoneChange = (val: string) => {
    // Only allow numbers, spaces, plus sign, max 13 characters
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

  const handleDateChange = (val: string) => {
    setPreferredDate(val);
    if (touched.preferredDate) {
      const check = validateVisitDate(val, isTa);
      setErrors((prev) => ({ ...prev, preferredDate: check.isValid ? "" : check.error || "" }));
    }
  };

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    // Trigger validation for this field on blur
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
    } else if (field === "preferredDate") {
      const c = validateVisitDate(preferredDate, isTa);
      setErrors((prev) => ({ ...prev, preferredDate: c.isValid ? "" : c.error || "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      parentName: true,
      childAge: true,
      phone: true,
      email: true,
      preferredDate: true,
    });

    if (!validate()) return;

    // Check honeypot for bots
    if (honeypot) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    trackTourBooking(parentName, program || childAge);

    try {
      const phoneClean = normalizeIndianPhone(phone);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "tour-booking",
          parentName: parentName.trim(),
          phone: phoneClean,
          email: email.trim(),
          childAge: childAge.trim(),
          program: program,
          preferredDate,
          preferredTime,
          message: notes.trim(),
          website: honeypot, // Honeypot verification
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to book tour. Please check your information.");
      }

      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
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
            ? "மின்னஞ்சல் அனுப்புவதில் பிழை ஏற்பட்டது. தயவுசெய்து வாட்ஸ்அப் மூலம் தொடரவும்."
            : "Failed to book walkthrough. Please check your details or connect directly on WhatsApp.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrors({});
    setTouched({});
    setSubmitError(null);
    onClose();
  };

  const handleWhatsAppDirect = () => {
    trackWhatsAppClick("Tour Modal Direct WhatsApp");
    const phoneClean = normalizeIndianPhone(phone) || phone;
    const text = encodeURIComponent(
      `Hello Mrs. S Tharani / Dhivith Edu Care team! I would like to schedule a campus visit for my child (${childAge || "preschool"}). My name is ${parentName || "Parent"}, Phone: ${phoneClean}. Preferred Date: ${preferredDate || "Soon"}.`
    );
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-tour-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0750B8] via-[#0962dc] to-[#159447] p-6 text-white relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs uppercase tracking-wider mb-1.5">
            <Sparkles className="w-4 h-4" />
            <span>{t.tourModal.badge}</span>
          </div>
          <h3 id="modal-tour-title" className="font-display font-bold text-2xl sm:text-3xl">
            {t.tourModal.title}
          </h3>
          <p className="text-white/85 text-xs sm:text-sm mt-1">
            {t.tourModal.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="text-center py-8 px-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#EAF8EF] text-[#159447] flex items-center justify-center mb-5 shadow-inner animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display font-bold text-2xl text-[#121D28]">
                {t.tourModal.successTitle}
              </h4>
              <p className="text-[#5E6D7A] text-sm mt-2 max-w-md mx-auto leading-relaxed">
                {t.tourModal.successDesc} <strong className="text-[#0750B8]">{phone}</strong>.
              </p>
              {email && (
                <p className="text-xs text-[#159447] font-bold mt-2 bg-[#EAF8EF] border border-[#159447]/20 py-1.5 px-3 rounded-lg inline-block">
                  ✉️ {isTa ? "பார்வையிடல் உறுதிப்படுத்தல் மின்னஞ்சல் அனுப்பப்பட்டுள்ளது:" : "Walkthrough confirmation email sent to"} <strong>{email}</strong>
                </p>
              )}

              <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-200 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="font-semibold text-[#121D28] flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#159447]" />
                  {t.tourModal.addressLabel}
                </div>
                <p className="text-[#5E6D7A]">
                  {SCHOOL_INFO.address}<br />
                  {SCHOOL_INFO.city}
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0750B8] text-white font-semibold text-sm hover:bg-[#063f91] transition-colors shadow-md cursor-pointer"
                >
                  {t.tourModal.closeBtn}
                </button>
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#159447] text-white font-semibold text-sm hover:bg-[#117a3a] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  {t.tourModal.whatsappBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Anti-spam Honeypot Field (invisible to genuine users) */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Submit Error Banner */}
              {submitError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center justify-between gap-3 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{submitError}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs whitespace-nowrap cursor-pointer transition-all"
                  >
                    WhatsApp
                  </button>
                </div>
              )}

              {/* 1. Parent Name & Child Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.parentName} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="text"
                      value={parentName}
                      maxLength={60}
                      onChange={(e) => handleParentNameChange(e.target.value)}
                      onBlur={() => markTouched("parentName")}
                      placeholder={isTa ? "எ.கா. செந்தில் குமார்" : "e.g. Senthil Kumar"}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.parentName && touched.parentName
                          ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                  </div>
                  {errors.parentName && touched.parentName && (
                    <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.childNameAge} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Baby className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="text"
                      value={childAge}
                      maxLength={80}
                      onChange={(e) => handleChildAgeChange(e.target.value)}
                      onBlur={() => markTouched("childAge")}
                      placeholder={isTa ? "எ.கா. கவின், 3.5 வயது (Pre-KG)" : "e.g. Kavin, 3.5 Years (Pre-KG)"}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.childAge && touched.childAge
                          ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                  </div>
                  {errors.childAge && touched.childAge && (
                    <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.childAge}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* 2. Phone Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.phone} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="tel"
                      value={phone}
                      maxLength={15}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => markTouched("phone")}
                      placeholder="98765 43210"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.phone && touched.phone
                          ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                  </div>
                  {errors.phone && touched.phone ? (
                    <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  ) : (
                    <p className="text-[11px] text-gray-500 mt-1">
                      {isTa ? "10 இலக்க இந்திய மொபைல் எண் (6-9 இல் தொடங்கும்)" : "10-digit Indian mobile number (starts with 6-9)"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.email} <span className="text-gray-400 font-normal">({isTa ? "விருப்பப்படி" : "Optional"})</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="email"
                      value={email}
                      maxLength={100}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onBlur={() => markTouched("email")}
                      placeholder="parent@gmail.com"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email && touched.email
                          ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  ) : (
                    <p className="text-[11px] text-gray-500 mt-1">
                      {isTa ? "உறுதிப்படுத்தல் நகலைப் பெற மின்னஞ்சலை உள்ளிடவும்" : "Enter email to receive instant booking confirmation"}
                    </p>
                  )}
                </div>
              </div>

              {/* 3. Program, Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.programSelect}
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8]"
                  >
                    <option value="day-care">{isTa ? "டே கேர் (Day Care)" : "Day Care (1.5 - 6 Yrs)"}</option>
                    <option value="play-group">{isTa ? "ப்ளே குரூப் (Play Group)" : "Play Group (2 - 3 Yrs)"}</option>
                    <option value="pre-kg">{isTa ? "ப்ரீ-கேஜி (Pre-KG)" : "Pre-KG (3 - 4 Yrs)"}</option>
                    <option value="lkg">{isTa ? "எல்கேஜி (LKG Montessori)" : "LKG (4 - 5 Yrs)"}</option>
                    <option value="ukg">{isTa ? "யூகேஜி (UKG Preparatory)" : "UKG (5 - 6 Yrs)"}</option>
                    <option value="tuition-all">{isTa ? "1-12 டியூஷன் (All Boards)" : "Tuition (LKG - 12th Std)"}</option>
                    <option value="engg-maths">{isTa ? "பொறியியல் கணிதம்" : "Engineering Maths"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.visitDate} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="date"
                      value={preferredDate}
                      min={todayStr}
                      max={maxDateStr}
                      onChange={(e) => handleDateChange(e.target.value)}
                      onBlur={() => markTouched("preferredDate")}
                      className={`w-full pl-10 pr-3 py-2 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.preferredDate && touched.preferredDate
                          ? "border-red-400 bg-red-50/20 focus:ring-red-400"
                          : "border-gray-200 bg-white focus:ring-[#0750B8]"
                      }`}
                    />
                  </div>
                  {errors.preferredDate && touched.preferredDate && (
                    <p className="text-xs text-red-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.preferredTime}
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8]"
                    >
                      <option value="09:00 AM">09:00 AM ({isTa ? "காலை" : "Morning"})</option>
                      <option value="10:30 AM">10:30 AM ({isTa ? "காலை" : "Morning"})</option>
                      <option value="12:00 PM">12:00 PM ({isTa ? "மதியம்" : "Noon"})</option>
                      <option value="04:30 PM">04:30 PM ({isTa ? "மாலை" : "Evening"})</option>
                      <option value="06:00 PM">06:00 PM ({isTa ? "மாலை" : "Evening"})</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 4. Notes / Message */}
              <div>
                <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                  {t.tourModal.notes} <span className="text-gray-400 font-normal">({isTa ? "விருப்பப்படி" : "Optional"})</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  maxLength={500}
                  onChange={(e) => setNotes(e.target.value.slice(0, 500))}
                  placeholder={t.tourModal.notesPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-[#0750B8] hover:bg-[#063f91] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{isTa ? "சரிபார்க்கிறது..." : "Verifying & Booking..."}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.tourModal.bookBtn}</span>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-[#159447]/10 hover:bg-[#159447]/20 text-[#159447] font-bold text-sm border border-[#159447]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isTa ? "வாட்ஸ்அப் உதவி" : "Chat on WhatsApp"}</span>
                </button>
              </div>

              {/* Bottom Security Assurance Tag */}
              <div className="text-center pt-2">
                <p className="text-[11px] text-gray-500 font-medium">
                  🔒 {isTa ? "உங்கள் தகவல்கள் 100% பாதுகாப்பாக வைக்கப்படும் • ஸ்பேம் இல்லை" : "Your contact details are strictly confidential • Zero Spam"}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
