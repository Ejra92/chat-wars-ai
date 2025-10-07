export interface APIPeople {
  name:       string;
  height:     string;
  mass:       string;
  hair_color: string;
  skin_color: string;
  eye_color:  string;
  birth_year: string;
  gender:     string;
  homeworld:  string;
  films:      string[];
  species:    unknown[];
  vehicles:   string[];
  starships:  string[];
  created:    Date;
  edited:     Date;
  url:        string;
}

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

export interface APIPlanets {
  name:            string;
  rotation_period: string;
  orbital_period:  string;
  diameter:        string;
  climate:         string;
  gravity:         string;
  terrain:         string;
  surface_water:   string;
  population:      string;
  residents:       unknown[];
  films:           string[];
  created:         Date;
  edited:          Date;
  url:             string;
}

export interface APIStarships {
  name:                   string;
  model:                  string;
  manufacturer:           string;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  consumables:            string;
  hyperdrive_rating:      string;
  MGLT:                   string;
  starship_class:         string;
  pilots:                 unknown[];
  films:                  string[];
  created:                Date;
  edited:                 Date;
  url:                    string;
}

export interface Planets {
  name:            string;
  rotation_period: string;
  orbital_period:  string;
  diameter:        string;
  climate:         string;
  gravity:         string;
  terrain:         string;
  surface_water:   string;
  population:      string;
}

export interface Starships {
  name:                   string;
  model:                  string;
  manufacturer:           string;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  starship_class:         string;
}

export type ApiItems = APIPeople | APIPlanets | APIStarships;

export type ItemProps = People | Planets | Starships;

export interface GridProps {
  items: ItemProps[]
};
