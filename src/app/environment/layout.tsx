import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Campus Environment & Child-Safe Facilities | DHIVITH EDU CARE Kinathukadavu",
  description:
    "Tour the prepared environment at DHIVITH EDU CARE in Vadapudur, Kinathukadavu. Sunlit classrooms, child-scale wooden furniture, lush turf play zone, CCTV security, and safe learning ateliers.",
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
    title: "Campus Environment | DHIVITH EDU CARE Kinathukadavu",
    description:
      "A peaceful, prepared, child-safe haven created for hands-on exploration and play in Kinathukadavu.",
    url: `${siteConfig.url}/environment`,
    images: ["/school_images/sunlit-prepared-montessori-classroom-kinathukadavu.webp"],
  },
};

export default function EnvironmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
