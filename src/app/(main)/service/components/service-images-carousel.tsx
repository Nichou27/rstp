import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ServiceImagesCarouselProps {
  images: string[];
}

export default function ServiceImagesCarousel({
  images,
}: ServiceImagesCarouselProps) {
  if (!images || images.length === 0) return null;

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-[90%] md:basis-full"
          >
            <div className="p-1">
              <Card className="overflow-hidden border-0 shadow-none">
                <CardContent className="relative aspect-video bg-muted rounded-xl overflow-hidden p-0">
                  <Image
                    src={src}
                    alt={`Imagen del servicio ${index + 1}`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 90vw, 100vw"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex left-2" />
      <CarouselNext className="hidden sm:flex right-2" />
    </Carousel>
  );
}
