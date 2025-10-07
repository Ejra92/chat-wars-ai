import { Skeleton } from "@/components/ui/skeleton";

const fakeItems = Array(10).fill('').map((_, i) => i + 1);

export const GridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 lg:gap-y-10 w-full max-w-[420px] md:max-w-[768px] lg:max-w-[1024px] justify-items-center mb-5 md:mb-0">
    {fakeItems.map((id) => (
      <Skeleton
        key={id}
        className="w-full md:max-w-[340px] lg:max-w-[300px] min-h-[290px] rounded-xl p-6"
      >
        <Skeleton className="mb-8 w-[120px] h-[24px] rounded-full bg-accent-foreground" />

        <Skeleton className="mb-4 w-[200px] h-[24px] rounded-full bg-accent-foreground" />
        <Skeleton className="mb-4 w-[190px] h-[24px] rounded-full bg-accent-foreground" />
        <Skeleton className="mb-4 w-[200px] h-[24px] rounded-full bg-accent-foreground" />
        <Skeleton className="mb-4 w-[190px] h-[24px] rounded-full bg-accent-foreground" />
      </Skeleton>
    ))}
  </div>
);
