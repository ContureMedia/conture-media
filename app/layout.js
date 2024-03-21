import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    "Home - Surging Jubilant Discovery: Conture Media Unleashes Remarkable Short Form Content Marketing",
  description:
    "Embrace the energy of short form content marketing with Conture Media's professional team. Our unique approach guarantees remarkable results.",
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
