import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Certified Teachers & Staff | Mrs. S Tharani, Mrs. D Ramyadevi, Mrs. K Vinothini, Mrs. K Eswari | DHIVITH EDU CARE",
  description:
    "Meet our qualified educators and dedicated staff at DHIVITH EDU CARE in Kinathukadavu, Coimbatore: Mrs. S Tharani (Founder & Educational Director, M.Sc., PGDPM, PGDNTTC), Mrs. D Ramyadevi (KG Teacher, M.Sc., B.Ed.), Mrs. K Vinothini (KG Teacher, B.Sc., B.Ed.), Mrs. K Eswari (Care Taker / Day Care Staff), and Mrs. S Rajamanickam (Care Taker).",
  keywords: [
    "Mrs S Tharani Founder Educational Director",
    "Mrs D Ramyadevi KG Teacher Kinathukadavu",
    "Mrs K Vinothini KG Teacher Coimbatore",
    "Mrs K Eswari Care Taker Day Care Staff",
    "Mrs S Rajamanickam Care Taker Vadapudur",
    "Montessori Teachers Kinathukadavu",
    "PGDNTTC Certified Teachers Coimbatore",
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
