import { notFound, redirect } from "next/navigation";

import { mockPeopleResolveValue, searchParams, wrongSearchParams } from "@/lib/tests-utils";
import { render, screen } from "@testing-library/react";
import { searchBy } from "@/features/searcher/api";
import ExploreBySearchPage, { generateMetadata } from "./page";

jest.mock('next/navigation');

jest.mock('@/features/searcher/api');

describe('ExploreBySearchPage suite tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly when the params and search params has been correctly setted', async () => {
    (searchBy as jest.Mock).mockResolvedValueOnce({
      items: [mockPeopleResolveValue[0]],
    });

    render(await ExploreBySearchPage(searchParams))

    expect(searchBy).toHaveBeenCalledWith('Skywalker', 'people');

    expect(screen.getByLabelText('search-form'));

    expect(screen.getByText(/luke skywalker/i));
  });

  it('Should redirect to /people/page/1 when query does not have a valid value', async () => {
    (searchBy as jest.Mock).mockResolvedValueOnce({
      items: [mockPeopleResolveValue[0]],
    });

    render(await ExploreBySearchPage(wrongSearchParams))

    expect(searchBy).toHaveBeenCalledWith('', 'people');

    expect(redirect).toHaveBeenCalledWith('/people/page/1');
  });

  it('Should redirect to notFound when searchBy just return a empty items', async () => {
    (searchBy as jest.Mock).mockResolvedValueOnce({
      items: [],
    });

    render(await ExploreBySearchPage(wrongSearchParams))

    expect(searchBy).toHaveBeenCalledWith('', 'people');

    expect(notFound).toHaveBeenCalled();
  });

  it('Should match with snapshoot', async () => {
    (searchBy as jest.Mock).mockResolvedValueOnce({
      items: [mockPeopleResolveValue[0]],
    });

    const { container } = render(await ExploreBySearchPage(searchParams));

    expect(container).toMatchSnapshot();
  });


  describe('GenerateMetadata', () => {
    it('Should return correctly metada', async () => {
      const metadata = await generateMetadata(searchParams);

      expect(metadata).toMatchObject({
        "description": "Explore more about the People through our incredible search system.",
        "title": "People - Search",
      });
    });
  });
});
