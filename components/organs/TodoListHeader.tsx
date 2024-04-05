import { useContext } from 'react';

import AddTodoSheet from '@/components/molecules/AddTodoSheet';
import CounterTodo from '@/components/atoms/CounterTodo';
import ShowCompletedToggle from '@/components/atoms/ShowCompletedTodoToggle';
import { TodoContext, Action } from '@/store/todo-context';

const TodoListHeader = () => {
  const { isShowDone, handleIsShowDone } = useContext(TodoContext);
  const action: Action = { type: 'TOGGLE' };

  return (
    <div className="flex w-full gap-3">
      <CounterTodo />
      <AddTodoSheet />
      <ShowCompletedToggle
        defaultPressed={isShowDone}
        onPressedChange={() => handleIsShowDone(action)}
      />
    </div>
  );
};

export default TodoListHeader;
