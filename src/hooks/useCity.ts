"use client";

import { getCities } from "@/app/actions/getCities";
import { State } from "@prisma/client";
import { useEffect, useState } from "react";
/**
 *
 * @returns An array of cities, loading state and error state
 */
export function useCity() {
  const [cities, setCities] = useState<State[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCities() {
      setLoading(true);
      try {
        const data = await getCities();
        setCities(data ?? []);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, []);

  return { cities, loading, error };
}
