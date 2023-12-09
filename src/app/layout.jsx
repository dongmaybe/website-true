"use client";
import { Poppins, Lora, Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import "@/i18n/i18n";

const locales = ["vi", "en", "de"];
// Specify the weight you want to use, e.g., '400' for regular
export const poppins = Poppins({
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const barlow = Barlow({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

export const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  return (
    <html lang="website">
      <body className={`${poppins.variable} ${lora.variable} ${lora.barlow}`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
