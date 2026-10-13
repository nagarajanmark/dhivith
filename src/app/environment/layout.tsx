import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Campus Environment & Child-Safe Facilities in Kinathukadavu",
  description:
    "Tour our prepared campus in Vadapudur, Kinathukadavu. Sunlit classrooms, child-scale wooden furniture, lush turf play zone, CCTV security & safe learning ateliers.",
  keywords: [
    "Safe Preschool Campus Kinathukadavu",
    "Child-Safe Facilities Coimbatore",
    "Montessori Environment Pollachi",
    "Preschool CCTV Play Area Kinathukadavu",
    "SK Garden School Vadapudur",
  ],
  alternates: {
    canonical: `${siteConfig.url}/environment`,
  },
  openGraph: {
    title: "Campus Environment & Child-Safe Facilities | Dhivith Edu Care",
    description:
      "A peaceful, prepared, child-safe haven created for hands-on exploration and play in Kinathukadavu.",
    url: `${siteConfig.url}/environment`,
    images: [`${siteConfig.url}/school_images/sunlit-prepared-montessori-classroom-kinathukadavu.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Environment & Child-Safe Facilities | Dhivith Edu Care",
    description:
      "Tour our child-safe campus in Vadapudur, Kinathukadavu.",
    images: [`${siteConfig.url}/school_images/sunlit-prepared-montessori-classroom-kinathukadavu.webp`],
  },
};

export default function EnvironmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
