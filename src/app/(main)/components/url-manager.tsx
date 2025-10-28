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

    if (isHomePage && selectedCity && selectedCity !== urlCity) {
      router.replace(`/?city=${selectedCity}`);
    }
  }, [pathname, selectedCity, urlCity, router]);

  return null;
}
