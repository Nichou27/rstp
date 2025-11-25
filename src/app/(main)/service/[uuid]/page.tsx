import ServiceImagesCarousel from "../components/service-images-carousel";
import ServiceInfoCard from "../components/service-info-card";
import ServiceContactCard from "../components/service-contact-card";
import ProviderCard from "../components/provider-card";
import { getServiceById } from "@/app/actions/getServices";

interface ServicePageProps {
  params?: Promise<{
    uuid?: string;
  }>;
}

export default async function ServicePage(props: ServicePageProps) {
  const data = await props.params;
  const serviceId = data?.uuid || "";
  const service = await getServiceById(serviceId || "");

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Servicio no encontrado.</p>
      </div>
    );
  }
  const serviceImages: string[] = service.imageUrl || [];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ServiceImagesCarousel images={serviceImages} />
            <ServiceInfoCard service={service} />
          </div>
          <div className="space-y-6">
            <ServiceContactCard
              price={Number(service.price)}
              providerName={
                service.user.firstName + " " + service.user.lastName
              }
              responseTime={service.duration?.toString() || ""}
              contactInfo={{
                phone: service.user.phoneNumber || "",
                email: service.user.email,
              }}
            />
            <ProviderCard providerId={service.userId} />
          </div>
        </div>
      </div>
    </div>
  );
}
