"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validators/register-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription, // Podemos añadir descripciones si es necesario
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import z from "zod";
import router, { useRouter } from "next/router";
import { toast } from "sonner";

type RegisterResponse =
  | {
      success: true;
      message: string;
      userId: number;
    }
  | {
      success: false;
      message?: string;
      errors?: Record<string, string[]>;
    };

// --- Simulación de datos de una API ---
// En una app real, esto vendría de una llamada a tu backend (ej. Supabase)
const ALL_COUNTRIES = [
  { id: 1, name: "Argentina" },
  { id: 2, name: "Chile" },
];
const ALL_STATES = [
  { id: 1, name: "Mendoza", countryId: 1 },
  { id: 2, name: "Buenos Aires", countryId: 1 },
  { id: 3, name: "Región Metropolitana", countryId: 2 },
];
const ALL_ZONES = [
  { id: 1, name: "Luján de Cuyo", stateId: 1 },
  { id: 2, name: "Tupungato", stateId: 1 },
  { id: 3, name: "La Plata", stateId: 2 },
  { id: 4, name: "Santiago Centro", stateId: 3 },
];
// --- Fin de la simulación ---

export function RegisterForm() {
  const [states, setStates] = useState<{ id: number; name: string }[]>([]);
  const [zones, setZones] = useState<{ id: number; name: string }[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.input<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      street: "",
      number: "",
      zipCode: "",
      notes: "",
    },
  });

  const { isSubmitting } = form.formState;

  const selectedCountryId = form.watch("countryId");
  const selectedStateId = form.watch("stateId");

  useEffect(() => {
    if (selectedCountryId) {
      setStates(
        ALL_STATES.filter((s) => s.countryId === Number(selectedCountryId))
      );
      form.setValue("stateId", "0");
      form.setValue("zoneId", "0");
      setZones([]);
    } else {
      setStates([]);
      setZones([]);
    }
  }, [selectedCountryId, form]);

  useEffect(() => {
    if (selectedStateId) {
      setZones(ALL_ZONES.filter((z) => z.stateId === Number(selectedStateId)));
      form.setValue("zoneId", "0");
    } else {
      setZones([]);
    }
  }, [selectedStateId, form]);

  const onSubmit = async (values: z.input<typeof registerSchema>) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data: RegisterResponse = await res.json();

      if (!data.success) {
        if (data.errors) {
          for (const [field, messages] of Object.entries(data.errors)) {
            messages.forEach((message) => {
              form.setError(field as keyof z.input<typeof registerSchema>, {
                type: "manual",
                message,
              });
            });
          }
        }

        if (data.message) {
          toast.error(data.message);
        }

        return;
      }

      toast.success(data.message);
      form.reset();
    } catch (error) {
      console.error("Error en el registro:", error);
      toast.error("Ocurrió un error al registrar el usuario");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="text-xl font-semibold border-b pb-2">
          Datos Personales
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Juan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword">
                  Confirmar Contraseña
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <h2 className="text-xl font-semibold border-b pb-2 pt-4">
          Dirección de Envío
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="countryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>País</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un país" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent id="country-select">
                    {ALL_COUNTRIES.map((c) => (
                      <SelectItem
                        key={c.id}
                        value={c.id.toString()}
                        id={c.id.toString()}
                      >
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stateId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Región</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                  disabled={!selectedCountryId || states.length === 0}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una región" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent id="state-select">
                    {states.map((s) => (
                      <SelectItem
                        key={s.id}
                        value={s.id.toString()}
                        id={s.id.toString()}
                      >
                        {s.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zoneId"
            render={({ field }) => (
              <FormItem id="zone-field">
                <FormLabel>Zona</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                  disabled={!selectedStateId || zones.length === 0}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una zona" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent id="zone-select">
                    {zones.map((z) => (
                      <SelectItem
                        key={z.id}
                        value={z.id.toString()}
                        id={z.id.toString()}
                      >
                        {z.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Calle</FormLabel>
                <FormControl>
                  <Input placeholder="Av. Siempre Viva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número</FormLabel>
                <FormControl>
                  <Input placeholder="742" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código postal</FormLabel>
              <FormControl>
                <Input placeholder="5561" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notas adicionales (opcional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: Dejar en portería, tocar timbre depto 5B..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "Registrando..." : "Crear Cuenta"}
        </Button>
      </form>
    </Form>
  );
}
