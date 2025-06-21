import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FooterNav } from "./ui/home/footer-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Risp | Find Your Service",
  description: "Risp is a simple network thought for real-life professionals and technicians.",
  authors: [
    {
      name: "Ignacio Gonzalez Acuña",
    },
  ],
  keywords: [
    "Risp",
    "network",
    "professionals",
    "technicians"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <FooterNav />
      </body>
    </html>
  );
}
