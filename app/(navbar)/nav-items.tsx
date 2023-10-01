"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const navItems = [
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Payments",
    href: "/payments",
    subMenu: [
      {
        name: "Accept Payments",
        href: "/payments/accept",
      },
      {
        name: "Pricing",
        href: "/payments/pricing",
      },
      {
        name: "Rules for Surcharging",
        href: "/payments/rules",
      },
    ],
  },
  {
    name: "Case Studies",
    href: "/case-studies",
  },
];

export function NavItems() {
  return (
    <NavigationMenu className='basis-1/2 hidden lg:block'>
      <NavigationMenuList className=''>
        {navItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger
              className={navigationMenuTriggerStyle()}
            >
              {item.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href={item.href}>
                {item.name}
              </NavigationMenuLink>
              {item.subMenu && (
                <NavigationMenuList>
                  {item.subMenu.map((subItem, subIndex) => (
                    <NavigationMenuItem key={subIndex}>
                      <NavigationMenuLink href={subItem.href}>
                        {subItem.name}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
