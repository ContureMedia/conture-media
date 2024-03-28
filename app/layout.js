import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    "Conture Media - Video Editing, Social Media Marketing, and Content Creation Services | Conture Media",
  description:
    "Conture Media is a digital marketing agency that specializes in video editing, social media marketing, and content creation services. We help businesses grow their online presence and reach their target audience through engaging video content and social media marketing strategies.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SocialLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
