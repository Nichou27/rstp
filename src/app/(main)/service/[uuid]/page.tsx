import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ServiceImagesCarousel from "../components/service-images-carousel";
import ServiceInfoCard from "../components/service-info-card";
import ServiceContactCard from "../components/service-contact-card";
import ProviderCard from "../components/provider-card";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ServiceImagesCarousel />
            <ServiceInfoCard />
          </div>
          <div className="space-y-6">
            <ServiceContactCard />
            <ProviderCard />
          </div>
        </div>
      </div>
    </div>
  );
}
