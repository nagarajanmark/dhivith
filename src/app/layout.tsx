import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SCHOOL_INFO } from "@/data/schoolData";
import { QuickSupportDesk } from "@/components/ui/QuickSupportDesk";

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
  metadataBase: new URL("https://dhivithedumetric.edu"),
  title: "DHIVITH EDU CARE | Montessori Pre-School & Tuitions | Kinathukadavu, Coimbatore",
  description:
    "Every Child. Every Opportunity. Every Time. DHIVITH EDU CARE — A Montessori Pre-School in Kinathukadavu, Coimbatore offering Day Care, Play Group, Pre-KG, LKG, UKG and Tuition Classes from LKG to Grade 12.",
  keywords: [
    "DHIVITH EDU CARE",
    "Montessori Pre-School Kinathukadavu",
    "Preschool Coimbatore",
    "Day Care Kinathukadavu",
    "Pre-KG LKG UKG Coimbatore",
    "Tuition Classes Coimbatore",
    "Engineering Mathematics Coaching Coimbatore",
    "Mrs S Tharani Montessori",
    "Vadapudur Pre-School",
  ],
  authors: [{ name: "Mrs. S Tharani, M.Sc., PGDM, PGMTTC" }],
  creator: "DHIVITH EDU CARE",
  publisher: "DHIVITH EDU CARE",
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
    url: "https://dhivithedumetric.edu",
    siteName: "DHIVITH EDU CARE",
    title: "DHIVITH EDU CARE – A Montessori Pre-School | Coimbatore",
    description:
      "Every Child. Every Opportunity. Every Time. Better Learning. Better Tomorrow. Brighter Future. Day Care, Play Group, Pre-KG, LKG, UKG & Comprehensive Tuitions.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "DHIVITH EDU CARE Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DHIVITH EDU CARE – A Montessori Pre-School | Coimbatore",
    description:
      "Every Child. Every Opportunity. Every Time. Success Begins Here! Day Care, Play Group, Pre-KG, LKG, UKG & All Subject Tuitions.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "DHIVITH EDU CARE",
  alternateName: "Dhivith Edu Care - A Montessori Pre-School",
  description:
    "Montessori preschool and comprehensive educational tuition center providing Day Care, Play Group, Pre-KG, LKG, UKG, and tuition classes from LKG to Grade 12, plus Engineering Mathematics in Kinathukadavu, Coimbatore.",
  url: "https://dhivithedumetric.edu",
  logo: "https://dhivithedumetric.edu/logo.png",
  founder: {
    "@type": "Person",
    name: "Mrs. S Tharani",
    jobTitle: "Founder & Director",
    hasCredential: "M.Sc., PGDM, PGMTTC",
  },
  foundingDate: "2024-07-02",
  address: {
    "@type": "PostalAddress",
    streetAddress: "S.F.Nos. 382/35, 382/36, S.K.Garden, Site Nos. 16,17, Vadapudur",
    addressLocality: "Kinathukadavu",
    addressRegion: "Coimbatore, Tamil Nadu",
    postalCode: "641032",
    addressCountry: "IN",
  },
  telephone: "+91 74489 81592",
  email: "tharani1699@gmail.com",
  openingHours: "Mo-Sa 08:30-19:30",
};

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
        {children}

        {/* Floating Green Quick Support Desk Trigger */}
        <QuickSupportDesk />
      </body>
    </html>
  );
}
