import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Interactive Brain Games & Educational Activities for Kids",
  description:
    "Fun, educational web games designed for toddlers and preschoolers at Dhivith Edu Care. Phonics matching, number counting, memory cards, and shape puzzles.",
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
    title: "Interactive Brain Games & Activities | Dhivith Edu Care",
    description:
      "Play interactive learning games that sharpen memory, numeracy, and problem-solving skills at Dhivith Edu Care.",
    url: `${siteConfig.url}/games`,
    images: [`${siteConfig.url}/logo.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Brain Games & Activities | Dhivith Edu Care",
    description:
      "Play interactive learning games that sharpen memory and numeracy at Dhivith Edu Care.",
    images: [`${siteConfig.url}/logo.png`],
  },
};

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
