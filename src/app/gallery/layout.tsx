import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Photo Gallery | Student Activities & Campus Life | DHIVITH EDU CARE Kinathukadavu",
  description:
    "Explore our photo gallery featuring hands-on Montessori activities, sensory learning, annual Kidspire celebrations, outdoor play, and tuition sessions at DHIVITH EDU CARE in Kinathukadavu, Coimbatore.",
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
    title: "Campus Gallery | DHIVITH EDU CARE Kinathukadavu",
    description:
      "Vibrant photo moments of young minds exploring, creating, and learning with joy at DHIVITH EDU CARE.",
    url: `${siteConfig.url}/gallery`,
    images: ["/school_images/paper-cup-pyramid-stacking-activity-kinathukadavu.webp"],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
