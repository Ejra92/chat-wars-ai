import { ValidPathsToExplore } from "@/features/topic-explorer/types";

export const mockPeopleResolveValue = [
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

export const peoplePage1Params: Promise<{ explore: ValidPathsToExplore, id: string }> = Promise.resolve({ explore: 'people', id: '1' });

export const wrongParams: Promise<{ explore: ValidPathsToExplore }> = Promise.resolve({ explore: 'canada' as ValidPathsToExplore });

export const planetsParamsWithoutPage: Promise<{ explore: ValidPathsToExplore }> = Promise.resolve({ explore: 'planets' });
