import { cn } from '@/lib/utils';

const RootPage = () => {
  return (
    <main
      className={cn(
        'w-screen h-screen',
        'flex flex-col justify-center items-center',
        'bg-neutral-50',
      )}
    >
      <button
        className={cn(
          'flex flex-col justify-center items-center gap-10',
          'hover:scale-110',
          'active:scale-100',
          'transition-transform',
        )}
      >
        <p className="text-8xl">👋</p>
        <p className="font-bold text-4xl">Hello World</p>
      </button>
    </main>
  );
};

export default RootPage;
