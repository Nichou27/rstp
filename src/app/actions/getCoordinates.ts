"use server";

import { prisma } from "@/lib/prisma";
import { Coordinates } from "@/types/location-types";

export async function getCoordinatesByCity(
  city?: string
): Promise<Coordinates> {
  try {
    if (!city) {
      return { latitude: 0, longitude: 0 };
    } else {
      const direction = await prisma.direction.findFirst({
        where: {
          zone: {
            state: {
              name: {
                equals: city,
                mode: "insensitive",
              },
            },
          },
        },
        select: {
          latitude: true,
          longitude: true,
        },
      });
      const coordintates = {
        latitude: Number(direction?.latitude ?? 0),
        longitude: Number(direction?.longitude ?? 0),
      };
      return coordintates;
    }
  } catch (error) {
    console.error(`Error fetching coordinates: ${error}`);
    return { latitude: 0, longitude: 0 };
  }
}
