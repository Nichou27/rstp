import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { provider, reviews, service } from "@/lib/placeholder-data";
import { Check, Clock, Heart, MapPin, Share2, Star } from "lucide-react";

export default function ServiceInfoCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              {service.category}
            </span>
            <CardTitle className="text-3xl">{service.title}</CardTitle>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span className="text-sm">{service.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span className="text-sm">{service.availability}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Heart size={20} />
            </Button>
            <Button variant="outline" size="icon">
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
              Reseñas ({reviews.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Sobre este servicio
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <p className="text-muted-foreground">{service.longDescription}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-4">Lo que incluye</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4 mt-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold">{provider.rating}</div>
                <div className="flex items-center gap-1 justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(provider.rating)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {provider.reviewCount} reseñas
                </div>
              </div>
              <Separator orientation="vertical" className="h-16" />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">
                  Basado en {provider.reviewCount} opiniones verificadas
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="font-semibold">{review.author}</div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString(
                                "es-AR",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={
                                  i < review.rating
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
