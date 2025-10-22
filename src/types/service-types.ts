import { Prisma } from "@prisma/client";

export type ServiceWithRelations = Prisma.ServiceGetPayload<{
  include: {
    direction: {
      include: {
        zone: {
          include: {
            state: true;
          };
        };
      };
    };
    user: {
      include: {
        reviews: true;
      };
    };
    category: {
      select: {
        name: true;
      };
    };
  };
}>;
