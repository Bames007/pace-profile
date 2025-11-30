import type { Metadata } from "next";
import { inter, montserrat, playfair } from "./utils/constant";
import "./globals.css";
import Header from "./home/Header";
import Footer from "./home/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "Pace Profile Designs | Architectural Excellence & Innovative Construction",
    template: "%s | Pace Profile Designs",
  },
  description:
    "Pace Profile Designs is a premier architectural firm specializing in construction, interior design, renovations, and innovative space solutions. Transform your vision into reality.",
  keywords: [
    "Pace Profile Designs",
    "architectural firm",
    "construction company",
    "interior design",
    "renovations",
    "architecture",
    "building design",
    "space planning",
    "commercial construction",
    "residential design",
    "home renovations",
    "architectural services",
  ],
  authors: [{ name: "Pace Profile Designs" }],
  creator: "Pace Profile Designs",
  publisher: "Pace Profile Designs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://paceprofiledesigns.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://paceprofiledesigns.com",
    siteName: "Pace Profile Designs",
    title:
      "Pace Profile Designs | Architectural Excellence & Innovative Construction",
    description:
      "Premier architectural firm specializing in construction, interior design, renovations, and innovative space solutions for residential and commercial projects.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pace Profile Designs - Architectural Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pace Profile Designs | Architectural Excellence & Innovative Construction",
    description:
      "Transform your space with Pace Profile Designs - expert architectural, construction, and interior design services.",
    images: ["/images/twitter-image.jpg"],
    creator: "@paceprofiledesigns",
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
  verification: {
    // Add Google Search Console verification here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pace Profile Designs",
              description:
                "Premier architectural firm specializing in construction, interior design, renovations, and innovative space solutions.",
              url: "https://paceprofiledesigns.com",
              logo: "https://paceprofiledesigns.com/images/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "Your ZIP",
                addressCountry: "Your Country",
              },
              areaServed: "Your Service Areas",
              knowsAbout: [
                "Architectural Design",
                "Construction Management",
                "Interior Design",
                "Building Renovations",
                "Space Planning",
                "Commercial Architecture",
                "Residential Design",
                "Project Management",
              ],
              serviceType: [
                "Architectural Services",
                "Construction",
                "Interior Design",
                "Renovations",
                "Space Planning",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Architectural Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Architectural Design",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Construction Management",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Interior Design",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Building Renovations",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      {/* <header>
        <Header />
      </header> */}
      <body
        className={`${inter.className} ${playfair.className} ${montserrat.className} antialiased bg-white text-gray-900 overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Background gradient for entire site - updated to more architectural colors */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-50/20 via-white to-blue-50/10 -z-10" />

        {/* Subtle grid pattern for entire site - updated to architectural grid */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

        <Header />
        {children}

        {/* EBCom Technologies Watermark */}
        <div className="fixed bottom-4 right-4 z-40 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-blue-100">
            <p className="text-xs text-gray-600 font-medium">
              Built by{" "}
              <span className="text-blue-600 font-semibold">
                EBCom Technologies
              </span>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
