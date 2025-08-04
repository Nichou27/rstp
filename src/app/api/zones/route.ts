import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const stateId = Number(searchParams.get("stateId"));

  if (!stateId) {
    return NextResponse.json({ error: "Falta stateId" }, { status: 400 });
  }

  const zones = await prisma.zone.findMany({
    where: { stateId },
    orderBy: { name: "asc" },
  });

  return NextResponse.json(zones);
}
