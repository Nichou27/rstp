import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: "El nombre es requerido" })
      .max(50, { message: "El nombre es demasiado largo" }),

    lastName: z
      .string()
      .trim()
      .min(1, { message: "El apellido es requerido" })
      .max(50, { message: "El apellido es demasiado largo" }),

    email: z.email({ message: "Correo electrónico inválido" }).trim(),

    password: z
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
      .max(100, { message: "La contraseña es demasiado larga" }),

    confirmPassword: z.string().min(6, { message: "Confirma tu contraseña" }),

    countryId: z.coerce.number().int().positive("Debes seleccionar un país"),

    stateId: z.coerce.number().int().positive("Debes seleccionar una región"),

    zoneId: z.coerce.number().int().positive("Debes seleccionar una zona"),

    street: z
      .string()
      .trim()
      .min(1, { message: "La calle es requerida" })
      .max(100, { message: "La calle es demasiado larga" }),

    number: z
      .string()
      .trim()
      .min(1, { message: "El número de calle es requerido" })
      .max(10, { message: "El número de calle es demasiado largo" }),

    zipCode: z
      .string()
      .trim()
      .min(1, { message: "El código postal es requerido" })
      .max(12, { message: "El código postal es demasiado largo" }),

    notes: z
      .string()
      .trim()
      .max(300, { message: "La nota es demasiado extensa" })
      .optional()
      .transform((e) => (e === "" ? undefined : e)),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
