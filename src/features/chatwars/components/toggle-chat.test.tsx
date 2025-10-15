import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ToggleChat } from "./toggle-chat";

const ChildComponent = ({ show }: { show: boolean }) => {
  if (!show) {
    return null
  };

  return (
    <div>
      <p>child component</p>
    </div>
  )
};

describe('ToggleChat suite tests', () => {
  beforeEach(() => {
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should not render nothing from child component if show is false', () => {
    render(
      <ToggleChat>
        {(show) => <ChildComponent show={show} />}
      </ToggleChat>
    );

    const component = screen.queryByText('child component');

    expect(component).not.toBeInTheDocument();
  });

  it('Should render elements from child component if show is true', async () => {
    render(
      <ToggleChat>
        {(show) => <ChildComponent show={show} />}
      </ToggleChat>
    );

    expect(screen.queryByText('child component')).not.toBeInTheDocument();

    const toggleButton = screen.getByLabelText('toggle-open');

    await userEvent.click(toggleButton)

    expect(screen.getByText('child component')).toBeInTheDocument();
  });

  it('Should render toggle-open when show is false', async () => {
    render(
      <ToggleChat>
        {(show) => <ChildComponent show={show} />}
      </ToggleChat>
    );


    expect(screen.getByLabelText('toggle-open')).toBeInTheDocument();
  });

  it('Should render toggle-close when show is true', async () => {
    render(
      <ToggleChat>
        {(show) => <ChildComponent show={show} />}
      </ToggleChat>
    );

    const toggleButton = screen.getByLabelText('toggle-open');

    await userEvent.click(toggleButton);

    expect(screen.getByLabelText('toggle-close')).toBeInTheDocument();
  });

  it('Should render tooltip', async () => {
    render(
      <ToggleChat>
        {(show) => <ChildComponent show={show} />}
      </ToggleChat>
    );

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });
});
