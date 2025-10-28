import { Toaster } from "sonner";
import "src/app/globals.css";
import "leaflet/dist/leaflet.css";
import { CityProvider } from "./context/city-context";
import { CityURLManager } from "./(main)/components/url-manager";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="">
      <body>
        <CityProvider>
          <CityURLManager />
          {children}
          <Toaster richColors position="top-right" />
        </CityProvider>
      </body>
    </html>
  );
}
