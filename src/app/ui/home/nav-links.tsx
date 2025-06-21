'use client';

import { Home, Map, List, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Toggle } from "@/components/ui/toggle";

const links = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/mapa", label: "Mapa", icon: Map },
  { href: "/categorias", label: "Categorías", icon: List },
  { href: "/perfil", label: "Perfil", icon: User },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={clsx(
              "flex h-14 grow items-center justify-center bg-primary gap-2 p-3 text-sm font-medium hover:bg-primary-hover",
              {
                "bg-primary-active": pathname === link.href,
              }
            )}
            >
              <Icon className="h-5 w-5 mb-0.5 text-primary-foreground" />
              <p className="text-primary-foreground">{link.label}</p>
            </Link>
          );
        })}
      </>
  );
}
