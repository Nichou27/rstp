import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/validators/register-schema";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.issues.reduce((acc, issue) => {
        const field = issue.path.join(".");
        if (!acc[field]) {
          acc[field] = [];
        }
        acc[field].push(issue.message);
        return acc;
      }, {} as Record<string, string[]>);

      return NextResponse.json(
        { success: false, errors: fieldErrors },
        { status: 400 }
      );
    }

    const data: z.infer<typeof registerSchema> = result.data;

    const emailNormalized = data.email.toLowerCase().trim();

    const existingUser = await prisma.user.findUnique({
      where: { email: emailNormalized },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "El correo ya está registrado" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.$transaction(async (tx) => {
      const address = await tx.direction.create({
        data: {
          street: data.street,
          number: data.number,
          zipCode: data.zipCode,
          notes: data.notes,
          zone: { connect: { id: data.zoneId } },
        },
      });

      return tx.user.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: emailNormalized,
          password: hashedPassword,
          direction: { connect: { id: address.id } },
        },
      });
    });

    return NextResponse.json(
      {
        success: true,
        message: "Usuario registrado con éxito",
        userId: newUser.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "[REGISTER_ERROR]",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { success: false, message: "Ocurrió un error en el servidor" },
      { status: 500 }
    );
  }
}
