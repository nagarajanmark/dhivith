"use client";
import React, { useState } from "react";
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Phone, Mail, MessageSquare, Baby, HeartHandshake } from "lucide-react";
import confetti from "canvas-confetti";
import { SCHOOL_INFO, PROGRAMS } from "@/data/schoolData";
import { useLanguage } from "@/context/LanguageContext";

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
  const [parentName, setParentName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState(defaultProgram || "pre-kg");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("09:30 AM");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!parentName.trim()) errs.parentName = language === "ta" ? "உங்கள் முழு பெயரை உள்ளிடவும்" : "Please provide your full name";
    if (!childAge.trim()) errs.childAge = language === "ta" ? "குழந்தையின் வயது அல்லது வகுப்பு தேவை" : "Child's age / grade is required";
    if (!phone.trim() || phone.length < 8) errs.phone = language === "ta" ? "சரியான தொலைபேசி எண் தேவை" : "Valid phone number required";
    if (!preferredDate) errs.preferredDate = language === "ta" ? "பார்வையிடும் தேதியை தேர்வு செய்யவும்" : "Please choose your preferred visit date";
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0750B8", "#159447", "#F36B12", "#F5B900"],
        });
      } catch {
        // fallback
      }
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Mrs. S Tharani / Dhivith Edu Care team! I would like to schedule a campus visit for my child (${childAge || "preschool"}). My name is ${parentName || "Parent"}, Phone: ${phone || ""}. Preferred Date: ${preferredDate || "Soon"}.`
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
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#0750B8] via-[#0962dc] to-[#159447] p-6 text-white relative">
          <button
            onClick={onClose}
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.parentName}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder={language === "ta" ? "எ.கா. செந்தில் குமார்" : "e.g. Senthil Kumar"}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all"
                    />
                  </div>
                  {errors.parentName && (
                    <p className="text-xs text-red-500 mt-1">{errors.parentName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.childNameAge}
                  </label>
                  <div className="relative">
                    <Baby className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="text"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      placeholder={language === "ta" ? "எ.கா. கவின், 3.5 வயது" : "e.g. Kavin, 3.5 Years (Pre-KG)"}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all"
                    />
                  </div>
                  {errors.childAge && (
                    <p className="text-xs text-red-500 mt-1">{errors.childAge}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.phone}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="744 898 1592"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@gmail.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8] transition-all"
                    />
                  </div>
                </div>
              </div>

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
                    <option value="day-care">{language === "ta" ? "டே கேர் (Day Care)" : "Day Care (1.5 - 6 Yrs)"}</option>
                    <option value="play-group">{language === "ta" ? "ப்ளே குரூப் (Play Group)" : "Play Group (2 - 3 Yrs)"}</option>
                    <option value="pre-kg">{language === "ta" ? "ப்ரீ-கேஜி (Pre-KG)" : "Pre-KG (3 - 4 Yrs)"}</option>
                    <option value="lkg">{language === "ta" ? "எல்கேஜி (LKG Montessori)" : "LKG (4 - 5 Yrs)"}</option>
                    <option value="ukg">{language === "ta" ? "யூகேஜி (UKG Preparatory)" : "UKG (5 - 6 Yrs)"}</option>
                    <option value="tuition-all">{language === "ta" ? "1-12 டியூஷன் (All Boards)" : "Tuition (LKG - 12th Std)"}</option>
                    <option value="engg-maths">{language === "ta" ? "பொறியியல் கணிதம்" : "Engineering Maths"}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                    {t.tourModal.visitDate}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3.5 top-3.5 text-[#5E6D7A]" />
                    <input
                      type="date"
                      value={preferredDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8]"
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-500 mt-1">{errors.preferredDate}</p>
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
                      <option value="09:00 AM">09:00 AM ({language === "ta" ? "காலை" : "Morning"})</option>
                      <option value="10:30 AM">10:30 AM ({language === "ta" ? "காலை" : "Morning"})</option>
                      <option value="12:00 PM">12:00 PM ({language === "ta" ? "மதியம்" : "Noon"})</option>
                      <option value="04:30 PM">04:30 PM ({language === "ta" ? "மாலை" : "Evening"})</option>
                      <option value="06:00 PM">06:00 PM ({language === "ta" ? "மாலை" : "Evening"})</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#121D28] uppercase tracking-wider mb-1">
                  {t.tourModal.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.tourModal.notesPlaceholder}
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0750B8]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#0750B8] text-white font-bold text-sm hover:bg-[#063f91] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t.tourModal.bookBtn}</span>
                      <Sparkles className="w-4 h-4 text-amber-300 group-hover:scale-125 transition-transform" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#EAF8EF] text-[#159447] border border-[#159447]/30 hover:bg-[#159447] hover:text-white transition-all text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.tourModal.whatsappBtn}</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#5E6D7A]">
                🔒 DHIVITH EDU CARE • Kinathukadavu, Coimbatore • Helpline: <strong>{SCHOOL_INFO.phone}</strong>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
