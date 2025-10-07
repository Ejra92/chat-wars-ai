import { SearcherSkeleton } from "@/features/searcher/searcher.skeleton";
import { TopicExplorerSkeleton } from "@/features/topic-explorer";

export default async function ExplorerPageSkeleton() {
  return (
    <>
      <SearcherSkeleton />
      <TopicExplorerSkeleton />
    </>
  );
};
