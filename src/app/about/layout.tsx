import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | Founder Mrs. S Tharani | DHIVITH EDU CARE Kinathukadavu, Coimbatore",
  description:
    "Learn about DHIVITH EDU CARE in Kinathukadavu, Coimbatore. Founded by Mrs. S Tharani (M.Sc., PGDM, PGMTTC) dedicated to nurturing every child through authentic Montessori principles, holistic development, and quality academic coaching.",
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
    title: "About DHIVITH EDU CARE | Montessori Pre-School Kinathukadavu",
    description:
      "Every Child. Every Opportunity. Every Time. Founded by Mrs. S Tharani, M.Sc., PGDM, PGMTTC in Vadapudur, Kinathukadavu.",
    url: `${siteConfig.url}/about`,
    images: ["/teachers/mrs-s-tharani-founder-dhivith-edu-care-kinathukadavu.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
