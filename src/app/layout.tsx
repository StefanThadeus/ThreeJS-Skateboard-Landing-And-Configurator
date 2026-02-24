import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Sections/Header";
import { SVGFilters } from "@/components/SVGFilters";

const bowlby = Bowlby_One_SC({
  variable: "--font-bowlby-sc",
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  display: "swap",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Suburbia Skateboards",
  description: "World's greatest skateboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono`}
      >
        <main>
          <Header />
          {children}
        </main>

        <SVGFilters />
      </body>
    </html>
  );
}
