import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export const CarouselCard = () => {
  return (
    <Card className="w-full max-w-lg md:max-w-2xl mx-auto bg-secondary shadow-md">
      <CardHeader className="px-6 md:px-8">
        <CardTitle>
          <div className="flex items-start justify-between gap-3 hover:text-blue-500">
            <Link
              href="/profile/service"
              className="text-lg md:text-xl font-semibold leading-tight"
            >
              El taller de Pepito - Tupungato, Mendoza
            </Link>
            <div
              className="flex items-center gap-1 text-sm font-bold whitespace-nowrap"
              aria-label="Calificación: 4.5 de 5 estrellas"
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>4.5</span>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="mt-1.5">
          Trabajos de Pintura y albañilería
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 md:px-8">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="flex justify-center">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.png"
                  alt="Trabajo realizado en el taller de Pepito - imagen 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.png"
                  alt="Trabajo realizado en el taller de Pepito - imagen 2"
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </CardContent>

      <CardFooter className="px-6 md:px-8 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Precio por hora:</span>
        <span className="text-lg font-semibold">$20.000</span>
      </CardFooter>
    </Card>
  );
};

export default CarouselCard;
