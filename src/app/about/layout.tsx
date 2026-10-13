import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us & Founder Mrs. S Tharani in Kinathukadavu",
  description:
    "Learn about Dhivith Edu Care in Kinathukadavu, founded by Mrs. S Tharani (M.Sc., PGDPM, PGDNTTC). Dedicated to authentic Montessori values and holistic student care.",
  keywords: [
    "About Dhivith Edu Care",
    "Mrs S Tharani Montessori Director",
    "Preschool Founder Kinathukadavu",
    "Montessori School Coimbatore",
    "Best Preschool Faculty Pollachi",
    "Vadapudur School Kinathukadavu",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Us & Founder Mrs. S Tharani | Dhivith Edu Care",
    description:
      "Every Child. Every Opportunity. Every Time. Founded by Mrs. S Tharani, M.Sc., PGDPM, PGDNTTC in Vadapudur, Kinathukadavu.",
    url: `${siteConfig.url}/about`,
    images: [`${siteConfig.url}/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us & Founder Mrs. S Tharani | Dhivith Edu Care",
    description:
      "Learn about Dhivith Edu Care in Kinathukadavu, founded by Mrs. S Tharani.",
    images: [`${siteConfig.url}/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png`],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
