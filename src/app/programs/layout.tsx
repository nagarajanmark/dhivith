import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Montessori Programs & Early Learning Curriculum in Kinathukadavu",
  description:
    "Explore AMI-aligned Montessori programs at Dhivith Edu Care in Kinathukadavu: Day Care, Play Group, Pre-KG, LKG and UKG with sensorial and mathematical discovery.",
  keywords: [
    "Montessori Programs Kinathukadavu",
    "Montessori Curriculum Kinathukadavu",
    "Pre-KG Montessori Coimbatore",
    "LKG UKG syllabus Pollachi",
    "Early Childhood Education Kinathukadavu",
    "Sensorial Math Kindergarten Coimbatore",
    "Daycare curriculum Kinathukadavu",
  ],
  alternates: {
    canonical: `${siteConfig.url}/programs`,
  },
  openGraph: {
    title: "Montessori Programs & Early Learning Curriculum | Dhivith Edu Care",
    description:
      "Explore AMI-aligned Montessori programs at Dhivith Edu Care in Kinathukadavu: Day Care, Play Group, Pre-KG, LKG and UKG with sensorial and mathematical discovery.",
    url: `${siteConfig.url}/programs`,
    images: [`${siteConfig.url}/school_images/montessori-self-directed-work-cycle-coimbatore.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montessori Programs & Early Learning Curriculum | Dhivith Edu Care",
    description:
      "Explore Montessori curriculum for Day Care, Play Group, Pre-KG, LKG and UKG at Dhivith Edu Care in Kinathukadavu.",
    images: [`${siteConfig.url}/school_images/montessori-self-directed-work-cycle-coimbatore.webp`],
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
