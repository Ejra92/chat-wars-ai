import { notFound } from "next/navigation";
import { getItemsToExploreBy } from "./get-items-to-explore";
import { mockPeopleResolveValue } from "@/lib/tests-utils";

jest.mock('next/navigation');

describe('GetItemsToExplore suite tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return count and items correctly', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({
        count: 82,
        results: mockPeopleResolveValue,
      })
    });

    const result = await getItemsToExploreBy('1', 'people');

    expect(result).toStrictEqual({
      "count": 9,
      "items": [
        {
          "birth_year": "19BBY",
          "eye_color": "blue",
          "gender": "male",
          "hair_color": "blond",
          "height": "172",
          "mass": "77",
          "name": "Luke Skywalker",
          "skin_color": "fair"
        },
        {
          "birth_year": "112BBY",
          "eye_color": "yellow",
          "gender": "n/a",
          "hair_color": "n/a",
          "height": "167",
          "mass": "75",
          "name": "C-3PO",
          "skin_color": "gold"
        }
      ]
    });
  });

  it('Should call notFound function if swapi return a result.detail === "Not found" ', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({
        detail: 'Not found',
      })
    });

    await getItemsToExploreBy('1', 'people');

    expect(notFound).toHaveBeenCalled();
  });

  it('Should call notFound function if swapi generate a reject', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce({
      json: () => Promise.reject({
        detail: 'Not found',
      })
    });

    await getItemsToExploreBy('1', 'people');

    expect(notFound).toHaveBeenCalled();
  });
});
