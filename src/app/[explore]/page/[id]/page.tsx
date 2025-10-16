import type { Metadata } from "next";

import type { ValidPathsToExplore } from "@/features/topic-explorer/types";

import { capitalize } from "@/lib/utils";
import { TopicExplorer } from "@/features/topic-explorer";
import { getItemsToExploreBy } from "@/features/topic-explorer/api";
import { validPathsToExplore } from "@/features/topic-explorer/utils";
import { Searcher } from "@/features/searcher";

interface ExploreByIdPageProps {
  params: Promise<{
    explore: ValidPathsToExplore;
    id: string;
  }>;
};

export const generateMetadata = async ({
  params
}: ExploreByIdPageProps): Promise<Metadata> => {
  const { explore, id } = await params;

  return {
    title: `${capitalize(explore)} - ${id}`,
    description: `Explore more about the ${capitalize(explore)} and all the data related. Go deep into this incredible universe.`,
    keywords: [explore],
  };
};

export const generateStaticParams = () => {
  const paths = validPathsToExplore.map(path => [
    { explore: path, id: '1' },
    { explore: path, id: '2' },
    { explore: path, id: '3' },
  ]).flat();

  return paths;
};

export default async function ExploreByIdPage({
  params,
}: ExploreByIdPageProps) {
  const { explore, id } = await params;
  const { items, count } = await getItemsToExploreBy(id, explore);

  return (
    <>
      <Searcher explore={explore} />

      <TopicExplorer
        items={items}
        currentPage={+id}
        totalPage={count}
      />
    </>
  );
};
