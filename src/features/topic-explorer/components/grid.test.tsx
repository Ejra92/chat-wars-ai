import { render, screen } from "@testing-library/react";
import { Grid } from "./grid";
import { processValueBy } from "../utils/process-value-by";

const validateKeyAndValueFieldsOnCard = (data: [string, string][]) => {
  data.forEach(([key, value]) => {
    if (key === 'name') {
      return;
    }

    const formatKey = key.split("_").join(" ");
    const keyOnCard = screen.getByText(`${formatKey}:`);
    const formatValue = processValueBy(key, value);
    const valueOnCard = screen.getByText(formatValue);

    expect(keyOnCard).toBeInTheDocument();
    expect(valueOnCard).toBeInTheDocument();
  });
};

describe('Grid suite tests', () => {
  it('Should render correctly people item', () => {
    const peopleItem = [
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
    ];

    render(<Grid items={peopleItem} />);

    expect(screen.getByText(peopleItem[0].name)).toBeInTheDocument();

    const data = Object.entries(peopleItem[0]);

    validateKeyAndValueFieldsOnCard(data);
  });

  it('Should render correctly planets item', () => {
    const planetsItem = [
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
    ];

    render(<Grid items={planetsItem} />);

    expect(screen.getByText(planetsItem[0].name)).toBeInTheDocument();

    const data = Object.entries(planetsItem[0]);

    validateKeyAndValueFieldsOnCard(data);
  });

  it('Should render correctly starships item', () => {
    const starshipsItem = [
      {
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
      }
    ];

    render(<Grid items={starshipsItem} />);

    expect(screen.getByText(starshipsItem[0].name)).toBeInTheDocument();

    const data = Object.entries(starshipsItem[0]);

    validateKeyAndValueFieldsOnCard(data);
  });
});
