import nodemailer from "nodemailer";
import { SCHOOL_INFO } from "@/data/schoolData";

export interface ContactEmailPayload {
  type?: "enquiry" | "tour-booking";
  parentName: string;
  phone: string;
  email?: string;
  childAge?: string;
  program?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

/**
 * Creates and returns a Nodemailer transporter.
 * If credentials are missing, returns null so the caller can log or mock gracefully.
 */
export function getEmailTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * 1. Admin Email Template: Notification sent to School Admin (Mrs. S. Tharani)
 */
export function generateAdminEmailHtml(data: ContactEmailPayload): string {
  const isTour = data.type === "tour-booking";
  const title = isTour
    ? "New Campus Tour Booking Request"
    : "New Admission Enquiry Received";

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #0750B8 0%, #0d6efd 60%, #159447 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
        .header p { margin: 8px 0 0; font-size: 14px; opacity: 0.9; }
        .content { padding: 32px 24px; }
        .badge { display: inline-block; background-color: #ebf3ff; color: #0750b8; padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .info-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
        .info-table td.label { font-weight: 700; color: #64748b; width: 38%; }
        .info-table td.value { font-weight: 600; color: #0f172a; }
        .highlight { color: #0750B8; font-weight: 800; }
        .cta-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; text-align: center; margin-top: 24px; }
        .btn { display: inline-block; padding: 12px 24px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 14px; margin: 6px; }
        .btn-call { background: #0750B8; color: #ffffff !important; }
        .btn-whatsapp { background: #159447; color: #ffffff !important; }
        .footer { background: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>DHIVITH EDU CARE</h1>
          <p>Montessori Pre-School, Day Care & Collegiate Academic Hub</p>
        </div>

        <div class="content">
          <div class="badge">${title}</div>
          <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">
            A new enquiry has been submitted on the Dhivith Edu Care official website with the following details:
          </p>

          <table class="info-table">
            <tr>
              <td class="label">Parent / Guardian:</td>
              <td class="value highlight">${data.parentName}</td>
            </tr>
            <tr>
              <td class="label">Contact Phone:</td>
              <td class="value"><a href="tel:${data.phone}" style="color: #0750b8; text-decoration: none;">${data.phone}</a></td>
            </tr>
            ${
              data.email
                ? `<tr>
                    <td class="label">Email Address:</td>
                    <td class="value"><a href="mailto:${data.email}" style="color: #0750b8; text-decoration: none;">${data.email}</a></td>
                  </tr>`
                : ""
            }
            ${
              data.childAge
                ? `<tr>
                    <td class="label">Child Age / Grade:</td>
                    <td class="value">${data.childAge}</td>
                  </tr>`
                : ""
            }
            ${
              data.program
                ? `<tr>
                    <td class="label">Selected Program:</td>
                    <td class="value">${data.program}</td>
                  </tr>`
                : ""
            }
            ${
              data.preferredDate
                ? `<tr>
                    <td class="label">Preferred Visit Date:</td>
                    <td class="value">${data.preferredDate}</td>
                  </tr>`
                : ""
            }
            ${
              data.preferredTime
                ? `<tr>
                    <td class="label">Preferred Time:</td>
                    <td class="value">${data.preferredTime}</td>
                  </tr>`
                : ""
            }
            ${
              data.message
                ? `<tr>
                    <td class="label">Notes / Message:</td>
                    <td class="value" style="white-space: pre-line;">${data.message}</td>
                  </tr>`
                : ""
            }
            <tr>
              <td class="label">Submission Time:</td>
              <td class="value">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST)</td>
            </tr>
          </table>

          <div class="cta-box">
            <p style="margin: 0 0 12px; font-weight: 700; font-size: 13px; color: #475569;">
              QUICK ACTION TO RESPOND TO PARENT:
            </p>
            <a href="tel:${data.phone}" class="btn btn-call">Call Parent Directly</a>
            <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Hello ${data.parentName}! Thank you for your inquiry with Dhivith Edu Care.`
  )}" class="btn btn-whatsapp">Reply via WhatsApp</a>
          </div>
        </div>

        <div class="footer">
          <strong>DHIVITH EDU CARE CAMPUS</strong><br />
          ${SCHOOL_INFO.fullAddress || SCHOOL_INFO.address}<br />
          Phone: ${SCHOOL_INFO.phone} | Email: ${SCHOOL_INFO.email}
        </div>
      </div>
    </body>
  </html>
  `;
}

/**
 * 2. User / Parent Confirmation Email Template
 * Sent directly to the parent confirming receipt of their request with warm school reassurance
 */
export function generateUserConfirmationEmailHtml(data: ContactEmailPayload): string {
  const isTour = data.type === "tour-booking";
  const headline = isTour
    ? "Campus Walkthrough Request Confirmed!"
    : "Thank You for Contacting Dhivith Edu Care!";

  const subline = isTour
    ? "We look forward to welcoming you and your child to our Vadapudur campus."
    : "We have received your admission enquiry and will connect with you shortly.";

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #0750B8 0%, #0d6efd 55%, #159447 100%); padding: 36px 24px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
        .header p { margin: 8px 0 0; font-size: 14px; opacity: 0.95; }
        .content { padding: 32px 24px; }
        .greeting { font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 8px; }
        .intro { font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 24px; }
        .summary-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; margin-bottom: 24px; }
        .summary-title { font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #0750B8; margin-top: 0; margin-bottom: 12px; }
        .summary-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; }
        .summary-label { color: #64748b; font-weight: 600; }
        .summary-val { color: #0f172a; font-weight: 700; text-align: right; }
        .highlights { background: #eaf8ef; border: 1px solid rgba(21, 148, 71, 0.2); border-radius: 14px; padding: 18px; margin-bottom: 24px; }
        .highlights h4 { margin: 0 0 8px; color: #159447; font-size: 14px; font-weight: 800; }
        .highlights p { margin: 0; font-size: 13px; color: #1e293b; line-height: 1.5; }
        .cta-container { text-align: center; margin: 28px 0 10px; }
        .btn { display: inline-block; padding: 13px 26px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 14px; margin: 6px; }
        .btn-wa { background: #159447; color: #ffffff !important; box-shadow: 0 4px 12px rgba(21, 148, 71, 0.25); }
        .btn-call { background: #0750B8; color: #ffffff !important; box-shadow: 0 4px 12px rgba(7, 80, 184, 0.25); }
        .footer { background: #f1f5f9; padding: 24px; text-align: center; font-size: 12px; color: #64748b; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Brand Header -->
        <div class="header">
          <h1>DHIVITH EDU CARE</h1>
          <p>A Montessori Pre-School, Day Care & Collegiate Academic Hub</p>
        </div>

        <div class="content">
          <h2 class="greeting">Dear ${data.parentName},</h2>
          <p class="intro">
            ${subline}
          </p>

          <!-- Request Summary Box -->
          <div class="summary-card">
            <div class="summary-title">Summary of Your Submission</div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-size: 13px;">Parent Name:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 700; font-size: 13px; text-align: right;">${data.parentName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-size: 13px;">Registered Phone:</td>
                <td style="padding: 6px 0; color: #0750B8; font-weight: 700; font-size: 13px; text-align: right;">${data.phone}</td>
              </tr>
              ${
                data.childAge
                  ? `<tr>
                      <td style="padding: 6px 0; color: #64748b; font-size: 13px;">Child's Age / Grade:</td>
                      <td style="padding: 6px 0; color: #0f172a; font-weight: 700; font-size: 13px; text-align: right;">${data.childAge}</td>
                    </tr>`
                  : ""
              }
              ${
                data.program
                  ? `<tr>
                      <td style="padding: 6px 0; color: #64748b; font-size: 13px;">Program:</td>
                      <td style="padding: 6px 0; color: #0f172a; font-weight: 700; font-size: 13px; text-align: right;">${data.program}</td>
                    </tr>`
                  : ""
              }
              ${
                data.preferredDate
                  ? `<tr>
                      <td style="padding: 6px 0; color: #64748b; font-size: 13px;">Preferred Visit Date:</td>
                      <td style="padding: 6px 0; color: #159447; font-weight: 800; font-size: 13px; text-align: right;">${data.preferredDate}</td>
                    </tr>`
                  : ""
              }
              ${
                data.preferredTime
                  ? `<tr>
                      <td style="padding: 6px 0; color: #64748b; font-size: 13px;">Preferred Time Slot:</td>
                      <td style="padding: 6px 0; color: #0f172a; font-weight: 700; font-size: 13px; text-align: right;">${data.preferredTime}</td>
                    </tr>`
                  : ""
              }
            </table>
          </div>

          <!-- Reassurance Box -->
          <div class="highlights">
            <h4>✓ What Happens Next?</h4>
            <p>
              Our Founder & Educational Director, <strong>Mrs. S. Tharani, M.Sc., PGDM, PGMTTC</strong>, or our admissions faculty will review your request and call you at <strong>${data.phone}</strong> to confirm your details.
            </p>
          </div>

          <!-- Need Instant Assistance -->
          <div class="cta-container">
            <p style="margin: 0 0 12px; font-weight: 700; font-size: 13px; color: #475569;">
              HAVE QUESTIONS RIGHT AWAY?
            </p>
            <a href="https://wa.me/${SCHOOL_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Dhivith Edu Care! I recently submitted an inquiry for my child (${data.childAge || "student"}) and would like to connect.`
  )}" class="btn btn-wa">
              Chat With Us on WhatsApp
            </a>
            <a href="tel:${SCHOOL_INFO.phoneRaw}" class="btn btn-call">
              Call Us: ${SCHOOL_INFO.phone}
            </a>
          </div>
        </div>

        <!-- Campus Footer -->
        <div class="footer">
          <strong>DHIVITH EDU CARE CAMPUS</strong><br />
          ${SCHOOL_INFO.fullAddress || SCHOOL_INFO.address}<br />
          Working Hours: Monday – Saturday (8:30 AM – 9:30 PM)<br />
          Email: <a href="mailto:${SCHOOL_INFO.email}" style="color: #0750b8; text-decoration: none;">${SCHOOL_INFO.email}</a>
        </div>
      </div>
    </body>
  </html>
  `;
}
