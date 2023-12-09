"use client";
import { Barlow } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import "@/i18n/i18n";
import { notFound } from "next/navigation";

// Can be imported from a shared config
const locales = ["vi", "en", "de"];
// Specify the weight you want to use, e.g., '400' for regular
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="website">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
