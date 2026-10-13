import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Certified Montessori Teachers & Caring Faculty in Kinathukadavu",
  description:
    "Meet our qualified educators and caring staff at Dhivith Edu Care in Kinathukadavu, led by Mrs. S Tharani with certified KG teachers and loving caretakers.",
  keywords: [
    "Montessori Teachers Kinathukadavu",
    "Mrs S Tharani Founder Educational Director",
    "PGDNTTC Certified Teachers Coimbatore",
    "Play School Faculty Pollachi",
    "Preschool Teachers Kinathukadavu",
    "Dhivith Edu Care Teaching Staff",
  ],
  alternates: {
    canonical: `${siteConfig.url}/teachers`,
  },
  openGraph: {
    title: "Certified Montessori Teachers & Caring Faculty | Dhivith Edu Care",
    description:
      "Trained, compassionate mentors guiding every child's intellectual, emotional, and social development at Dhivith Edu Care in Kinathukadavu.",
    url: `${siteConfig.url}/teachers`,
    images: [`${siteConfig.url}/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Montessori Teachers & Caring Faculty | Dhivith Edu Care",
    description:
      "Meet our qualified educators and caring staff at Dhivith Edu Care in Kinathukadavu.",
    images: [`${siteConfig.url}/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png`],
  },
};

export default function TeachersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
