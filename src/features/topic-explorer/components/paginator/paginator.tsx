import type { FC } from 'react';
import type { PaginatorProps } from '../../types';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '@/components/ui/pagination'
import { PaginatorItem } from './paginator-item';
import { generatePaginatorPagesOpt } from '../../utils/generate-paginator-pages-opt';

export const Paginator: FC<PaginatorProps> = ({
  currentPage,
  totalPage,
}) => {
  const pagesOpt = generatePaginatorPagesOpt(currentPage, totalPage);

  return (
    <div aria-label="paginator" className="mt-8 flex justify-center">
      <Pagination>
        <PaginationContent>
          <PaginatorItem
            asPrevButton
            page={currentPage - 1 > 1 ? currentPage - 1 : 1}
          />

          {currentPage >= 4 && (
            <>
              <PaginatorItem page={1} />

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}

          {pagesOpt.map((page) => (
            <PaginatorItem key={page} page={page} />
          ))}

          {currentPage < totalPage - 2 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginatorItem page={totalPage} />
            </>
          )}

          <PaginatorItem
            asNextButton
            page={currentPage < totalPage ? currentPage + 1 : totalPage}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};
