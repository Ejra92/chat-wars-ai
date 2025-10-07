import type { FC } from "react";
import type { TopicExplorerProps } from "./types";

import { Paginator, Grid } from "./components";

export const TopicExplorer: FC<TopicExplorerProps> = ({
  items,
  currentPage,
  totalPage,
  withPaginator = true
}) => (
  <>
    <Grid items={items} />

    {withPaginator && (
      <Paginator
        currentPage={currentPage}
        totalPage={totalPage}
      />
    )}
  </>
);
