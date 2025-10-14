import { notFound } from "next/navigation";
import { searchBy } from "./searchBy";

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
];

describe('SearchBy suite tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return items correctly when api resolve succesfully', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({
        results: mockResolvedValue,
        detail: '',
      }),
    });

    const { items } = await searchBy('luke skywaler', 'people');

    expect(items).toStrictEqual([{
      "birth_year": "19BBY",
      "eye_color": "blue",
      "gender": "male",
      "hair_color": "blond",
      "height": "172",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "fair"
    }]);
  });

  it('Should return an empty array if service do not have results', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({
        results: [],
        detail: '',
      }),
    });

    const { items } = await searchBy('liuk skaiwalkier', 'people');

    expect(items).toStrictEqual([]);
  });

  it('Should call notFound if api resolve a call but its detail is "Not found"', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({
        results: [],
        detail: 'Not found',
      }),
    });

    await searchBy('liuk skaiwalkier', 'people');

    expect(notFound).toHaveBeenCalled();
  });

  it('Should call notFound if api resolve a call but its detail is "Not found"', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce({
      json: () => Promise.reject(),
    });

    await searchBy('liuk skaiwalkier', 'people');

    expect(notFound).toHaveBeenCalled();
  });
});
