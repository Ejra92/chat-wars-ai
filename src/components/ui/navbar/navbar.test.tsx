import { render, screen } from "@testing-library/react";
import { Navbar, paths } from "./navbar";

describe('Navbar suite tests', () => {
  it('Should render and show paths correctly', () => {
    render(<Navbar />);

    paths.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('Should match snapshot', () => {
    const { container } = render(<Navbar />);

    expect(container).toMatchSnapshot();
  });
});
