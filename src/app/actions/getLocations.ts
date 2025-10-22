"use server";

import { prisma } from "@/lib/prisma";
import { State } from "@prisma/client";

/**
 * Fetch all states (used as cities) from the database ordered by name.
 *
 * This function queries the "state" table and returns the results sorted alphabetically by the "name" field.
 *
 * @returns {Promise<State[]>} A promise that resolves to an array of State objects ordered by name, or an empty array if an error occurs.
 */
export async function getCities(): Promise<State[]> {
  try {
    const cities: State[] = await prisma.state.findMany({
      orderBy: { name: "asc" },
    });
    return cities;
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}
