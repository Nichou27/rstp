import { MapService } from "./service-types";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface CoordinatesWithMapServices extends Coordinates {
  services: MapService[];
}
