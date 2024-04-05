import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { Toaster } from '@/components/ui/sonner';
import QueryProvider from '@/providers/query-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Toodoo',
  description: '우테코 따라잡기 첫번째 구현과제',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <QueryProvider>
        <body className={inter.className}>{children}</body>
        <Toaster richColors />
      </QueryProvider>
    </html>
  );
};

export { metadata };
export default RootLayout;
