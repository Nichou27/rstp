import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export type SafeUser = Omit<User, "password">;

export async function getUserById(userId: string): Promise<SafeUser | null> {
  if (!userId) return null;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        bio: true,
        rating: true,
        reviews: true,
        isVerified: true,
        totalReviews: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        phoneNumber: true,
        profileImage: true,
        isWorker: true,
        directionId: true,
      },
    });
    if (!user) return null;
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
}
