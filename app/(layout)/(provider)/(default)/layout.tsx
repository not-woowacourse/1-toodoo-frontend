'use client';
import React from 'react';

import Header from '@/components/Header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen min-w-[800px] w-full">
      <Header title="TASKS" />
      {children}
    </div>
  );
}
