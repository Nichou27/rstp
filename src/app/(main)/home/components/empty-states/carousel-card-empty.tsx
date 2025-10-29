import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function CarouselCardEmpty() {
  return (
    <Card className="w-full max-w-lg md:max-w-2xl bg-secondary shadow-md text-center py-12 px-6 flex flex-col items-center justify-center">
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="p-4 bg-muted rounded-full">
          <MapPin className="w-10 h-10 text-muted-foreground" />
        </div>

        <h2 className="text-xl font-semibold text-foreground">
          No hay servicios disponibles
        </h2>
        <p className="text-muted-foreground max-w-sm">
          Aún no seleccionaste tu ciudad. Elegí tu ubicación para ver los
          servicios disponibles en tu zona.
        </p>
      </CardContent>
    </Card>
  );
}
