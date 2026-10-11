import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "The Montessori Method of Education | DHIVITH EDU CARE Kinathukadavu",
  description:
    "Discover the authentic Maria Montessori educational approach at DHIVITH EDU CARE in Kinathukadavu, Coimbatore. Prepared environments, self-directed learning, didactic tactile apparatus, and respectful guidance.",
  keywords: [
    "Montessori Method of Education",
    "Maria Montessori Kinathukadavu",
    "Self-directed learning preschool Coimbatore",
    "Sensory learning method Pollachi",
    "Montessori philosophy Tamil Nadu",
  ],
  alternates: {
    canonical: `${siteConfig.url}/montessori-method`,
  },
  openGraph: {
    title: "The Montessori Method | DHIVITH EDU CARE Kinathukadavu",
    description:
      "Understand why self-directed sensorial discovery creates confident, independent, lifelong learners.",
    url: `${siteConfig.url}/montessori-method`,
    images: ["/school_images/montessori-number-rods-math-coaching-pollachi.webp"],
  },
};

export default function MontessoriMethodLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
