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

export const CarouselCard = ({
  name,
  description,
  imageUrl,
  price,
  rating,
  category,
  city,
  zone,
  href,
}: {
  name: string;
  description: string;
  imageUrl: string[];
  price: number;
  rating: number;
  category: string;
  city: string;
  zone: string;
  href: string;
}) => {
  return (
    <Card className="grow w-full max-w-lg md:max-w-2xl bg-secondary shadow-md transition-all hover:shadow-xl hover:scale-[1.01]">
      <CardHeader className="px-6 md:px-8">
        <CardTitle>
          <div className="flex items-start justify-between gap-3 hover:text-blue-500">
            <Link
              href={href}
              className="text-lg md:text-xl font-semibold leading-tight"
            >
              {name} - {city}, {zone}.
            </Link>
            <div
              className="flex items-center gap-1 text-sm font-bold whitespace-nowrap"
              aria-label="Calificación: 4.5 de 5 estrellas"
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>{Number(rating).toFixed(1)}</span>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="mt-1.5">{description}</CardDescription>
      </CardHeader>

      <CardContent className="px-6 md:px-8">
        <Carousel className="w-full">
          <CarouselContent>
            {imageUrl.map((url) => (
              <CarouselItem key={url} className="flex justify-center">
                <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-lg">
                  <Image
                    src={url}
                    alt={description}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </CardContent>

      <CardFooter className="px-6 md:px-8 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <span>{category}</span>
        </div>
        <div>
          <span className="text-lg font-semibold">
            ${Number(price).toFixed(2)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarouselCard;
