"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const mainNavLinks = [
  { href: "/", label: "Principal" },
  { href: "/map", label: "Mapa" },
];

const categoryLinks = [
  { href: "/categories/plomeria", label: "Plomería" },
  { href: "/categories/electricidad", label: "Electricidad" },
];

const HeaderNav = () => {
  const pathname = usePathname();

  const baseLinkStyles =
    "flex items-center font-normal gap-1 px-3 py-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground";
  const activeLinkStyles = "bg-accent text-accent-foreground font-semibold";

  return (
    <NavigationMenu className="hidden md:flex md:col-span-4 md:pl-4">
      <NavigationMenuList className="gap-2">
        {mainNavLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className={cn(
                  baseLinkStyles,
                  pathname === link.href && activeLinkStyles
                )}
              >
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              baseLinkStyles,
              pathname.startsWith("/categories") && activeLinkStyles
            )}
          >
            Categorías
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-3xs gap-1 p-3">
              {categoryLinks.map((category) => (
                <li key={category.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={category.href}
                      className="block rounded-md px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
                    >
                      {category.label}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/categories"
                    className="block rounded-md px-2 py-1.5 font-medium text-primary hover:bg-accent hover:text-accent-foreground"
                  >
                    Ver todas
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNav;
