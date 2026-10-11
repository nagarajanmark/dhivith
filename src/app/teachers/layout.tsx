import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Certified Teachers & Faculty | Mrs. S Tharani, Mrs. D Ramyadevi, Mrs. K Vinothini | DHIVITH EDU CARE",
  description:
    "Meet our qualified teachers at DHIVITH EDU CARE in Kinathukadavu, Coimbatore: Mrs. S Tharani (Founder & PGMTTC Montessori Director), Mrs. D Ramyadevi (M.Sc., B.Ed Kindergarten Educator), Mrs. K Vinothini (B.Sc., B.Ed Play-Based Learning Faculty), Mrs. K Eswari (Day Care Specialist), and Mr. S Rajamanickam (Campus Safety Caretaker).",
  keywords: [
    "Mrs S Tharani Founder Montessori Director",
    "Mrs D Ramyadevi KG Teacher Coimbatore",
    "Mrs K Vinothini Kindergarten Educator Pollachi",
    "Mrs K Eswari Day Care Caregiver Kinathukadavu",
    "Mr S Rajamanickam Campus Caretaker Vadapudur",
    "Montessori Teachers Kinathukadavu",
    "PGMTTC Certified Teachers Coimbatore",
    "Play School Faculty Pollachi",
    "Preschool Teachers Palladam Tirupur",
    "Dhivith Edu Care Teaching Staff",
  ],
  alternates: {
    canonical: `${siteConfig.url}/teachers`,
  },
  openGraph: {
    title: "Faculty & Certified Teachers | DHIVITH EDU CARE Kinathukadavu, Coimbatore",
    description:
      "Trained, compassionate mentors guiding every child's intellectual, emotional, and social development across Kinathukadavu, Coimbatore, Pollachi, Palladam, and Tirupur.",
    url: `${siteConfig.url}/teachers`,
    images: ["/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png"],
  },
};

export default function TeachersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
