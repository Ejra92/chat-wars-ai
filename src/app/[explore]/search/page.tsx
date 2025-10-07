import type { Metadata } from "next";

import type { ValidPathsToExplore } from "@/features/topic-explorer/types";

import { capitalize } from "@/lib/utils";
import { TopicExplorer } from "@/features/topic-explorer";
import { searchBy, Searcher } from "@/features/searcher";
import { notFound, redirect } from "next/navigation";

interface ExploreBySearchPageProps {
  params: Promise<{
    explore: ValidPathsToExplore;
  }>;
  searchParams: Promise<{ query: string }>;
};

export const generateMetadata = async ({
  params
}: ExploreBySearchPageProps): Promise<Metadata> => {
  const { explore } = await params;

  return {
    title: `${capitalize(explore)} - Search`,
    description: `
      Explore more about the ${capitalize(explore)} through our incredible search system.
    `,
  };
};

export default async function ExploreBySearchPage({
  params,
  searchParams,
}: ExploreBySearchPageProps) {
  const { explore } = await params;
  const { query } = await searchParams;
  const { items } = await searchBy(query, explore);

  if (!query) {
    redirect(`/${explore}/page/1`);
  };

  if (!items.length) {
    notFound();
  }

  return (
    <>
      <Searcher explore={explore} />

      <TopicExplorer
        items={items}
        currentPage={0}
        totalPage={0}
        withPaginator={false}
      />
    </>
  );
};
