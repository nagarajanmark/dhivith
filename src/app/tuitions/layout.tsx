import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tuitions (Grade 1-12) & Engineering Maths Coaching | Kinathukadavu, Pollachi, Palladam, Tirupur",
  description:
    "Expert coaching for LKG to Grade 12 (CBSE, ICSE & Tamil Nadu State Board) across all subjects, plus collegiate Engineering Mathematics (M1, M2, M3, M4) at DHIVITH EDU CARE, Kinathukadavu. Morning (5-7 AM) and Evening (5-9:30 PM) batches with 8 specialized staff members.",
  keywords: [
    "Tuition Centre Kinathukadavu",
    "Tuition Classes near Pollachi",
    "Engineering Mathematics Tuition Coimbatore",
    "Engineering Maths Coaching Pollachi",
    "M1 M2 M3 M4 Coaching Kinathukadavu",
    "CBSE Tuitions Kinathukadavu",
    "Class 10 12 Maths Tuition Coimbatore",
    "State Board Tuition Palladam",
    "Tuition Centre Tirupur",
    "Mathematics Tuition Centre Pollachi",
  ],
  alternates: {
    canonical: `${siteConfig.url}/tuitions`,
  },
  openGraph: {
    title: "Tuitions & Engineering Mathematics | DHIVITH EDU CARE Kinathukadavu",
    description:
      "All-subject school tuitions (CBSE/ICSE/State Board) & Engineering Mathematics Coaching serving Kinathukadavu, Pollachi, Coimbatore, Palladam & Tirupur.",
    url: `${siteConfig.url}/tuitions`,
    images: ["/school_images/sensory-ball-sorting-color-trays-coimbatore.webp"],
  },
};

export default function TuitionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
