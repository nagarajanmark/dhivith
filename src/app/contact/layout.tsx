import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Dhivith Edu Care in Kinathukadavu",
  description:
    "Contact Dhivith Edu Care in Vadapudur, Kinathukadavu. Schedule a campus tour, inquire about preschool admissions or tuitions, or call +91 74489 81592.",
  keywords: [
    "Contact Dhivith Edu Care",
    "Preschool Admissions Kinathukadavu",
    "School Visit Pollachi Road",
    "Tuition Enquiries Coimbatore",
    "Dhivith Edu Care Phone Number",
    "Vadapudur Kinathukadavu School Contact",
    "Admissions Pollachi Palladam Tirupur",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact & Campus Tour | Dhivith Edu Care",
    description:
      "Schedule a visit to Dhivith Edu Care in Vadapudur, Kinathukadavu. Call +91 74489 81592 for admissions and tuition enquiries.",
    url: `${siteConfig.url}/contact`,
    images: [`${siteConfig.url}/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Campus Tour | Dhivith Edu Care",
    description:
      "Schedule a visit to Dhivith Edu Care in Vadapudur, Kinathukadavu. Call +91 74489 81592 for admissions.",
    images: [`${siteConfig.url}/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp`],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes authentic Montessori education at Dhivith Edu Care unique?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our classrooms feature multi-age groupings, scientifically designed hands-on didactic apparatus, and freedom of choice within a structured, respectful environment guided by certified Montessori directresses.",
        },
      },
      {
        "@type": "Question",
        name: "What is the teacher-to-child ratio at Dhivith Edu Care?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We strictly maintain a 1:10 educator ratio in infant day care and early Montessori classrooms, ensuring every child receives individualized pedagogical scaffolding and emotional nurture.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide academic tuition for higher grade students?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! In addition to our early years Montessori wing, we offer comprehensive subject coaching for LKG through Grade 12 (CBSE, ICSE, Matriculation & State Board), as well as Engineering Mathematics coaching led by postgraduate mathematicians.",
        },
      },
      {
        "@type": "Question",
        name: "How can parents schedule a campus tour or enroll their child?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can click 'Book Visit' anywhere on this website, call our direct admissions helpline at +91 74489 81592, or send a WhatsApp message to schedule a private tour with Mrs. S Tharani.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact & Visit",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
