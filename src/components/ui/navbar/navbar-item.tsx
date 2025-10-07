"use client";

import type { FC } from "react";

import Link from "next/link";

import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "../navigation-menu";

export interface NavbarItemProps {
  title: string;
  path: string;
};

export const NavbarItem: FC<NavbarItemProps> = ({
  path,
  title,
}) => (
  <NavigationMenuItem>
    <NavigationMenuLink
      className="px-2 md:px-4 py-2"
      asChild
    >
      <Link href={path} >
        {title}
      </Link>
    </NavigationMenuLink>
  </NavigationMenuItem>
);
