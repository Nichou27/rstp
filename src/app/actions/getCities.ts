"use server";

import { prisma } from "@/lib/prisma";
import { State } from "@prisma/client";

/**
 *
 * @returns A list of cities from the database
 */
export async function getCities() {
  try {
    const cities: State[] = await prisma.state.findMany({
      orderBy: { name: "asc" },
    });
    return cities;
  } catch (error) {
    console.error("Database Error:", error);
  }
}
