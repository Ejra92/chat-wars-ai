import type { NavbarItemProps } from "./navbar-item";

import { NavigationMenu, NavigationMenuList } from "../navigation-menu";

import { NavbarItem } from "./navbar-item";

export const paths: NavbarItemProps[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/people/page/1',
    title: 'People',
  },
  {
    path: '/planets/page/1',
    title: 'Planets',
  },
  {
    path: '/starships/page/1',
    title: 'Starships',
  },
];

export const Navbar = () => (
  <div className="mb-3 md:mb-5 flex justify-center">
    <NavigationMenu>
      <NavigationMenuList>
        {paths.map(({ path, title }) => (
          <NavbarItem
            key={path}
            path={path}
            title={title}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);
