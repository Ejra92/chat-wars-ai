import { formatItemsBy } from "./format-items-by";

describe('FormatItemsBy suite tests', () => {
  it('Should format correctly ApiPeople type data to meet with People type', () => {
    const people = formatItemsBy['people']([
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
      }
    ]);

    expect(people).toStrictEqual([
      {
        birth_year: '19BBY',
        eye_color: 'blue',
        gender: 'male',
        hair_color: 'blond',
        height: '172',
        mass: '77',
        name: 'Luke Skywalker',
        skin_color: 'fair'
      }
    ]);
  });

  it('Should format correctly ApiPlanets type data to meet with Planets type', () => {
    const planets = formatItemsBy['planets']([
      {
        "name": "Tatooine",
        "rotation_period": "23",
        "orbital_period": "304",
        "diameter": "10465",
        "climate": "arid",
        "gravity": "1 standard",
        "terrain": "desert",
        "surface_water": "1",
        "population": "200000",
        "residents": [],
        "films": [],
        "created": "2014-12-09T13:50:49.641000Z",
        "edited": "2014-12-20T20:58:18.411000Z",
        "url": "https://swapi.dev/api/planets/1/"
      }
    ]);

    expect(planets).toStrictEqual([
      {
        climate: "arid",
        diameter: "10465",
        gravity: "1 standard",
        name: "Tatooine",
        orbital_period: "304",
        population: "200000",
        rotation_period: "23",
        surface_water: "1",
        terrain: "desert",
      }
    ]);
  });

  it('Should format correctly ApiStarships type data to meet with Starships type', () => {
    const starships = formatItemsBy['starships']([
      {
        "name": "Death Star",
        "model": "DS-1 Orbital Battle Station",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": "1000000000000",
        "length": "120000",
        "max_atmosphering_speed": "n/a",
        "crew": "342,953",
        "passengers": "843,342",
        "cargo_capacity": "1000000000000",
        "consumables": "3 years",
        "hyperdrive_rating": "4.0",
        "MGLT": "10",
        "starship_class": "Deep Space Mobile Battlestation",
        "pilots": [],
        "films": [],
        "created": "2014-12-10T16:36:50.509000Z",
        "edited": "2014-12-20T21:26:24.783000Z",
        "url": "https://swapi.dev/api/starships/9/"
      }
    ]);

    expect(starships).toStrictEqual([{
      cargo_capacity: "1000000000000",
      cost_in_credits: "1000000000000",
      crew: "342,953",
      length: "120000",
      manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
      max_atmosphering_speed: "n/a",
      model: "DS-1 Orbital Battle Station",
      name: "Death Star",
      passengers: "843,342",
      starship_class: "Deep Space Mobile Battlestation",
    }]);
  });

});