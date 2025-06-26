'use client';

import { Home, Map, List, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
              className={cn(
              "flex flex-col h-16 grow items-center justify-center bg-primary gap-1 text-sm font-medium hover:bg-primary-hover active:bg-primary-active md:hidden",
              {
                "border-t-2 border-violet-800": pathname === link.href,
              }
            )}
            >
              <Icon className={cn(
                "h-5 w-5 mb-0.5 text-primary-foreground",
                {
                  "text-violet-800": pathname === link.href
                }
                )} />
              <p className={cn(
                "text-primary-foreground",
                { 
                  "text-violet-800": pathname === link.href 
                }
                )}>{link.label}</p>
            </Link>
          );
        })}
      </>
  );
}
