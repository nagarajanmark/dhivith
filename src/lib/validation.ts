/**
 * Enterprise-grade validation utility for Dhivith Edu Care forms.
 * Used on both client-side forms and server-side Next.js API routes.
 */

// Common dummy numbers to reject
const DUMMY_PHONE_NUMBERS = new Set([
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
  "1234567890",
  "0123456789",
  "9876543210",
]);

/**
 * Normalizes phone numbers to standard 10-digit Indian mobile format
 */
export function normalizeIndianPhone(input: string): string {
  // Strip all non-digit characters
  let digits = input.replace(/\D/g, "");

  // If starts with 91 and has 12 digits, strip country code 91
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.slice(2);
  }
  // If starts with 0 and has 11 digits (trunk prefix), strip 0
  else if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  return digits;
}

/**
 * Validates Indian Mobile / WhatsApp number:
 * - Exactly 10 digits
 * - Starts with 6, 7, 8, or 9
 * - Not a known sequential or repeated dummy number
 */
export function validatePhone(phone: string, isTamil = false): { isValid: boolean; normalized: string; error?: string } {
  if (!phone || typeof phone !== "string" || !phone.trim()) {
    return {
      isValid: false,
      normalized: "",
      error: isTamil ? "மொபைல் எண் அவசியம்" : "Mobile / WhatsApp number is required",
    };
  }

  const normalized = normalizeIndianPhone(phone);

  if (normalized.length !== 10) {
    return {
      isValid: false,
      normalized,
      error: isTamil
        ? `10 இலக்க மொபைல் எண்ணை உள்ளிடவும் (தற்போது ${normalized.length} இலக்கங்கள் உள்ளன)`
        : `Please enter a valid 10-digit mobile number (currently ${normalized.length} digits)`,
    };
  }

  // Must start with 6, 7, 8, or 9
  if (!/^[6-9]/.test(normalized)) {
    return {
      isValid: false,
      normalized,
      error: isTamil
        ? "இந்திய மொபைல் எண் 6, 7, 8 அல்லது 9 இல் தொடங்க வேண்டும்"
        : "Indian mobile number must start with 6, 7, 8, or 9",
    };
  }

  // Reject dummy repeating numbers
  if (DUMMY_PHONE_NUMBERS.has(normalized)) {
    return {
      isValid: false,
      normalized,
      error: isTamil ? "சரியான மொபைல் எண்ணை உள்ளிடவும்" : "Please enter a valid, active mobile number",
    };
  }

  return { isValid: true, normalized };
}

/**
 * Validates Parent / Guardian Name:
 * - Minimum 2 characters, maximum 60 characters
 * - Letters (English & Tamil), spaces, dots, apostrophes only
 * - No numbers or code injection
 */
export function validateParentName(name: string, isTamil = false): { isValid: boolean; error?: string } {
  if (!name || typeof name !== "string" || !name.trim()) {
    return {
      isValid: false,
      error: isTamil ? "பெற்றோர் பெயர் அவசியம்" : "Parent / Guardian name is required",
    };
  }

  const trimmed = name.trim();

  if (trimmed.length < 2) {
    return {
      isValid: false,
      error: isTamil ? "பெயர் குறைந்தது 2 எழுத்துக்கள் இருக்க வேண்டும்" : "Name must be at least 2 characters",
    };
  }

  if (trimmed.length > 60) {
    return {
      isValid: false,
      error: isTamil ? "பெயர் 60 எழுத்துக்களுக்கு மிகாமல் இருக்க வேண்டும்" : "Name must not exceed 60 characters",
    };
  }

  // Allow English letters, Tamil unicode characters (\u0B80-\u0BFF), spaces, dots, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\u0B80-\u0BFF\s.'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return {
      isValid: false,
      error: isTamil
        ? "பெயரில் எண்களோ அல்லது சிறப்பு குறியீடுகளோ இருக்கக்கூடாது"
        : "Name should only contain letters, spaces, and initials (no numbers)",
    };
  }

  return { isValid: true };
}

/**
 * Validates Child's Name & Age / Class:
 * - Disallow adult ages (e.g. 33) when raw number is given
 * - School serves Daycare, Preschool (1.5-6 yrs) and Tuition (Grades 1-12, age up to 18)
 * - Must be meaningful string
 */
