import { generatePaginatorPagesOpt } from "./generate-paginator-pages-opt";

describe('GeneratePaginatorPagesOpt suite tests', () => {
  it('Should return 3 elements if currentPage is <= 3', () => {
    const currentPage = 1;
    const totalPage = 9;
    const result = generatePaginatorPagesOpt(currentPage, totalPage);

    expect(result).toStrictEqual([1, 2, 3]);
  });

  it('Should return last 3 elements if currentPage >= totalpage - 2', () => {
    const currentPage = 5;
    const totalPage = 7;
    const result = generatePaginatorPagesOpt(currentPage, totalPage);

    expect(result).toStrictEqual([5, 6, 7]);
  });

  it('Should return 3 middle elements if currentPage > 3 and totalPage - 2 > currentPage', () => {
    const currentPage = 4;
    const totalPage = 8;
    const result = generatePaginatorPagesOpt(currentPage, totalPage);

    expect(result).toStrictEqual([3, 4, 5]);
  });
});
