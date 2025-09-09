import Image from "next/image";
import Link from "next/link";
import { DollarSign, Clock, Tag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

type Service = {
  id: string | number;
  name: string;
  description: string;
  imageUrl: string[];
  isActive: boolean;
  price: number | string;
  duration: number;
  tags: string[];
  category: {
    name: string;
  };
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.id}`}
      className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.imageUrl[0]}
          alt={`Imagen del servicio ${service.name}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1 pr-2">
            {service.name}
          </h3>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
              service.isActive
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {service.isActive ? "Activo" : "Inactivo"}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {service.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-700 mb-3">
          <div className="flex items-center gap-1.5 font-semibold text-green-600">
            <DollarSign size={14} />
            <span>{formatPrice(service.price)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Clock size={14} />
            <span>{service.duration} días</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {service.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto text-xs text-gray-500 border-t border-gray-100 pt-2">
          Categoría: {service.category.name}
        </div>
      </div>
    </Link>
  );
}
