import { render } from "@testing-library/react";
import NotFound from "./not-found";

describe('NotFound suite tests for explore page id', () => {
  it('Should match snapshot', () => {
    const { container } = render(<NotFound />);

    expect(container).toMatchSnapshot();
  });
});
