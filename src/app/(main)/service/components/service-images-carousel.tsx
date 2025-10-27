import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { service } from "@/lib/placeholder-data";
import Image from "next/image";

export default function ServiceImagesCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {service.images.map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="overflow-hidden">
                <CardContent className="relative aspect-video bg-muted">
                  <Image
                    src={service.images[index]}
                    alt={`Service Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    fill
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
