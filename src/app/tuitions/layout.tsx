import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tuition Centre (Class 1-12) & Engineering Maths in Kinathukadavu",
  description:
    "All-subject school tuitions for Classes 1-12 (CBSE, ICSE, State Board) and Engineering Mathematics coaching (M1-M4) in Kinathukadavu. Morning and evening batches.",
  keywords: [
    "Tuition centre in Kinathukadavu",
    "Tuition Classes near Pollachi",
    "Engineering Mathematics Tuition Coimbatore",
    "Engineering Maths Coaching Pollachi",
    "M1 M2 M3 M4 Coaching Kinathukadavu",
    "CBSE Tuitions Kinathukadavu",
    "Class 10 12 Maths Tuition Coimbatore",
    "State Board Tuition Palladam",
  ],
  alternates: {
    canonical: `${siteConfig.url}/tuitions`,
  },
  openGraph: {
    title: "Tuition Centre & Engineering Maths | Dhivith Edu Care",
    description:
      "All-subject school tuitions (CBSE/ICSE/State Board) & Engineering Mathematics coaching (M1-M4) in Kinathukadavu.",
    url: `${siteConfig.url}/tuitions`,
    images: [`${siteConfig.url}/school_images/sensory-ball-sorting-color-trays-coimbatore.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuition Centre & Engineering Maths | Dhivith Edu Care",
    description:
      "All-subject school tuitions for Classes 1-12 (CBSE, ICSE, State Board) and Engineering Mathematics coaching in Kinathukadavu.",
    images: [`${siteConfig.url}/school_images/sensory-ball-sorting-color-trays-coimbatore.webp`],
  },
};

export default function TuitionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
