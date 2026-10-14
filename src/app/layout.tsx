import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SCHOOL_INFO } from "@/data/schoolData";
import { siteConfig } from "@/config/site";
import { QuickSupportDesk } from "@/components/ui/QuickSupportDesk";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { VidyarambhamAdmissionModal } from "@/components/modals/VidyarambhamAdmissionModal";

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
    default: "Dhivith Edu Care | Montessori Preschool in Kinathukadavu",
    template: "%s | Dhivith Edu Care",
  },
  description:
    "Explore preschool, Montessori learning, daycare and early learning programs at Dhivith Edu Care in Kinathukadavu, Coimbatore. Contact us for program details and admissions.",
  keywords: [
    "Montessori preschool in Kinathukadavu",
    "Preschool in Kinathukadavu",
    "Play school in Kinathukadavu",
    "Pre-KG admission in Kinathukadavu",
    "LKG Montessori in Kinathukadavu",
    "UKG preparatory classes in Kinathukadavu",
    "Daycare in Kinathukadavu",
    "Early childhood education in Coimbatore",
    "Tuition centre in Kinathukadavu",
    "Preschool near Kinathukadavu",
    "DHIVITH EDU CARE",
    "Engineering Mathematics tuition Coimbatore",
    "Mrs S Tharani Montessori",
    "Vadapudur Pre-School",
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
    siteName: "Dhivith Edu Care",
    title: "Dhivith Edu Care | Montessori Preschool in Kinathukadavu",
    description:
      "Explore preschool, Montessori learning, daycare and early learning programs at Dhivith Edu Care in Kinathukadavu, Coimbatore. Contact us for program details and admissions.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Dhivith Edu Care - Montessori Preschool, Daycare & Tuitions in Kinathukadavu, Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhivith Edu Care | Montessori Preschool in Kinathukadavu",
    description:
      "Explore preschool, Montessori learning, daycare and early learning programs at Dhivith Edu Care in Kinathukadavu, Coimbatore. Contact us for program details and admissions.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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
        "Premier authentic Montessori preschool and academic tuition centre located in Kinathukadavu, Coimbatore, serving families across Kinathukadavu, Coimbatore, Pollachi, Palladam, and Tirupur. Offering Day Care, Play Group, Pre-KG, LKG, UKG, and tuition classes for Grades 1-12 and Engineering Mathematics.",
      url: siteConfig.url,
      sameAs: [
        "https://www.youtube.com/@dhivith46",
        "https://instagram.com/dhivith_edu_care?psln=MTRmNGRtd2EzMGlydg%3D%3D",
      ],
      logo: `${siteConfig.url}/logo.png`,
      image: [
        `${siteConfig.url}/logo.png`,
        `${siteConfig.url}/school_images/dhivith-daycare-preschool-haven-kinathukadavu.webp`,
        `${siteConfig.url}/school_images/sunlit-prepared-montessori-classroom-kinathukadavu.webp`,
        `${siteConfig.url}/school_images/paper-cup-pyramid-stacking-activity-kinathukadavu.webp`,
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
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "13:30",
          description: "Montessori Preschool Sessions",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "18:00",
          description: "Extended Day Care",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "05:00",
          closes: "07:00",
          description: "Early Morning Tuition Focus Batch",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "17:00",
          closes: "21:30",
          description: "Evening Tuition & Maths Coaching",
        },
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
              description: "Loving, safe and sensorial daycare environment for early learners with nutritious routines and rest pods.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Play Group & Pre-KG Montessori Program",
              description: "Joyful early learning, motor skill coordination, tactile apparatus exploration, and language discovery in Kinathukadavu.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "LKG & UKG Montessori Foundation",
              description: "Montessori mathematics, phonics, sensorial refinement, and primary school readiness in Kinathukadavu.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "Tuition Classes (Grade 1 to 12)",
              description: "Comprehensive subject tuition for CBSE, ICSE, and Tamil Nadu State Board curricula with small batches.",
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
  ],
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth`}>
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

          {/* Vijayadashami Vidyarambham Admission Popup (Active until Oct 21, 2026) */}
          <VidyarambhamAdmissionModal />

          {children}

          {/* Floating Green Quick Support Desk Trigger */}
          <QuickSupportDesk />
        </LanguageProvider>
      </body>
    </html>
  );
}
