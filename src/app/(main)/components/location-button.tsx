import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";

export const LocationButton = () => {
  const location = "Ubicación actual"; // Placeholder for location logic
  return (
    <div className="pl-6 pt-6 col-span-2 flex md:pt-0">
      <Button className="flex grow h-full bg-secondary hover:bg-secondary-hover active:bg-secondary-active">
        <MapPin className="text-secondary-foreground" />
        <p className="text-secondary-foreground">{location}</p>
        <ChevronDown className="text-secondary-foreground" />
      </Button>
    </div>
  );
};

export default LocationButton;
