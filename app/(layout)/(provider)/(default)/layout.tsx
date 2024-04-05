'use client';
import React from 'react';

import Header from '@/components/Header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen p-4 max-w-[800px]">
      <Header title="Reminders" />
      {children}
    </div>
  );
}
