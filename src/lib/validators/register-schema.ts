import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, { error: "El nombre es requerido" })
      .max(50, { error: "El nombre es demasiado largo" }),

    lastName: z
      .string()
      .trim()
      .min(1, { error: "El apellido es requerido" })
      .max(50, { error: "El apellido es demasiado largo" }),

    email: z.email({ error: "Correo electrónico inválido" }),

    password: z
      .string()
      .min(6, { error: "La contraseña debe tener al menos 6 caracteres" })
      .max(100, { error: "La contraseña es demasiado larga" }),

    confirmPassword: z.string().min(6, { error: "Confirma tu contraseña" }),

    countryId: z.uuid({ error: "Debes seleccionar un país válido" }),

    stateId: z.uuid({ error: "Debes seleccionar una región válida" }),

    zoneId: z.uuid({ error: "Debes seleccionar una zona válida" }),

    street: z
      .string()
      .trim()
      .min(1, { error: "La calle es requerida" })
      .max(100, { error: "La calle es demasiado larga" }),

    number: z
      .string()
      .trim()
      .min(1, { error: "El número de calle es requerido" })
      .max(10, { error: "El número de calle es demasiado largo" }),

    zipCode: z
      .string()
      .trim()
      .min(1, { error: "El código postal es requerido" })
      .max(12, { error: "El código postal es demasiado largo" }),

    notes: z
      .string()
      .trim()
      .max(300, { error: "La nota es demasiado extensa" })
      .optional()
      .transform((e) => (e === "" ? undefined : e)),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "Las contraseñas no coinciden",
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
