import React from 'react';

import { cn } from '@/lib/utils';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'w-screen h-screen',
        'flex flex-col items-center justify-center',
        'bg-neutral-50',
      )}
    >
      <main id="main relative">{children}</main>
    </div>
  );
}
