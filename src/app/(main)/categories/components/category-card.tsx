import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  color: string;
  slug: string;
};

interface CategoryCardProps {
  service: Service;
}

export function CategoryCard({ service }: CategoryCardProps) {
  const ComponentIcon = service.icon;

  return (
    <Link
      href={`/categories/${service.slug}`}
      className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 bg-secondary backdrop-blur-sm py-0">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div
              className={`absolute top-3 right-3 p-2 rounded-full ${service.color}`}
            >
              <ComponentIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 flex flex-col h-full">
          <CardTitle className="text-lg sm:text-xl font-semibold text-secondary-foreground mb-2 group-hover:text-blue-600 transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {service.description}
          </CardDescription>

          <div className="mt-4 pt-4 border-t border-gray-100 text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:text-blue-800 transition-colors">
            Ver profesionales
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
