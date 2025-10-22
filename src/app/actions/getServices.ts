"use server";

import { ServiceWithRelationsQuery } from "@/lib/db/service-queries";
import { prisma } from "@/lib/prisma";
import { ServiceWithRelations } from "@/types/service-types";

/**
 * Fetch services that match a partial or full name (case-insensitive).
 *
 * @param {string} [name] - Partial or full service name to search for. If omitted or falsy, the function returns an empty array.
 * @returns {Promise<ServiceWithRelations[]>} A promise that resolves to an array of services including related data.
 */
export async function getServicesByName(
  name?: string
): Promise<ServiceWithRelations[]> {
  try {
    if (!name) return [];

    const services: ServiceWithRelations[] = await prisma.service.findMany({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
      ...ServiceWithRelationsQuery,
    });
    return services;
  } catch (error) {
    console.error("Error fetching services by name:", error);
    return [];
  }
}

/**
 * Fetch services located in a given state (matched by state name, case-insensitive).
 *
 * @param {string} [stateName] - State name to filter services by. If omitted or falsy, the function returns an empty array.
 * @returns {Promise<ServiceWithRelations[]>} A promise that resolves to an array of services including related data.
 */
export async function getServicesByStateName(
  stateName?: string
): Promise<ServiceWithRelations[]> {
  try {
    if (!stateName) return [];

    const services: ServiceWithRelations[] = await prisma.service.findMany({
      where: {
        direction: {
          zone: {
            state: {
              name: {
                equals: stateName,
                mode: "insensitive",
              },
            },
          },
        },
      },
      ...ServiceWithRelationsQuery,
    });
    return services;
  } catch (error) {
    console.error("Error fetching services by state name:", error);
    return [];
  }
}

/**
 * Fetch services that match both a state name and a service name (both case-insensitive).
 *
 * @param {string} [stateName] - State name to filter services by. If omitted or falsy, the function returns an empty array.
 * @param {string} [serviceName] - Partial or full service name to search for. If omitted or falsy, the function returns an empty array.
 * @returns {Promise<ServiceWithRelations[]>} A promise that resolves to an array of services including related data.
 */
export async function getServicesByStateAndServiceName(
  stateName?: string,
  serviceName?: string
): Promise<ServiceWithRelations[]> {
  try {
    if (!stateName || !serviceName) return [];

    const services: ServiceWithRelations[] = await prisma.service.findMany({
      where: {
        name: {
          contains: serviceName,
          mode: "insensitive",
        },
        direction: {
          zone: {
            state: {
              name: {
                equals: stateName,
                mode: "insensitive",
              },
            },
          },
        },
      },
      ...ServiceWithRelationsQuery,
    });
    return services;
  } catch (error) {
    console.error("Error fetching services by state and service name:", error);
    return [];
  }
}
