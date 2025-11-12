"use client";

import { useEffect } from "react";
import { useCityContext } from "@/app/context/city-context";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function CityURLManager() {
  const { selectedCity } = useCityContext();
  const router = useRouter();
  const pathname = usePathname();
  const urlCity = useSearchParams().get("city");

  useEffect(() => {
    const isHomePage = pathname === "/";
    const isMapPage = pathname === "/map";

    if (isHomePage && selectedCity && selectedCity !== urlCity) {
      router.replace(`${pathname}?city=${selectedCity}`);
    } else if (isMapPage && selectedCity && selectedCity !== urlCity) {
      router.replace(`${pathname}?city=${selectedCity}`);
    }
  }, [pathname, selectedCity, urlCity, router]);

  return null;
}
