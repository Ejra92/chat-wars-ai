import { render, screen } from "@testing-library/react";
import { ChatWars } from "./chat-wars";
import userEvent from "@testing-library/user-event";

jest.mock('./components/chat', () => ({
  Chat: ({ show }: { show: boolean }) => {
    if (!show) {
      return null;
    }
  
    return(
      <div>
        <p> FakeChat </p>
      </div>
    );
  },
}))

describe('ChatWars suite tests', () => {
  it('Should match with snashop when show is false', () => {
    const { container } = render(<ChatWars />);

    expect(container).toMatchSnapshot();
  });

  it('Should match with snashop when show is true', async () => {
    const { container } = render(<ChatWars />);

    const toggleButton = screen.getByLabelText('toggle-open');

    await userEvent.click(toggleButton);

    expect(container).toMatchSnapshot();
  });
});
