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

export interface MapService {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string[];
  latitude: number;
  longitude: number;
}
