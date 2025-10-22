export const ServiceWithRelationsQuery = {
  include: {
    direction: {
      include: {
        zone: {
          include: {
            state: true,
          },
        },
      },
    },
    user: {
      include: {
        reviews: true,
      },
    },
    category: {
      select: {
        name: true,
      },
    },
  },
};
