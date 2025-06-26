import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FooterNav } from "./ui/home/footer-nav";
import Header from "./ui/home/header";
import SearchBar from "./ui/home/search-bar";
import LocationButton from "./ui/home/location-button";
import HeaderNav from "./ui/home/header-nav";
import LoginButton from "./ui/home/login-button";
import CreateAccountButton from "./ui/home/create-account-button";

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
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="md:flex md:justify-center md:w-full">
        <Header>
          <HeaderNav />
          <LoginButton />
          <CreateAccountButton />
          <LocationButton />
          <SearchBar />
        </Header>
        </div>
        {children}
        <FooterNav />
      </body>
    </html>
  );
}
