// Todo count switch에 따라 완료된 todo 개수 카운트 총 ()개의 할 일이 있습니다.
// 완료한 일도 보이게 하면 : 총 ()개의 할 일이 있습니다. ()개의 일을 완료했습니다.
// Switch : 완료한 todo 숨기기 조정

'use client';
import { useState } from 'react';

import AddTodoSheet from '@/components/molecules/AddTodoSheet';
import CounterTodo from '@/components/atoms/CounterTodo';
import ShowCompletedToggle from '@/components/atoms/ShowCompletedTodoToggle';

const TodoListHeader = () => {
  const [isShowDone, setIsShowDone] = useState<boolean>(false);

  const handlePressedChange = (pressed: boolean) => {
    setIsShowDone(pressed);
  };

  return (
    <div className="flex w-full gap-3">
      <CounterTodo />
      <AddTodoSheet />
      <ShowCompletedToggle
        defaultPressed={isShowDone}
        onPressedChange={handlePressedChange}
      />
    </div>
  );
};

export default TodoListHeader;
