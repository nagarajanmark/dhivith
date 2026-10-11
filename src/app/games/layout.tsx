import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Interactive Brain Games & Educational Activities for Kids | DHIVITH EDU CARE",
  description:
    "Fun, educational web games designed for toddlers and preschoolers at DHIVITH EDU CARE. Phonics matching, number counting, memory cards, and shape puzzles to stimulate cognitive growth.",
  keywords: [
    "Educational Games for Kids",
    "Preschool Brain Games Online",
    "Montessori Learning Activities",
    "Kids Cognitive Games Coimbatore",
    "Dhivith Edu Care Games",
  ],
  alternates: {
    canonical: `${siteConfig.url}/games`,
  },
  openGraph: {
    title: "Interactive Educational Games for Kids | DHIVITH EDU CARE",
    description:
      "Play interactive learning games that sharpen memory, numeracy, and problem-solving skills.",
    url: `${siteConfig.url}/games`,
    images: ["/logo.png"],
  },
};

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
