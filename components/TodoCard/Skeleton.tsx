export function Skeleton() {
  return (
    <div className="flex w-full gap-2.5 rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="text-netural-900 sticky top-3.5 m-3.5 mr-0 flex size-6 flex-none">
        <div className="size-full animate-pulse rounded border border-neutral-200 bg-white shadow-sm" />
      </div>
      <div className="flex flex-grow flex-wrap">
        <div className="flex flex-grow flex-col gap-1 px-3.5 py-4 pl-0">
          <div className="h-5 w-32 animate-pulse rounded bg-neutral-200 font-medium" />
          <div className="h-4 w-48 animate-pulse rounded bg-neutral-200 text-sm" />
        </div>
        <div className="ml-auto flex flex-none gap-0.5 p-2.5 pl-0">
          <div className="sticky top-2.5 flex size-8 animate-pulse items-center justify-center rounded bg-neutral-200" />
          <div className="sticky top-2.5 flex size-8 animate-pulse items-center justify-center rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}
