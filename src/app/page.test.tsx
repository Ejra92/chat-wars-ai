import { render, screen } from "@testing-library/react";

import HomePage from "./page";

describe('HomePage suite tests', () => {
  it('Should have the main topics card visible', () => {
    render(
      <HomePage />
    );

    const peopleExplorer = screen.getByText(/people explorer/i);
    const planetsExplorer = screen.getByText(/planets explorer/i);
    const starshipsExplorer = screen.getByText(/starships explorer/i);

    expect(peopleExplorer).toBeInTheDocument();
    expect(planetsExplorer).toBeInTheDocument();
    expect(starshipsExplorer).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(
      <HomePage />
    );

    expect(container).toMatchSnapshot();
  });

  it('Should have Link component correctly setted by explorer', () => {
    render(
      <HomePage />
    );

    const peopleExplorerButton = screen.getByRole('button', { name: /explore people/i });
    const planetsExplorerButton = screen.getByRole('button', { name: /explore planets/i });
    const starshipsExplorerButton = screen.getByRole('button', { name: /explore starships/i });

    expect(peopleExplorerButton).toBeInTheDocument();
    expect(peopleExplorerButton.parentElement).toHaveAttribute('href', '/people/page/1')
    
    expect(planetsExplorerButton).toBeInTheDocument();
    expect(planetsExplorerButton.parentElement).toHaveAttribute('href', '/planets/page/1')

    expect(starshipsExplorerButton).toBeInTheDocument();
    expect(starshipsExplorerButton.parentElement).toHaveAttribute('href', '/starships/page/1')
  })
});
