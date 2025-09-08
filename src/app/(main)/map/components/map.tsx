"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";

const customIcon = new Icon({
  iconUrl: "/map-marker.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

export default function LeafletMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted)
    return <div className="h-96 w-full max-w-4xl bg-gray-100 pt-3" />;

  const position: [number, number] = [-33.372893, -69.147673];

  return (
    <MapContainer
      key="map"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className="h-96 w-full max-w-4xl pt-3"
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
