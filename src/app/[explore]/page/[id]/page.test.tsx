import ExploreByIdPage, { generateMetadata, generateStaticParams } from "./page";
import { validPathsToExplore } from "@/features/topic-explorer/utils";
import { render } from "@testing-library/react";
import { getItemsToExploreBy } from "@/features/topic-explorer/api";
import { usePathname } from "next/navigation";
import { mockPeopleResolveValue, peoplePage1Params } from "@/lib/tests-utils";

jest.mock('next/navigation');

jest.mock('@/features/topic-explorer/api');

describe('ExploreByIdPage suite test', () => {

  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/people/page/1');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshoot', async () => {
    (getItemsToExploreBy as jest.Mock).mockResolvedValueOnce({
      count: 82,
      items: mockPeopleResolveValue,
    });

    const { container } = render(await ExploreByIdPage({ params: peoplePage1Params }));

    expect(getItemsToExploreBy).toHaveBeenCalledWith('1', 'people');

    expect(container).toMatchSnapshot();
  });

  describe('GenerateMetadata', () => {
    it('Should return correctly metada', async () => {
      const metadata = await generateMetadata({ params: peoplePage1Params });

      expect(metadata).toMatchObject({
        "description": "Explore more about the People and all the data related. Go deep into this incredible universe.",
        "keywords": [
          "people",
        ],
        "title": "People - 1",
      });
    });
  });

  describe('GenerateStaticParams', () => {
    it('Should return correctly staticParams', () => {
      const staticParams = generateStaticParams();

      const paths = validPathsToExplore.map(path => [
        { explore: path, id: '1' },
        { explore: path, id: '2' },
        { explore: path, id: '3' },
      ]).flat();

      expect(staticParams).toStrictEqual(paths)
    });
  });
});
