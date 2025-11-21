import React from "react";
import Image from "next/image";
import { MapService } from "@/types/service-types";
import Link from "next/link";

interface ServiceCardProps {
  service: MapService;
}

export default function ServicePopups({ service }: ServiceCardProps) {
  return (
    <>
      <div
        key={service.id}
        className="flex flex-col font-sans bg-white shadow-sm w-64 md:w-80 transition-all"
      >
        <div className="relative w-full h-32 md:h-40 shrink-0">
          <Image
            src={service.imageUrl[0]}
            alt={service.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 256px, 320px"
            priority={false}
          />
          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-white px-2 py-1 md:px-3 md:py-1 rounded-md shadow-sm border border-white/10">
            <span className="text-xs md:text-sm font-semibold">
              ${service.price}
            </span>
          </div>
        </div>

        <div className="p-3 md:p-4 flex flex-col gap-2">
          <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight truncate">
            {service.name}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 line-clamp-2 h-8 md:h-10">
            {service.description}
          </p>

          <Link
            href={`/service/${service.id}`}
            className="flex justify-center mt-1 md:mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 md:py-2 px-4 rounded-md text-xs md:text-sm transition-colors shadow-sm active:scale-95"
          >
            <p className="text-white">Ver detalles</p>
          </Link>
        </div>
      </div>
    </>
  );
}
