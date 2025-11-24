"use client"; // This file needs to be a client component to use the CityURLManager component since it uses the useSearchParams hook.

import { Toaster } from "sonner";
import "src/app/globals.css";
import "leaflet/dist/leaflet.css";
import { CityProvider } from "./context/city-context";
import { CityURLManager } from "./(main)/components/url-manager";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="">
      <body>
        <CityProvider>
          <Suspense>
            <CityURLManager />
          </Suspense>
          {children}
          <Toaster richColors position="top-right" />
        </CityProvider>
      </body>
    </html>
  );
}
