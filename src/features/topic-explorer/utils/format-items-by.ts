import type {
  APIPeople,
  People,
  APIPlanets,
  Planets,
  APIStarships,
  Starships,
} from "../types";

const formatPeopleData = (items: unknown): People[] => {
  return (items as APIPeople[]).map(item => ({
    birth_year: item.birth_year,
    eye_color: item.eye_color,
    gender: item.gender,
    hair_color: item.hair_color,
    height: item.height,
    mass: item.mass,
    name: item.name,
    skin_color: item.skin_color,
  }));
};

const formatPlanetsData = (items: unknown): Planets[] => {
  return (items as APIPlanets[]).map(item => ({
    climate: item.climate,
    diameter: item.diameter,
    gravity: item.gravity,
    name: item.name,
    orbital_period: item.orbital_period,
    population: item.population,
    rotation_period: item.rotation_period,
    surface_water: item.surface_water,
    terrain: item.terrain,
  }));
};

const formatStarshipsData = (items: unknown): Starships[] => {
  return (items as APIStarships[]).map(item => ({
    cargo_capacity: item.cargo_capacity,
    cost_in_credits: item.cost_in_credits,
    crew: item.crew,
    length: item.length,
    manufacturer: item.manufacturer,
    max_atmosphering_speed: item.max_atmosphering_speed,
    model: item.model,
    name: item.name,
    passengers: item.passengers,
    starship_class: item.starship_class,
  }))
};

export const formatItemsBy = {
  people: formatPeopleData,
  planets: formatPlanetsData,
  starships: formatStarshipsData,
};
