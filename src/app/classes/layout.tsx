import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Admissions: Pre-KG, LKG, UKG & Daycare in Kinathukadavu",
  description:
    "Admissions open for Daycare, Play Group, Pre-KG, LKG and UKG at Dhivith Edu Care in Kinathukadavu, Coimbatore. Safe campus, certified educators & caring routines.",
  keywords: [
    "Preschool Admissions Kinathukadavu",
    "Pre-KG Admission Kinathukadavu",
    "LKG Montessori in Kinathukadavu",
    "UKG preparatory classes in Kinathukadavu",
    "Daycare in Kinathukadavu",
    "Play Group Kinathukadavu",
    "Preschool admission Coimbatore",
    "Montessori School near Pollachi",
    "Early Childhood Education Palladam",
  ],
  alternates: {
    canonical: `${siteConfig.url}/classes`,
  },
  openGraph: {
    title: "Admissions: Pre-KG, LKG, UKG & Daycare | Dhivith Edu Care",
    description:
      "Enroll your child at Dhivith Edu Care in Vadapudur, Kinathukadavu. Authentic Montessori curriculum, caring certified teachers, and child-safe campus.",
    url: `${siteConfig.url}/classes`,
    images: [`${siteConfig.url}/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions: Pre-KG, LKG, UKG & Daycare | Dhivith Edu Care",
    description:
      "Enroll your child at Dhivith Edu Care in Vadapudur, Kinathukadavu. Authentic Montessori curriculum and safe campus.",
    images: [`${siteConfig.url}/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp`],
  },
};

export default function ClassesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
