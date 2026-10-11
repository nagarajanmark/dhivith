import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Admissions | Play Group, Pre-KG, LKG, UKG & Day Care | Kinathukadavu, Coimbatore, Pollachi",
  description:
    "Admissions open at DHIVITH EDU CARE for Day Care, Play Group, Pre-KG, LKG & UKG in Kinathukadavu, Coimbatore. Serving families from Kinathukadavu, Pollachi, Palladam & Coimbatore with child-safe facilities and certified educators.",
  keywords: [
    "Preschool Admissions Kinathukadavu",
    "Play Group Kinathukadavu",
    "Pre-KG Admission Coimbatore",
    "LKG UKG School Kinathukadavu",
    "Day Care Center Kinathukadavu",
    "Best Play School in Pollachi",
    "Montessori School near Coimbatore",
    "Pre-KG Admission Pollachi",
    "Early Childhood Education Palladam",
  ],
  alternates: {
    canonical: `${siteConfig.url}/classes`,
  },
  openGraph: {
    title: "Admissions | Play Group, Pre-KG, LKG, UKG & Day Care | DHIVITH EDU CARE",
    description:
      "Enroll your child at DHIVITH EDU CARE, Vadapudur, Kinathukadavu. Authentic Montessori curriculum, caring certified teachers, and safe campus.",
    url: `${siteConfig.url}/classes`,
    images: ["/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp"],
  },
};

export default function ClassesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
