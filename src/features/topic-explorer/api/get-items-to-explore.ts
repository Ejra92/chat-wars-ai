import type { ApiItems, ValidPathsToExplore } from "../types";

import { notFound } from "next/navigation";

import { formatItemsBy } from "../utils";

export const getItemsToExploreBy = async (
  page: string,
  explore: ValidPathsToExplore,
) => {
  try {
    const raw = await fetch(
      `${process.env.BASE_API_URL}/${explore}/?page=${page}`
    );
    const result: { count: number; results: ApiItems[]; detail: string } = await raw.json();

    if (result?.detail === 'Not found') {
      notFound()
    }

    const items = formatItemsBy?.[explore](result.results);

    return {
      count: Math.ceil(result.count / 10),
      items,
    };
  } catch {
    notFound();
  };
};
