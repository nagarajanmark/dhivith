import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Admissions | Kinathukadavu, Coimbatore, Pollachi, Palladam, Tirupur",
  description:
    "Contact DHIVITH EDU CARE in Vadapudur, Kinathukadavu, Coimbatore. Inquire about admissions for Day Care, Play Group, Pre-KG, LKG, UKG, and tuition classes. Call +91 74489 81592 or visit our campus.",
  keywords: [
    "Contact Dhivith Edu Care",
    "Preschool Admissions Kinathukadavu",
    "School Visit Pollachi Road",
    "Tuition Enquiries Coimbatore",
    "Dhivith Edu Care Phone Number",
    "Vadapudur Kinathukadavu School Contact",
    "Admissions Pollachi Palladam Tirupur",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact & Campus Tour | DHIVITH EDU CARE Kinathukadavu",
    description:
      "Schedule a visit to DHIVITH EDU CARE in Vadapudur, Kinathukadavu. Call +91 74489 81592 for admissions and tuition enquiries.",
    url: `${siteConfig.url}/contact`,
    images: ["/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
