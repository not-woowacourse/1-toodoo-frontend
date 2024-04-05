import { useContext } from 'react';

import { TodoContext } from '@/store/todo-context';
const CounterTodo = () => {
  const { todos, isShowDone } = useContext(TodoContext);
  const unDoneTodos = todos.filter((todo) => !todo.isDone);

  let doneLength = todos.length - unDoneTodos.length;

  return (
    <div className="h-10 flex items-end gap-1 flex-1">
      <p className="text-sm">총 {unDoneTodos.length}개의 할 일</p>
      {isShowDone && (
        <p className="text-sm">&#40;총 {doneLength}개 완료&#41;</p>
      )}
    </div>
  );
};
export default CounterTodo;
