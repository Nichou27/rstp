"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { CoordinatesWithMapServices } from "@/types/location-types";
import ServicePopups from "./service-popup";

const customIcon = new Icon({
  iconUrl: "/map-marker.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

export default function LeafletMap({
  latitude,
  longitude,
  services,
}: CoordinatesWithMapServices) {
  const [mounted, setMounted] = useState<boolean>(false);
  const position: [number, number] = [latitude, longitude];

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted)
    return <div className="h-full w-full max-w-4xl z-0 bg-gray-300 pt-3" />;

  return (
    <MapContainer
      key="map"
      center={position ?? [-34.61315, -58.37723]}
      zoom={15}
      scrollWheelZoom={true}
      dragging={true}
      className="h-full w-full max-w-4xl pt-3 z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {services.map((service) => (
        <Marker
          key={service.id}
          position={[service.latitude, service.longitude]}
          icon={customIcon}
        >
          <Popup minWidth={250} maxWidth={320}>
            <ServicePopups service={service} />
          </Popup>
        </Marker>
      ))}

      <Marker position={position} icon={customIcon}>
        <Popup>📍 Estás aquí</Popup>
      </Marker>
    </MapContainer>
  );
}
