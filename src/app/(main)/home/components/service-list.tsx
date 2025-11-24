import {
  getServicesByName,
  getServicesByStateAndServiceName,
  getServicesByStateName,
} from "@/app/actions/getServices";
import CarouselCard from "./carousel-card";
import { ServiceWithRelations } from "@/types/service-types";
import CarouselCardEmpty from "./empty-states/carousel-card-empty";

interface ServiceListProps {
  stateName?: string;
  serviceName?: string;
}

export async function ServiceList({
  stateName,
  serviceName,
}: ServiceListProps) {
  let services: ServiceWithRelations[] = [];

  if (stateName && serviceName) {
    services = await getServicesByStateAndServiceName(stateName, serviceName);
  } else if (stateName) {
    services = await getServicesByStateName(stateName);
  } else if (serviceName) {
    services = await getServicesByName(serviceName);
  }

  if (!services || services.length === 0) {
    return <CarouselCardEmpty />;
  }

  return (
    <div className="flex w-full justify-center">
      {services.map((service) => (
        <CarouselCard
          key={service.id}
          name={service.name}
          city={service.direction?.zone.state.name || ""}
          zone={service.direction?.zone.name || ""}
          description={service.description}
          rating={Number(service.user.rating)}
          category={service.category.name}
          price={Number(service.price)}
          imageUrl={service.imageUrl}
          href={`/service/${service.id}`}
        />
      ))}
    </div>
  );
}
