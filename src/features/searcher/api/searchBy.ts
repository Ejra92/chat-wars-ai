import type {
  ApiItems,
  ValidPathsToExplore,
} from "@/features/topic-explorer/types";

import { notFound } from "next/navigation";
import { formatItemsBy } from "@/features/topic-explorer/utils";

export const searchBy = async (
  query: string,
  explore: ValidPathsToExplore,
) => {
  try {
    const raw = await fetch(
      `${process.env.BASE_API_URL}/${explore}/?search=${query}`
    );
    const result: { count: number; results: ApiItems[]; detail: string } = await raw.json();

    if (result?.detail === 'Not found') {
      notFound()
    }

    const items = formatItemsBy?.[explore](result.results);

    return {
      items,
    };
  } catch {
    notFound();
  };
};
