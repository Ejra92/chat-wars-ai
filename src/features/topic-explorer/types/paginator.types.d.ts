export interface PaginatorProps {
  currentPage: number;
  totalPage: number;
}

interface PaginatorItemProps {
  page: number;
  asPrevButton?: boolean;
  asNextButton?: boolean;
}
