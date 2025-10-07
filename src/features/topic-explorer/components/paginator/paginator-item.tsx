"use client";

import type { FC } from 'react';
import type { PaginatorItemProps } from '../../types';

import { usePathname } from 'next/navigation';

import {
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export const PaginatorItem: FC<PaginatorItemProps> = ({
  page,
  asPrevButton,
  asNextButton,
}) => {
  const pathName = usePathname();
  const linkPath = `/${pathName.split('/')[1]}/page/${page}`;
  const isActive = pathName === linkPath;

  return (
    <PaginationItem>
      {asPrevButton && (
        <PaginationPrevious href={linkPath} aria-disabled={!!page} />
      )}

      {asNextButton && (
        <PaginationNext href={linkPath} aria-disabled={!!page} />
      )}

      {(!asPrevButton && !asNextButton) && (
        <PaginationLink
          href={linkPath}
          isActive={isActive}
        >
          {page}
        </PaginationLink>
      )}
    </PaginationItem>
  );
};
