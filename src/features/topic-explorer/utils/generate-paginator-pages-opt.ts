export const generatePaginatorPagesOpt = (currentPage: number, totalPage: number) => {
  if (currentPage <= 3) {
    return [1, 2, 3];
  }

  if (currentPage >= totalPage - 2) {
    return [totalPage - 2, totalPage - 1, totalPage];
  }

  return [currentPage - 1, currentPage, currentPage + 1];
};
