/**
 * Google Analytics 4 & Tag Manager Event Tracking Helper
 * Safely forwards conversion events (Phone Calls, WhatsApp, Admission Inquiries)
 * without hardcoding secrets or crashing if GA is blocked/unconfigured.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  parameters: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, parameters);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }
  } catch (error) {
    // Fail silently in development/production if analytics blocked by adblocker
  }
};

export const trackPhoneCall = (location: string = "Header/Navbar") => {
  trackEvent("phone_call_click", {
    event_category: "Engagement",
    event_label: "+917448981592",
    placement: location,
  });
};

export const trackWhatsAppClick = (location: string = "Float/Footer") => {
  trackEvent("whatsapp_chat_click", {
    event_category: "Conversion",
    event_label: "Admission Inquiry",
    placement: location,
  });
};

export const trackAdmissionCTA = (action: string, program?: string) => {
  trackEvent("admission_cta_click", {
    event_category: "Lead Generation",
    event_label: action,
    program_interest: program,
  });
};

export const trackTourBooking = (studentName: string, selectedGrade: string) => {
  trackEvent("generate_lead", {
    event_category: "Admissions",
    event_label: `Tour Booked: ${selectedGrade}`,
    student_grade: selectedGrade,
  });
};
