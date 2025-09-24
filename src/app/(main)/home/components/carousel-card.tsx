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

export const CarouselCard = () => {
  return (
    <Card className="w-lg mx-7 md:w-2xl bg-secondary shadow-md">
      <CardHeader className="px-8">
        <CardTitle>
          <div className="flex w-full">
            <p className="block w-fit h-5">
              El taller de Pepito - Tupungato, Mendoza
            </p>
            <div className="flex flex-col font-bold grow">
              <span className="text-right px-1.5">
                <Star className="justify-self-end-safe text-yellow-300" />
                4.5
              </span>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="w-fit">
          Trabajos de Pintura y albañilería
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex justify-center">
              <Image
                src="/placeholder.png"
                alt="Taller de Pepito"
                width={300}
                height={300}
                priority
              />
            </CarouselItem>
            <CarouselItem className="flex justify-center">
              <Image
                src="/placeholder.png"
                alt="Taller de Pepito"
                width={300}
                height={300}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
      <CardFooter>Precio por hora: $20.000</CardFooter>
    </Card>
  );
};

export default CarouselCard;
