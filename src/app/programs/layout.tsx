import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Montessori Programs & Early Childhood Curriculum | DHIVITH EDU CARE Kinathukadavu",
  description:
    "Explore AMI-aligned Montessori programs at DHIVITH EDU CARE in Kinathukadavu: Day Care, Play Group, Pre-KG, LKG, and UKG. Individualized tactile learning focusing on Sensorial, Practical Life, Language, and Mathematical discovery.",
  keywords: [
    "Montessori Curriculum Kinathukadavu",
    "Early Childhood Programs Coimbatore",
    "Preschool Syllabus Pollachi",
    "Montessori Math and Sensorial Activities",
    "Play Group and Pre KG Kinathukadavu",
  ],
  alternates: {
    canonical: `${siteConfig.url}/programs`,
  },
  openGraph: {
    title: "Montessori Programs | DHIVITH EDU CARE Kinathukadavu",
    description:
      "Nurturing curiosity, concentration, and independence through authentic Montessori apparatus in Kinathukadavu.",
    url: `${siteConfig.url}/programs`,
    images: ["/school_images/montessori-self-directed-work-cycle-coimbatore.webp"],
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
