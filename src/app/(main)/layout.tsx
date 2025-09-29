import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FooterNav } from "@/app/(main)/components/footer-nav";
import Header from "./components/header";
import SearchBar from "./components/search-bar";
import LocationButton from "./components/location-button";
import HeaderNav from "./components/header-nav";
import LoginButton from "./components/login-button";
import CreateAccountButton from "./components/create-account-button";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Risp | Encontrá tu servicio",
  description:
    "Risp is a simple network thought for real-life professionals and technicians.",
  authors: [
    {
      name: "Ignacio Gonzalez Acuña",
    },
  ],
  keywords: ["Risp", "network", "professionals", "technicians"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
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
      <Footer />
      <FooterNav />
    </div>
  );
}
