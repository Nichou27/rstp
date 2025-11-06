import { getCoordinatesByCity } from "@/app/actions/getCoordinates";
import MapContainer from "./components/map-container";

type SearchParams = {
  city?: string;
  query?: string;
};

interface MapProps {
  searchParams?: Promise<SearchParams>;
}

export default async function Map(props: MapProps) {
  const data = await props.searchParams;
  const city = data?.city;
  const coordinates = await getCoordinatesByCity(city);

  return (
    <div className="flex flex-col w-full h-screen justify-start">
      <MapContainer
        latitude={coordinates.latitude}
        longitude={coordinates.longitude}
      />
    </div>
  );
}
