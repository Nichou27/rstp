"use client";

import { Coordinates } from "@/types/location-types";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/app/(main)/map/components/map"), {
  ssr: false,
});

export default function MapContainer({ latitude, longitude }: Coordinates) {
  return (
    <div className="flex justify-center w-full h-full">
      <LeafletMap latitude={latitude} longitude={longitude} />
    </div>
  );
}
