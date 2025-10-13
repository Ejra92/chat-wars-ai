import type { NextRouter } from 'next/router';

import { render, screen } from "@testing-library/react";
import { Searcher } from "./searcher";
import userEvent from '@testing-library/user-event';
import { createMockRouter, MockRouter, routerPushMock } from '@/lib/tests-utils/mock-router';

const mockRouter = createMockRouter({
  pathname: '/planets/page/1',
});

const renderSearcher = () => {
  const { debug } = render(
    <MockRouter value={mockRouter as NextRouter}>
      <Searcher explore="planets" />
    </MockRouter>
  );

  const form = screen.getByLabelText('search-form');
  const inputText = screen.getByRole('textbox', { name: 'query' });
  const inputSubmit = screen.getByRole('textbox', { hidden: true });
  const button = screen.getByRole('button');

  return {
    form,
    inputText,
    inputSubmit,
    button,
    debug
  };
};

describe('Searcher suite tests', () => {
  it('Should render correctly', () => {
    const {
      form,
      inputText,
      inputSubmit,
      button
    } = renderSearcher();

    expect(form).toBeInTheDocument();
    expect(inputText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(inputSubmit).toBeInTheDocument();
  });

  it('Should update inputText if user type on it', async () => {
    const {
      inputText,
    } = renderSearcher();

    await userEvent.type(inputText, 'luke skywalker');

    expect(inputText).toHaveValue('luke skywalker');
  });

  it('Form should have action with the correct value', () => {
    const {
      form,
    } = renderSearcher();

    expect(form).toHaveAttribute('action', '/planets/search');
  });

  it('Should not redirect if inputText does not have value and enter key o submit button has been pressed', async () => {
    const {
      inputText,
      button
    } = renderSearcher();

    expect(inputText).toHaveValue('');

    await userEvent.click(button);

    await userEvent.keyboard('{enter}');

    expect(routerPushMock).not.toHaveBeenCalled();
  });

  it('Should redirect if inputText has a value and submit button has been pressed and', async () => {
    const {
      inputText,
      button
    } = renderSearcher();

    const query = 'tatooine';

    await userEvent.type(inputText, query);

    await userEvent.click(button);

    expect(routerPushMock).toHaveBeenCalledWith(
      `http://localhost/planets/search?query=${query}`,
      undefined,
      { scroll: undefined }
    );
  });

  it('Should redirect if inputText has a value and enter key has been pressed', async () => {
    const {
      inputText,
    } = renderSearcher();

    const query = 'tatooine';

    await userEvent.type(inputText, query);

    await userEvent.keyboard('{enter}');

    expect(routerPushMock).toHaveBeenCalledWith(
      `http://localhost/planets/search?query=${query}`,
      undefined,
      { scroll: undefined }
    );
  });
});
