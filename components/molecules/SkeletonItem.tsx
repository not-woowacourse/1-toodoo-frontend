import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonItem = () => {
  return (
    <li className="w-full h-16 p-3 bg-white rounded-md border border-neutral-200">
      <div role="status" className="flex items-center space-x-4 animate-purse">
        <Skeleton className="w-4 h-4 rounded-sm" />
        <div className="flex flex-col gap-1 flex-1">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="w-8 h-8" />
        <Skeleton className="w-8 h-8" />
      </div>
    </li>
  );
};
