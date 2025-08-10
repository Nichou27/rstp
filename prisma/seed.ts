import { PrismaClient } from "@prisma/client";
import { countryName, statesData } from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  const country = await prisma.country.upsert({
    where: { name: countryName },
    update: {},
    create: {
      name: countryName,
    },
  });

  for (const stateData of statesData) {
    // First, try to find the state by name
    let state = await prisma.state.findFirst({
      where: { name: stateData.name },
    });

    // If not found, create it
    if (!state) {
      state = await prisma.state.create({
        data: {
          name: stateData.name,
          countryId: country.id,
        },
      });
    }

    await prisma.zone.createMany({
      data: stateData.zones.map((zoneName) => ({
        name: zoneName,
        stateId: state.id,
      })),
      skipDuplicates: true,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
