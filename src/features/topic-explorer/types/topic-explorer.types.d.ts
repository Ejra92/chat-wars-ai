import type { PaginatorProps } from "./paginator.types";
import type { GridProps } from "./grid.types";

export interface TopicExplorerProps extends PaginatorProps, GridProps {
  withPaginator?: boolean;
}

export type ValidPathsToExplore = 'people' | 'planets' | 'starships';
