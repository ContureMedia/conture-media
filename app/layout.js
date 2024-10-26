import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Conture Media - The Future of Content Marketing: Community and Connection",
  description:
    "As the digital landscape evolves, the future of content marketing lies in building communities and fostering connections. Discover trends and insights into how brands are creating value through interactive and authentic content that encourages participation, engagement, and long-term loyalty.",
  keywords: [
    "Conture Media",
    "Content Creation",
    "Video Editing",
    "Marketing",
    "Future of content marketing",
    "Digital Marketing",
    "Social Media Marketing",
    "Community",
    "New York",
    "Community engagement",
    "Content marketing trends",
    "building connections",
    "interactive content",
  ],
  openGraph: {
    title:
      "Conture Media - The Future of Content Marketing: Community and Connection",
    description:
      "As the digital landscape evolves, the future of content marketing lies in building communities and fostering connections. Discover trends and insights into how brands are creating value through interactive and authentic content that encourages participation, engagement, and long-term loyalty.",
    images: [
      {
        url: "https://www.conturemedia.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Conture Media - The Future of Content Marketing: Community and Connection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Conture Media",
    url: "https://www.conturemedia.com",
    logo: "https://www.conturemedia.com/logo.png",
    sameAs: [
      "https://www.instagram.com/conture_media",
      "https://www.linkedin.com/company/conture-media/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "Contureai1@gmail.com",
    },
    founders: [
      {
        "@type": "Person",
        name: "Manthan Gupta",
      },
    ],
  },
  metadataBase: "https://www.conturemedia.com/",
  icons: {
    shortcut: "/favicon.ico",
  },
  twitter: {
    site: "@conture_media",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <SocialLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
