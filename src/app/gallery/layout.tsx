import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Photo Gallery & Student Activities in Kinathukadavu",
  description:
    "Explore photos of hands-on Montessori activities, sensory learning, Kidspire celebrations, and tuition sessions at Dhivith Edu Care in Kinathukadavu, Coimbatore.",
  keywords: [
    "Dhivith Edu Care Gallery",
    "Montessori School Photos Kinathukadavu",
    "Preschool Activities Coimbatore",
    "Kidspire Annual Celebration Photos",
    "Preschool Photos Pollachi",
  ],
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    title: "Photo Gallery & Student Activities | Dhivith Edu Care",
    description:
      "Vibrant photo moments of young minds exploring, creating, and learning with joy at Dhivith Edu Care in Kinathukadavu.",
    url: `${siteConfig.url}/gallery`,
    images: [`${siteConfig.url}/school_images/paper-cup-pyramid-stacking-activity-kinathukadavu.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery & Student Activities | Dhivith Edu Care",
    description:
      "Explore photos of classroom activities and campus life at Dhivith Edu Care, Kinathukadavu.",
    images: [`${siteConfig.url}/school_images/paper-cup-pyramid-stacking-activity-kinathukadavu.webp`],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
