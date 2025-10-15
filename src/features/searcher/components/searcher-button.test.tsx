import { render, screen } from "@testing-library/react";
import { SearcherButton } from "./searcher-button";
import { useFormStatus } from "react-dom";

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: jest.fn(() => ({
    pending: false,
    method: null,
    action: null,
  })),
}));

describe('SearcherButton suite tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should show search-icon if formStatus.pending is false', () => {
    render(<SearcherButton />);

    expect(screen.getByLabelText('search-icon'));
  });

  it('Should been disabled false if formStatus.pending is true', () => {
    render(<SearcherButton />);

    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });

  it('Should show search-icon if formStatus.pending is true', () => {
    (useFormStatus as jest.Mock).mockReturnValue({
      pending: true,
    });

    const { debug } = render(<SearcherButton />);

    debug();

    expect(screen.getByLabelText('loader-icon'));
  });

  it('Should been disabled true if formStatus.pending is true', () => {
    render(<SearcherButton />);

    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
