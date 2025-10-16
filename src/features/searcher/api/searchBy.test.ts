import { notFound } from "next/navigation";
import { searchBy } from "./searchBy";
import { mockPeopleResolveValue } from "@/lib/tests-utils";

jest.mock('next/navigation');

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
        results: mockPeopleResolveValue,
        detail: '',
      }),
    });

    const { items } = await searchBy('luke skywaler', 'people');

    expect(items).toStrictEqual([
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
        "skin_color": "gold",
      }
    ]);
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
