import { Toaster } from "sonner";
import "src/app/globals.css";
import "leaflet/dist/leaflet.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="">
      <body>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
