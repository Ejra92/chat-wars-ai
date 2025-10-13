import { render, screen } from "@testing-library/react";

import { TopicExplorer } from "./topic-explorer";
import { usePathname } from "next/navigation";

jest.mock('next/navigation');

const items = [
  {
    birth_year: '19BBY',
    eye_color: 'blue',
    gender: 'male',
    hair_color: 'blond',
    height: '172',
    mass: '77',
    name: 'Luke Skywalker',
    skin_color: 'fair'
  },
  {
    birth_year: '112BBY',
    eye_color: 'yellow',
    gender: 'n/a',
    hair_color: 'n/a',
    height: '167',
    mass: '75',
    name: 'C-3PO',
    skin_color: 'gold'
  },
  {
    birth_year: '33BBY',
    eye_color: 'red',
    gender: 'n/a',
    hair_color: 'n/a',
    height: '96',
    mass: '32',
    name: 'R2-D2',
    skin_color: 'white, blue'
  },
];

describe('TopicExplorer suite tests', () => {

  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/planets/page/1');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render well', () => {
    render(
      <TopicExplorer
        currentPage={1}
        items={items}
        totalPage={3}
      />
    );
    const cardName = screen.getByText(/luke skywalker/i);
    const paginatorPrevious = screen.getByLabelText('paginator');

    expect(cardName).toBeInTheDocument();
    expect(paginatorPrevious).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(
      <TopicExplorer
        currentPage={1}
        items={items}
        totalPage={3}
      />
    );

    expect(container).toMatchSnapshot()
  });
});

