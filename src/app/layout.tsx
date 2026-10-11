import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SCHOOL_INFO } from "@/data/schoolData";
import { siteConfig } from "@/config/site";
import { QuickSupportDesk } from "@/components/ui/QuickSupportDesk";
import { CustomCursor } from "@/components/ui/CustomCursor";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0750B8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DHIVITH EDU CARE | Best Montessori Pre-School & Tuitions | Kinathukadavu, Coimbatore",
    template: "%s | DHIVITH EDU CARE",
  },
  description:
    "DHIVITH EDU CARE — Leading Montessori Pre-School & Academic Tuition Centre in Kinathukadavu, Coimbatore. Serving families across Kinathukadavu, Coimbatore, Pollachi, Palladam, and Tirupur. Offering Day Care, Play Group, Pre-KG, LKG, UKG, and Tuitions from Class 1 to Grade 12 (CBSE / ICSE / State Board) plus Engineering Mathematics.",
  keywords: [
    "DHIVITH EDU CARE",
    "Montessori Pre-School Kinathukadavu",
    "Preschool Coimbatore",
    "Best Preschool in Kinathukadavu",
    "Play School Pollachi",
    "Day Care Kinathukadavu",
    "Day Care Center Coimbatore",
    "Pre-KG LKG UKG Admission Kinathukadavu",
    "Montessori School near Pollachi",
    "Preschools near Palladam",
    "Preschools near Tirupur",
    "Tuition Centre Kinathukadavu",
    "Tuition Classes Coimbatore",
    "CBSE Tuition Pollachi",
    "ICSE State Board Tuitions Kinathukadavu",
    "Class 1 to 12 Tuitions Palladam",
    "Tuition Centre Tirupur",
    "Engineering Mathematics Tuition Coimbatore",
    "Engineering Maths Coaching Pollachi",
    "M1 M2 M3 M4 Maths Tuition Kinathukadavu",
    "Mrs S Tharani Montessori",
    "Vadapudur Pre-School",
    "SK Garden Kinathukadavu School",
  ],
  authors: [{ name: "Mrs. S Tharani, M.Sc., PGDM, PGMTTC" }],
  creator: "DHIVITH EDU CARE",
  publisher: "DHIVITH EDU CARE",
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "DHIVITH EDU CARE - Montessori Pre-School & Tuitions",
    title: "DHIVITH EDU CARE | Montessori Pre-School & Tuitions | Kinathukadavu, Coimbatore",
    description:
      "Every Child. Every Opportunity. Every Time. Better Learning. Better Tomorrow. Brighter Future. Premium Montessori Pre-School & All-Subject Tuitions serving Kinathukadavu, Coimbatore, Pollachi, Palladam & Tirupur.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "DHIVITH EDU CARE - Montessori Pre-School & Tuitions in Kinathukadavu, Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DHIVITH EDU CARE | Montessori Pre-School & Tuitions | Kinathukadavu, Coimbatore",
    description:
      "Every Child. Every Opportunity. Every Time. Day Care, Play Group, Pre-KG, LKG, UKG & Tuitions Class 1-12 & Engineering Mathematics in Kinathukadavu near Pollachi, Coimbatore, Palladam & Tirupur.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "DHIVITH EDU CARE",
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: ["en-IN", "ta-IN"],
    },
    {
      "@type": ["EducationalOrganization", "School", "Preschool", "ChildCare", "LocalBusiness"],
      "@id": `${siteConfig.url}/#organization`,
      name: "DHIVITH EDU CARE",
      alternateName: [
        "Dhivith Edu Care",
        "Dhivith Edu Care - A Montessori Pre-School & Tuitions",
        "திவித் எடு கேர்",
        "Dhivith Montessori Pre School Kinathukadavu",
      ],
      description:
        "Premier authentic Montessori pre-school and comprehensive academic tuition centre located in Kinathukadavu, Coimbatore, serving families in Kinathukadavu, Coimbatore, Pollachi, Palladam, and Tirupur. Offering Day Care, Play Group, Pre-KG, LKG, UKG, and tuition classes for Grades 1-12 (CBSE, ICSE, State Board) and Engineering Mathematics.",
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      image: [
        `${siteConfig.url}/logo.png`,
        `${siteConfig.url}/school_images/paper-cup-pyramid-stacking-activity-kinathukadavu.webp`,
        `${siteConfig.url}/school_images/sensory-ball-sorting-color-trays-coimbatore.webp`,
        `${siteConfig.url}/school_images/montessori-self-directed-work-cycle-coimbatore.webp`,
      ],
      founder: {
        "@type": "Person",
        name: "Mrs. S Tharani",
        jobTitle: "Founder & Educational Director",
        hasCredential: "M.Sc., PGDM, PGMTTC",
      },
      foundingDate: "2024-07-02",
      address: {
        "@type": "PostalAddress",
        streetAddress: "S.F.Nos. 382/35, 382/36, S.K.Garden, Site Nos. 16,17, Vadapudur",
        addressLocality: "Kinathukadavu",
        addressRegion: "Tamil Nadu",
        postalCode: "641032",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 10.8202,
        longitude: 77.0194,
      },
      telephone: "+91 74489 81592",
      email: "tharani1699@gmail.com",
      openingHours: [
        "Mo-Sa 05:00-07:00",
        "Mo-Sa 08:30-18:00",
        "Mo-Sa 17:00-21:30",
      ],
      priceRange: "₹₹",
      areaServed: [
        {
          "@type": "City",
          name: "Kinathukadavu",
        },
        {
          "@type": "City",
          name: "Coimbatore",
        },
        {
          "@type": "City",
          name: "Pollachi",
        },
        {
          "@type": "City",
          name: "Palladam",
        },
        {
          "@type": "City",
          name: "Tirupur",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Educational Programs & Tuitions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Day Care (1.5 - 6 Years)",
              description: "Loving, safe and sensorial day care environment for early learners with nutritious routines and rest pods.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Play Group & Pre-KG Montessori Program",
              description: "Joyful early learning, motor skill coordination, tactile apparatus exploration, and language discovery.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "LKG & UKG Montessori Foundation",
              description: "Montessori mathematics, phonics, sensorial refinement, and social readiness for primary school.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Tuition Classes (Grade 1 to 12)",
              description: "Comprehensive subject tuition for CBSE, ICSE, Matriculation and State Board curricula with small batches.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Collegiate Engineering Mathematics Coaching",
              description: "Expert engineering mathematics training for M1, M2, M3, M4 with deep problem-solving focus.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is DHIVITH EDU CARE located and which locations do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DHIVITH EDU CARE is situated at S.F.Nos. 382/35, 382/36, S.K.Garden, Site Nos. 16,17, Vadapudur, Kinathukadavu, Coimbatore - 641032. We serve families from Kinathukadavu, Coimbatore, Pollachi, Palladam, and Tirupur with easy highway accessibility.",
          },
        },
        {
          "@type": "Question",
          name: "What programs are offered at DHIVITH EDU CARE in Kinathukadavu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer authentic Montessori Pre-School programs including Day Care (1.5 to 6 yrs), Play Group (2 to 3 yrs), Pre-KG (3 to 4 yrs), LKG (4 to 5 yrs), and UKG (5 to 6 yrs). We also provide morning and evening Tuitions for Classes 1 to 12 across CBSE, ICSE, and State Board, as well as collegiate Engineering Mathematics.",
          },
        },
        {
          "@type": "Question",
          name: "Are admissions open for parents from Pollachi, Coimbatore, Palladam and Tirupur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, admissions are open year-round for Pre-School, Day Care, and Tuition batches. Parents from Kinathukadavu, Pollachi, Coimbatore, Palladam, and Tirupur can contact us at +91 74489 81592 or visit our campus for a personalized tour.",
          },
        },
        {
          "@type": "Question",
          name: "What are the timings for Preschool and Tuition batches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Montessori Preschool operates from 8:30 AM to 1:30 PM (with extended Day Care until 6:00 PM). Tuitions operate in early morning batches (5:00 AM – 7:00 AM) and evening batches (5:00 PM – 9:30 PM) supported by dedicated specialized faculty.",
          },
        },
      ],
    },
  ],
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta" className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#121D28] font-body selection:bg-[#F5B900] selection:text-[#121D28] antialiased relative">
        <LanguageProvider>
          {/* Global Interactive Custom Mouse Cursor */}
          <CustomCursor />

          {children}

          {/* Floating Green Quick Support Desk Trigger */}
          <QuickSupportDesk />
        </LanguageProvider>
      </body>
    </html>
  );
}
