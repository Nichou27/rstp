import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { provider } from "@/lib/placeholder-data";
import { Shield, Star } from "lucide-react";

export default function ProviderCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sobre el proveedor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={provider.avatar} alt={provider.name} />
            <AvatarFallback>{provider.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{provider.name}</h3>
              {provider.verified && (
                <span className="flex gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Shield size={20} />
                  Verificado
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{provider.rating}</span>
              <span>({provider.reviewCount} reseñas)</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Miembro desde {provider.memberSince}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{provider.bio}</p>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Servicios publicados</span>
            <span className="font-medium">{provider.totalServices}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tiempo de respuesta</span>
            <span className="font-medium">{provider.responseTime}</span>
          </div>
        </div>

        <Button variant="outline" className="w-full">
          Ver perfil completo
        </Button>
      </CardContent>
    </Card>
  );
}
