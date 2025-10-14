import { render, screen } from "@testing-library/react";
import { NavbarItem } from "./navbar-item";
import { NavigationMenu, NavigationMenuList } from "../navigation-menu";

const renderNavigationItem = (
  { path, title }: { path: string; title: string; }
) => render(
  <NavigationMenu>
    <NavigationMenuList>
      <NavbarItem path={path} title={title} />
    </NavigationMenuList>
  </NavigationMenu>
);


describe('NavbarItem test suite', () => {
  it('Should render well', () => {
    renderNavigationItem({ path: '/', title: 'Home' });

    expect(screen.getByText('Home'));
  });

  it('Should set right correctly path prop', () => {
    renderNavigationItem({ path: '/starships/page/1', title: 'Starships' });

    expect(
      screen.getByText('Starships')
    ).toHaveAttribute('href', '/starships/page/1')
  });

  it('Should match snapshot', () => {
    const { container } = renderNavigationItem(
      { path: '/people/page/1', title: 'People' }
    );

    expect(container).toMatchSnapshot();
  });
});
