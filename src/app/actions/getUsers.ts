import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export async function getUserById(userId: string): Promise<User | null> {
  if (!userId) return null;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching user by ID:", error.message);
      return null;
    } else {
      console.error("Unknown error fetching user by ID");
      return null;
    }
  }
}
