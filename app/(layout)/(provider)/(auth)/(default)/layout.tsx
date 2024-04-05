'use client';

import React from 'react';

import Header from '@/components/Header';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userName = localStorage.getItem('accessToken');
  return (
    <div className="h-screen w-screen p-4 mt-12 max-w-[800px]">
      <Header
        title={`${userName}'s Reminders`}
        description="Here is a list of your tasks!"
      />
      {children}
    </div>
  );
}
