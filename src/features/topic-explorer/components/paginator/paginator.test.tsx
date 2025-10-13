import { render, screen } from "@testing-library/react";
import { Paginator } from "./paginator";
import { usePathname } from "next/navigation";

jest.mock('next/navigation');

describe('Paginator suite tests', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/planets/page/1');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render previous and next elements with its correct href paths', () => {
    render(<Paginator currentPage={2} totalPage={3} />);

    const previousElement = screen.getByLabelText('Go to previous page');
    const nextElement = screen.getByLabelText('Go to next page');

    expect(previousElement).toBeInTheDocument();
    expect(nextElement).toBeInTheDocument();

    expect(previousElement).toHaveAttribute('href', '/planets/page/1');
    expect(nextElement).toHaveAttribute('href', '/planets/page/3');
  });

  it('Should render first, last and the 3 middle elements if totalPage > 3 and currentPage < totalPage - 2', () => {
    render(<Paginator currentPage={5} totalPage={9} />);

    const paginatorElements = screen.getAllByLabelText('paginator-item');
    const element1 = screen.getByText('1');
    const element4 = screen.getByText('4');
    const element5 = screen.getByText('5');
    const element6 = screen.getByText('6');
    const element9 = screen.getByText('9');

    expect(paginatorElements.length).toBe(5);
    expect(element1).toBeInTheDocument();
    expect(element4).toBeInTheDocument();
    expect(element5).toBeInTheDocument();
    expect(element6).toBeInTheDocument();
    expect(element9).toBeInTheDocument();

    expect(element1).toHaveAttribute('href', '/planets/page/1');
    expect(element4).toHaveAttribute('href', '/planets/page/4');
    expect(element5).toHaveAttribute('href', '/planets/page/5');
    expect(element6).toHaveAttribute('href', '/planets/page/6');
    expect(element9).toHaveAttribute('href', '/planets/page/9');
  });

  it('Should render just the first 3 elements with numbers if totalPage <= 3', () => {
    render(<Paginator currentPage={1} totalPage={3} />);

    const paginatorElements = screen.getAllByLabelText('paginator-item');
    const element1 = screen.getByText('1');
    const element2 = screen.getByText('2');
    const element3 = screen.getByText('3');

    expect(paginatorElements.length).toBe(3);
    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element3).toBeInTheDocument();

    expect(element1).toHaveAttribute('href', '/planets/page/1');
    expect(element2).toHaveAttribute('href', '/planets/page/2');
    expect(element3).toHaveAttribute('href', '/planets/page/3');
  });

  it('Should render the first element and the last 4 elements with numbers if currentPage >= totalPage - 2', () => {
    render(<Paginator currentPage={5} totalPage={7} />);

    const paginatorElements = screen.getAllByLabelText('paginator-item');
    const element1 = screen.getByText('1');
    const element5 = screen.getByText('5');
    const element6 = screen.getByText('6');
    const element7 = screen.getByText('7');

    expect(paginatorElements.length).toBe(4);
    expect(element1).toBeInTheDocument();
    expect(element5).toBeInTheDocument();
    expect(element6).toBeInTheDocument();
    expect(element7).toBeInTheDocument();

    expect(element1).toHaveAttribute('href', '/planets/page/1');
    expect(element5).toHaveAttribute('href', '/planets/page/5');
    expect(element6).toHaveAttribute('href', '/planets/page/6');
    expect(element7).toHaveAttribute('href', '/planets/page/7');
  });
});
