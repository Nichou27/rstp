import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const countryId = Number(searchParams.get("countryId"));

  if (!countryId) {
    return NextResponse.json({ error: "Falta countryId" }, { status: 400 });
  }

  const states = await prisma.state.findMany({
    where: { countryId },
    orderBy: { name: "asc" },
  });

  return NextResponse.json(states);
}
