"use client";

import { useCityContext } from "@/app/context/city-context";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCity } from "@/hooks/useCity";
import { cn } from "@/lib/utils";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Check, ChevronDown, MapPin } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const LocationButton = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { selectedCity, setSelectedCity } = useCityContext();
  const { cities } = useCity();

  const buttonString = () => {
    const params = new URLSearchParams(searchParams);
    if (!params.get("city")) {
      return "Selecciona tu ubicación";
    } else {
      return params.get("city");
    }
  };

  const handleLocationSelect = (city: string) => {
    const params = new URLSearchParams(searchParams);
    if (city) {
      params.set("city", city);
    } else {
      params.delete("city");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pl-6 pt-6 col-span-2 flex md:pt-0">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex grow h-full bg-secondary hover:bg-secondary-hover active:bg-secondary-active">
            <MapPin className="text-secondary-foreground mr-2" />
            <p className="text-secondary-foreground flex-1 text-left">
              {buttonString()}
            </p>
            <ChevronDown className="text-secondary-foreground" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Seleccioná tu ciudad</DialogTitle>
            <DialogDescription>
              Busca en la lista para establecer tu ubicación.
            </DialogDescription>
          </DialogHeader>
          <Command>
            <CommandInput placeholder="Buscá una ciudad..." className="h-9" />
            <CommandList>
              <CommandEmpty>No se encontró la ciudad</CommandEmpty>
              <CommandGroup>
                {cities.map((city) => (
                  <CommandItem
                    key={city.id}
                    value={city.name}
                    onSelect={(currentValue) => {
                      const normalizedSelected =
                        selectedCity?.toLowerCase() ?? "";
                      const isSame =
                        currentValue.toLowerCase() === normalizedSelected;
                      const newCity = isSame ? "" : city.name;

                      setSelectedCity(newCity);
                      setOpen(false);
                      handleLocationSelect(newCity);
                      push(`/?city=${newCity}`);
                    }}
                  >
                    {city.name}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedCity === city.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LocationButton;
