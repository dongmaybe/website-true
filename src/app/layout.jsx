"use client";
import { Poppins, Lora, Barlow } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import "@/i18n/i18n";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <html lang="website">
      <body className={`${poppins.variable} ${lora.variable} ${lora.barlow}`}>
        <main>
          <SectionWrapper
            className={`${
              pathname === "/about" ? "bg-white" : "bg-[#F9F0EC]"
            }  shadow-lg`}
          >
            <Header />
          </SectionWrapper>
          {children}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
