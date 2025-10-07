import { Skeleton } from '@/components/ui/skeleton';

export const SearcherSkeleton = () => (
  <div className="flex mb-6 gap-2 md:mb-8">
    <Skeleton className="w-[238px] h-[36px] rounded-lg" />

    <Skeleton className="w-[36px] h-[36px] rounded-lg" />
  </div>
);