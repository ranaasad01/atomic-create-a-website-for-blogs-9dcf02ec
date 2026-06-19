import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Inkwell — Modern Editorial Blog",
    template: "%s | Inkwell",
  },
  description:
    "Inkwell is a clean, modern editorial blog covering ideas, culture, technology, and the art of living well.",
  keywords: ["blog", "editorial", "articles", "ideas", "culture", "technology"],
  authors: [{ name: "Inkwell Editorial Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Inkwell",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-slate-900 antialiased font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}