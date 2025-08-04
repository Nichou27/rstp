import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const countries = await prisma.country.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(countries);
}
