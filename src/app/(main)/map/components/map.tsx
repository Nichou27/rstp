"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";

const customIcon = new Icon({
  iconUrl: "/map-marker.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

interface leafletMapProps {
  latitude: number;
  longitude: number;
}

export default function LeafletMap({ latitude, longitude }: leafletMapProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted)
    return <div className="h-full w-full max-w-4xl z-0 bg-gray-300 pt-3" />;

  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer
      key="map"
      center={position ?? [-34.61315, -58.37723]}
      zoom={13}
      scrollWheelZoom={true}
      dragging={true}
      className="h-full w-full max-w-4xl pt-3 z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={customIcon}>
        <Popup>📍 Hola! Soy un marcador en Buenos Aires</Popup>
      </Marker>
    </MapContainer>
  );
}
