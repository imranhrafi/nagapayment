"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavItem {
  name: string;
  href: string;
  subMenu?: NavItem[];
}

const navItems: NavItem[] = [
  {
    name: "Products",
    href: "/products",
    subMenu: [
      {
        name: "Terminal",
        href: "/terminal",
      },
      {
        name: "Virtual terminal",
        href: "/vitual-terminal",
      },
      {
        name: "Payment page",
        href: "/payment",
      },
      {
        name: "Invoicing",
        href: "/invoice",
      },
      {
        name: "Payment Links",
        href: "/payment-links",
      },
      {
        name: "Recurring Payment ",
        href: "/recurring-payment",
      },
    ],
  },
  {
    name: "Accept Payments",
    href: "/accept-payments",
  },
  {
    name: "Rules for Surcharging",
    href: "/surcharging",
  },
  {
    name: "pricing",
    href: "/pricing",
  },
  {
    name: "Integrations",
    href: "/integrations",
    subMenu: [
      {
        name: "Dental",
        href: "/integrations/dental",
      },
      {
        name: "QuickBooks",
        href: "/integrations/quickbooks",
      },
    ],
  },
  {
    name: "Case Studies",
    href: "/case-studies",
  },
];

function ListItem({
  className,
  title,
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>
            {title}
          </div>
          <p className='text-sm leading-snug line-clamp-2 text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

ListItem.displayName = "ListItem";

export function NavList({ className }: { className?: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn("hidden lg:flex", className)}>
        {navItems.map((navItem) => (
          <NavigationMenuItem key={navItem.href}>
            {navItem.subMenu ? (
              <NavigationMenuTrigger submenu={true}>
                {navItem.name}
              </NavigationMenuTrigger>
            ) : (
              <NavigationMenuTrigger>
                <NavigationMenuLink href={navItem.href}>
                  {navItem.name}
                </NavigationMenuLink>
              </NavigationMenuTrigger>
            )}

            {navItem.subMenu ? (
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                  {navItem.subMenu.map((subNavItem) => (
                    <ListItem
                      key={subNavItem.href}
                      title={subNavItem.name}
                      href={subNavItem.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            ) : null}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
