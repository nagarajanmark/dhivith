import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "The Montessori Method of Education in Kinathukadavu",
  description:
    "Discover the authentic Maria Montessori educational approach at Dhivith Edu Care in Kinathukadavu: prepared environments, tactile materials & respectful guidance.",
  keywords: [
    "Montessori Method of Education",
    "Montessori education Kinathukadavu",
    "Maria Montessori Kinathukadavu",
    "Self-directed learning preschool Coimbatore",
    "Sensory learning method Pollachi",
    "Montessori philosophy Tamil Nadu",
  ],
  alternates: {
    canonical: `${siteConfig.url}/montessori-method`,
  },
  openGraph: {
    title: "The Montessori Method of Education | Dhivith Edu Care",
    description:
      "Understand why self-directed sensorial discovery creates confident, independent, lifelong learners at Dhivith Edu Care, Kinathukadavu.",
    url: `${siteConfig.url}/montessori-method`,
    images: [`${siteConfig.url}/school_images/montessori-number-rods-math-coaching-pollachi.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Montessori Method of Education | Dhivith Edu Care",
    description:
      "Discover the authentic Maria Montessori educational approach at Dhivith Edu Care in Kinathukadavu.",
    images: [`${siteConfig.url}/school_images/montessori-number-rods-math-coaching-pollachi.webp`],
  },
};

export default function MontessoriMethodLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