export function validateChildInfo(info: string, isTamil = false): { isValid: boolean; error?: string } {
  if (!info || typeof info !== "string" || !info.trim()) {
    return {
      isValid: false,
      error: isTamil
        ? "குழந்தையின் பெயர் & வயது அல்லது வகுப்பு தேவை"
        : "Child's name & age / class is required",
    };
  }

  const trimmed = info.trim();

  if (trimmed.length < 2) {
    return {
      isValid: false,
      error: isTamil ? "குழந்தையின் விவரங்களை தெளிவாக உள்ளிடவும்" : "Please provide valid child details",
    };
  }

  if (trimmed.length > 80) {
    return {
      isValid: false,
      error: isTamil ? "80 எழுத்துக்களுக்கு மிகாமல் இருக்க வேண்டும்" : "Must not exceed 80 characters",
    };
  }

  // Check if user entered an adult age (e.g. "33", "33 yrs", "Age 33", "33 years", "33 வயது")
  const pureAgeMatch = trimmed.match(/^(\s*(?:age|வயது)?\s*[:\-\s]*)?(\d{1,3})\s*(?:yrs|years|year|yr|வயது)?\s*$/i);
  if (pureAgeMatch) {
    const ageNum = parseInt(pureAgeMatch[2], 10);
    if (ageNum > 18) {
      return {
        isValid: false,
        error: isTamil
          ? `குழந்தையின் வயது 1.5 முதல் 18 வரை மட்டுமே இருக்க வேண்டும் (உள்ளிடப்பட்டது: ${ageNum}). குழந்தையின் பெயர் மற்றும் வகுப்பை உள்ளிடவும்.`
          : `Child age must be between 1.5 and 18 years (entered: ${ageNum}). Please provide child's name along with grade/age.`,
      };
    }
    if (ageNum < 1) {
      return {
        isValid: false,
        error: isTamil
          ? "சரியான குழந்தையின் வயதை உள்ளிடவும் (எ.கா. 3 வயது)"
          : "Please enter a valid age (e.g. 3.5 Years or Pre-KG)",
      };
    }
  }

  // Reject if it's purely numbers with no child name (even if <= 18, advise to include name)
  if (/^\d+$/.test(trimmed)) {
    const ageNum = parseInt(trimmed, 10);
    if (ageNum >= 1 && ageNum <= 18) {
      return {
        isValid: false,
        error: isTamil
          ? `தயவுசெய்து குழந்தையின் பெயரையும் உள்ளிடவும் (எ.கா. கவின், ${ageNum} வயது)`
          : `Please include the child's name as well (e.g. Kavin, ${ageNum} Years)`,
      };
    }
  }

  // Disallow code or HTML tags
  if (/[<>{}]/.test(trimmed)) {
    return {
      isValid: false,
      error: isTamil ? "தவறான குறியீடுகள் தவிர்க்கப்பட வேண்டும்" : "Special code characters are not allowed",
    };
  }

  return { isValid: true };
}

/**
 * Validates Email Address (RFC 5322 Standard):
 * - Optional field, but if provided, must be strictly valid
 */
export function validateEmail(email: string, isTamil = false): { isValid: boolean; error?: string } {
  if (!email || !email.trim()) {
    return { isValid: true }; // Optional field
  }

  const trimmed = email.trim();

  if (trimmed.length > 100) {
    return {
      isValid: false,
      error: isTamil ? "மின்னஞ்சல் 100 எழுத்துக்களுக்குள் இருக்க வேண்டும்" : "Email must not exceed 100 characters",
    };
  }

  // Standard RFC 5322 Email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      error: isTamil ? "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும் (எ.கா. name@gmail.com)" : "Please enter a valid email address (e.g. name@gmail.com)",
    };
  }

  return { isValid: true };
}

/**
 * Validates Preferred Visit Date:
 * - Must not be in the past
 * - Must not be more than 90 days in the future
 */
export function validateVisitDate(dateStr: string, isTamil = false): { isValid: boolean; error?: string } {
  if (!dateStr || !dateStr.trim()) {
    return {
      isValid: false,
      error: isTamil ? "பார்வையிடும் தேதியை தேர்வு செய்யவும்" : "Please select your preferred visit date",
    };
  }

  const selectedDate = new Date(`${dateStr}T00:00:00`);
  if (isNaN(selectedDate.getTime())) {
    return {
      isValid: false,
      error: isTamil ? "சரியான தேதியை உள்ளிடவும்" : "Please select a valid date",
    };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return {
      isValid: false,
      error: isTamil ? "கடந்த தேதிகளை தேர்வு செய்ய முடியாது" : "Visit date cannot be in the past",
    };
  }

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 90);
  maxDate.setHours(23, 59, 59, 999);

  if (selectedDate > maxDate) {
    return {
      isValid: false,
      error: isTamil
        ? "அடுத்த 90 நாட்களுக்குள் ஒரு தேதியைத் தேர்ந்தெடுக்கவும்"
        : "Please choose a date within the next 90 days",
    };
  }

  return { isValid: true };
}

/**
 * HTML Sanitizer to prevent XSS injection in emails or database
 */
export function sanitizeString(input: string): string {
  if (!input) return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}
