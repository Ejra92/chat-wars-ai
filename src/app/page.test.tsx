import { render, screen } from "@testing-library/react";

import HomePage from "./page";
import userEvent from "@testing-library/user-event";
import { createMockRouter, MockRouter } from "@/lib/tests-utils/mock-router";
import { NextRouter } from "next/router";

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

  describe('Behavior tests', () => {
    const renderHomePageWithRouter = (
      params: Partial<NextRouter> = {}
    ) => {
      const mockRouter = createMockRouter(params);

      render(
      <MockRouter value={mockRouter as NextRouter}>
        <HomePage />
      </MockRouter>
    )};
  });
});
