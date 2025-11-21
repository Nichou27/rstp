import { getCoordinatesByCity } from "@/app/actions/getCoordinates";
import MapContainer from "./components/map-container";
import { getMapServices } from "@/app/actions/getServices";
import { MapService } from "@/types/service-types";

type SearchParams = {
  city?: string;
  query?: string;
};

interface MapProps {
  searchParams?: Promise<SearchParams>;
}

export default async function Map(props: MapProps) {
  const data = await props.searchParams;
  const city = data?.city || "";
  const query = data?.query || "";
  const coordinates = await getCoordinatesByCity(city);

  let services: MapService[] = [];

  if (query) {
    services = await getMapServices(query);
  }

  return (
    <div className="flex flex-col w-full h-screen justify-start">
      <MapContainer
        latitude={coordinates.latitude}
        longitude={coordinates.longitude}
        services={services}
      />
    </div>
  );
}
