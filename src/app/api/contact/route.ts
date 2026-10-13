import { NextRequest, NextResponse } from "next/server";
import {
  getEmailTransporter,
  generateAdminEmailHtml,
  generateUserConfirmationEmailHtml,
  ContactEmailPayload,
} from "@/lib/email";
import {
  validateParentName,
  validatePhone,
  validateChildInfo,
  validateEmail,
  validateVisitDate,
  sanitizeString,
} from "@/lib/validation";
import { SCHOOL_INFO } from "@/data/schoolData";

export async function POST(req: NextRequest) {
  try {
    const rawBody: any = await req.json();

    // 0. Anti-Spam Honeypot check
    if (rawBody.website || rawBody.honeypot || rawBody.fax) {
      console.warn("🛡️ [Security]: Bot submission blocked by honeypot field");
      return NextResponse.json(
        { success: false, error: "Spam detected." },
        { status: 400 }
      );
    }

    // 1. Strict Server-Side Validations
    const isTour = rawBody.type === "tour-booking";

    // Validate Parent Name
    const nameCheck = validateParentName(rawBody.parentName);
    if (!nameCheck.isValid) {
      return NextResponse.json(
        { success: false, error: nameCheck.error || "Invalid parent name" },
        { status: 400 }
      );
    }

    // Validate Phone (Indian 10-digit mobile)
    const phoneCheck = validatePhone(rawBody.phone);
    if (!phoneCheck.isValid) {
      return NextResponse.json(
        { success: false, error: phoneCheck.error || "Invalid phone number" },
        { status: 400 }
      );
    }

    // Validate Child Info / Age
    if (rawBody.childAge) {
      const childCheck = validateChildInfo(rawBody.childAge);
      if (!childCheck.isValid) {
        return NextResponse.json(
          { success: false, error: childCheck.error || "Invalid child information" },
          { status: 400 }
        );
      }
    } else if (isTour) {
      return NextResponse.json(
        { success: false, error: "Child's age is required" },
        { status: 400 }
      );
    }

    // Validate Email (Optional, but if given must be valid)
    if (rawBody.email) {
      const emailCheck = validateEmail(rawBody.email);
      if (!emailCheck.isValid) {
        return NextResponse.json(
          { success: false, error: emailCheck.error || "Invalid email address format" },
          { status: 400 }
        );
      }
    }

    // Validate Preferred Visit Date (if tour booking)
    if (isTour) {
      const dateCheck = validateVisitDate(rawBody.preferredDate);
      if (!dateCheck.isValid) {
        return NextResponse.json(
          { success: false, error: dateCheck.error || "Invalid visit date" },
          { status: 400 }
        );
      }
    }

    // 2. XSS Sanitization of all user inputs
    const sanitizedBody: ContactEmailPayload = {
      type: isTour ? "tour-booking" : "enquiry",
      parentName: sanitizeString(rawBody.parentName.trim()),
      phone: phoneCheck.normalized, // Stored as clean 10-digit number
      email: rawBody.email ? sanitizeString(rawBody.email.trim().toLowerCase()) : undefined,
      childAge: rawBody.childAge ? sanitizeString(rawBody.childAge.trim()) : undefined,
      program: rawBody.program ? sanitizeString(rawBody.program.trim()) : undefined,
      preferredDate: rawBody.preferredDate ? sanitizeString(rawBody.preferredDate.trim()) : undefined,
      preferredTime: rawBody.preferredTime ? sanitizeString(rawBody.preferredTime.trim()) : undefined,
      message: rawBody.message ? sanitizeString(rawBody.message.trim().slice(0, 1000)) : undefined,
    };

    // 3. Transporter & Dispatch
    const transporter = getEmailTransporter();
    const recipientEmail = process.env.TO_EMAIL || SCHOOL_INFO.email;

    // Subjects
    const adminSubject = isTour
      ? `[Campus Tour Booking] ${sanitizedBody.parentName} - Dhivith Edu Care`
      : `[Admission Enquiry] ${sanitizedBody.parentName} (${sanitizedBody.childAge || "General"}) - Dhivith Edu Care`;

    const userSubject = isTour
      ? `Campus Walkthrough Request Confirmed - Dhivith Edu Care`
      : `Thank You for Your Enquiry - Dhivith Edu Care`;

    // 4. Send email if transporter is configured
    if (transporter) {
      const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
      const sendTasks: Promise<any>[] = [];

      // Task 1: School Admin Notification
      sendTasks.push(
        transporter.sendMail({
          from: `"Dhivith Edu Care Admissions" <${fromEmail}>`,
          to: recipientEmail,
          replyTo: sanitizedBody.email || undefined,
          subject: adminSubject,
          html: generateAdminEmailHtml(sanitizedBody),
        })
      );

      // Task 2: Parent/User Confirmation
      if (sanitizedBody.email) {
        sendTasks.push(
          transporter.sendMail({
            from: `"Dhivith Edu Care" <${fromEmail}>`,
            to: sanitizedBody.email,
            replyTo: SCHOOL_INFO.email,
            subject: userSubject,
            html: generateUserConfirmationEmailHtml(sanitizedBody),
          })
        );
      }

      const results = await Promise.allSettled(sendTasks);
      const adminSent = results[0]?.status === "fulfilled";
      const userSent = sanitizedBody.email && results[1]?.status === "fulfilled";

      console.log(
        `📧 [Nodemailer]: Admin mail: ${adminSent ? "SENT" : "FAILED"}, Parent mail: ${
          userSent ? "SENT" : sanitizedBody.email ? "FAILED" : "SKIPPED (no email provided)"
        }`
      );

      return NextResponse.json({
        success: true,
        userNotified: Boolean(userSent),
        message: sanitizedBody.email
          ? "Your request has been verified and confirmed. A confirmation email has been sent to your inbox!"
          : "Your request has been verified and delivered successfully to Dhivith Edu Care.",
      });
    }

    // 5. Fallback when SMTP environment variables are not set yet (Dev logging)
    console.warn("⚠️ [Nodemailer Notice]: SMTP credentials not set in .env.local. Verified submission logged:", {
      toAdmin: recipientEmail,
      toUser: sanitizedBody.email || "(none)",
      parent: sanitizedBody.parentName,
      phone: sanitizedBody.phone,
      child: sanitizedBody.childAge,
      type: sanitizedBody.type,
    });

    return NextResponse.json({
      success: true,
      simulated: true,
      userNotified: Boolean(sanitizedBody.email),
      message:
        "Submission verified and recorded successfully. (Note: Set SMTP_USER and SMTP_PASS in .env.local for live mail delivery)",
    });
  } catch (error: any) {
    console.error("❌ [Contact API Security Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Security verification failed. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
