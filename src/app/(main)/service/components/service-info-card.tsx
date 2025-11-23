import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceWithRelations } from "@/types/service-types";
import { Check, Clock, Heart, MapPin, Share2, Star } from "lucide-react";

interface ServiceInfoCardProps {
  service: ServiceWithRelations;
}

export default function ServiceInfoCard({ service }: ServiceInfoCardProps) {
  return (
    <Card className="border-none shadow-none sm:border sm:shadow-sm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1 pr-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-1 md:mb-3">
              {service.category.name}
            </span>
            <CardTitle className="text-2xl md:text-3xl font-bold leading-tight">
              {service.name}
            </CardTitle>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-muted-foreground pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin size={18} className="text-primary/70" />
                <span className="text-sm font-medium">
                  {service.direction?.zone.name},{" "}
                  {service.direction?.zone.state.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={18} className="text-primary/70" />
                <span className="text-sm font-medium">{service.duration}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 shrink-0">
            <Button variant="outline" size="icon" className="rounded-full">
              <Heart size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 size={20} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="reviews">
              Reseñas ({service.user.firstName})
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="description"
            className="space-y-6 mt-6 animate-in fade-in-50"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Sobre este servicio
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Lo que incluye
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.tags.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <Check className="text-green-600 w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="text-sm md:text-base text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent
            value="reviews"
            className="space-y-6 mt-6 animate-in fade-in-50"
          >
            <div className="bg-muted/30 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
              <div className="text-center md:text-left min-w-[120px]">
                <div className="text-5xl font-bold text-primary">
                  {service.user.rating?.toFixed(2)}
                </div>
                <div className="flex items-center gap-1 justify-center md:justify-start mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(Number(service.user.rating))
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-200 fill-gray-200"
                      }
                    />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-medium">
                  {service.user.totalReviews} opiniones
                </div>
              </div>

              <div className="hidden md:block h-16 w-px bg-border" />

              <p className="text-sm text-muted-foreground text-center md:text-left max-w-sm">
                Las calificaciones se basan en opiniones verificadas de usuarios
                que han contratado este servicio anteriormente.
              </p>
            </div>

            <div className="space-y-4">
              {service.user.reviews.length > 0 ? (
                service.user.reviews.map((review) => (
                  <Card key={review.id} className="bg-card">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10 border">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">
                            {review.userId}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm">
                              {review.userId}
                            </h4>
                            <span className="text-xs text-muted-foreground">
                              {new Date(review.createdAt).toLocaleDateString(
                                "es-AR",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>

                          <div className="flex items-center gap-0.5 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
                                className={
                                  i < review.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-200 fill-gray-200"
                                }
                              />
                            ))}
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10 text-muted-foreground">
                  Aún no hay reseñas para este servicio.
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
