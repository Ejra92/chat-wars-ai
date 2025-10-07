import { Skeleton } from "@/components/ui/skeleton"

export const PaginatorSkeleton = () => (
  <div className="flex mt-8 w-[204px] gap-1 justify-between">
    <Skeleton className="w-[40px] h-[36px] rounded-md" />

    <Skeleton className="w-[36px] h-[36px] rounded-md" />
    <Skeleton className="w-[36px] h-[36px] rounded-md" />
    <Skeleton className="w-[36px] h-[36px] rounded-md" />

    <Skeleton className="w-[40px] h-[36px] rounded-md" />
  </div>
);
