import { Country, State, Zone } from "@prisma/client";
import { useEffect, useState } from "react";

export function useLocationData() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);

  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(
    null
  );
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);

  const [loading, setLoading] = useState({
    countries: false,
    states: false,
    zones: false,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCountries() {
      setLoading((prev) => ({ ...prev, countries: true }));
      setError(null);
      try {
        const res = await fetch("/api/countries");
        if (!res.ok) throw new Error("Error al cargar los países");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading((prev) => ({ ...prev, countries: false }));
      }
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!selectedCountryId) {
      setStates([]);
      setZones([]);
      setSelectedStateId(null);
      return;
    }

    async function fetchStates() {
      setLoading((prev) => ({ ...prev, states: true }));
      setError(null);
      try {
        const res = await fetch(`/api/states?countryId=${selectedCountryId}`);
        if (!res.ok) throw new Error("Error al cargar los estados");
        const data = await res.json();
        setStates(data);
        setZones([]);
        setSelectedStateId(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading((prev) => ({ ...prev, states: false }));
      }
    }
    fetchStates();
  }, [selectedCountryId]);

  useEffect(() => {
    if (!selectedStateId) {
      setZones([]);
      return;
    }

    async function fetchZones() {
      setLoading((prev) => ({ ...prev, zones: true }));
      setError(null);
      try {
        const res = await fetch(`/api/zones?stateId=${selectedStateId}`);
        if (!res.ok) throw new Error("Error al cargar las zonas");
        const data = await res.json();
        setZones(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading((prev) => ({ ...prev, zones: false }));
      }
    }
    fetchZones();
  }, [selectedStateId]);

  return {
    countries,
    states,
    zones,
    selectedCountryId,
    setSelectedCountryId,
    selectedStateId,
    setSelectedStateId,
    isLoading: loading.countries || loading.states || loading.zones,
    error,
  };
}
