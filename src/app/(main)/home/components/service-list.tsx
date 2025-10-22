import {
  getServicesByName,
  getServicesByStateAndServiceName,
  getServicesByStateName,
} from "@/app/actions/getServices";
import CarouselCard from "./carousel-card";
import { ServiceWithRelations } from "@/types/service-types";

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

  return (
    <div className="flex w-full justify-center">
      {services.map((service) => (
        <CarouselCard
          key={service.id}
          id={service.id}
          name={service.name}
          city={service.direction?.zone.state.name || ""}
          zone={service.direction?.zone.name || ""}
          description={service.description}
          rating={Number(service.user.rating)}
          category={service.category.name}
          price={Number(service.price)}
          imageUrl={["/placeholder.png"]}
          href={`/service/${service.id}`}
        />
      ))}
    </div>
  );
}
