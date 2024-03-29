import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import './globals.css';
import { QueryProvider } from '@/components/QueryProvider';

const metadata: Metadata = {
  title: 'Toodoo',
  description: '우테코 따라잡기 첫번째 구현과제',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
