'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import formatDate from '@/utils/formatDate';

interface TodoItemProps {
  title: string;
  description?: string;
  initialIsChecked?: boolean;
  date?: string;
}

export default function TodoItem({
  title,
  description,
  date,
  initialIsChecked = false,
}: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  // useEffect(() => {
  //   if (initialIsChecked) {
  //     setIsChecked(initialIsChecked);
  //   }
  // }, [initialIsChecked]);

  const handleClickCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center hover:bg-black/5 p-4 transition-colors">
      <div
        className="flex gap-x-2 cursor-pointer select-none flex-1"
        onClick={handleClickCheckbox}
      >
        <Checkbox checked={isChecked} onChange={handleClickCheckbox} />
        <div className="grid gap-1.5 leading-none">
          <h5 className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {title}
          </h5>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          <p className="text-xs text-gray-500">{formatDate(date)}</p>
        </div>
      </div>
      <div className="gap-x-1 flex">
        <Button variant={'outline'}>🪄</Button>
        <Button variant={'outline'}>❎</Button>
      </div>
    </div>
  );
}
