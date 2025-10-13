import { notFound } from "next/navigation";
import { getItemsToExploreBy } from "./get-items-to-explore";

jest.mock('next/navigation');

const mockResolvedValue = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:10:51.357000Z",
    "edited": "2014-12-20T21:17:50.309000Z",
    "url": "https://swapi.dev/api/people/2/"
  },
];

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
        results: mockResolvedValue,
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
