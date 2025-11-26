import { getUserById } from "@/app/actions/getUsers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";
import { Shield, Star } from "lucide-react";
import Link from "next/link";

interface ProviderCardProps {
  providerId: string;
}

export default async function ProviderCard({ providerId }: ProviderCardProps) {
  const provider = await getUserById(providerId);

  if (!provider) {
    return (
      <Card className="h-fit border-red-200 bg-red-50">
        <CardContent className="pt-6 text-red-600">
          No se encontró información del proveedor.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg">Sobre el proveedor</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16 border">
            <AvatarImage
              src={provider.profileImage?.toString()}
              alt={provider.firstName}
              className="object-cover"
            />
            <AvatarFallback className="text-xl font-bold bg-muted">
              {provider.firstName[0]}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
              <h3 className="font-semibold text-base truncate">
                {provider.firstName}
              </h3>

              {provider.isVerified && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-[10px] uppercase font-bold tracking-wide">
                  <Shield size={10} className="fill-blue-700" />
                  Verificado
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-foreground">
                {Number(provider.rating)}
              </span>
              <span className="text-xs">({provider.totalReviews} reseñas)</span>
            </div>

            <p className="text-xs text-muted-foreground">
              Miembro desde {formatDate(provider.createdAt)}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {provider.bio}
        </p>

        <Separator />

        <Button variant="outline" className="w-full" asChild>
          <Link href={`/profile/${provider.id}`}>Ver perfil completo</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
