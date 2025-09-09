import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatPrice = (price: string | number | bigint) => {
  let numericPrice: number | bigint;

  if (typeof price === "string") {
    const parsed = Number(price);
    numericPrice = isNaN(parsed) ? 0 : parsed;
  } else {
    numericPrice = price;
  }

  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(numericPrice);
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export { cn, formatPrice, formatDate };
