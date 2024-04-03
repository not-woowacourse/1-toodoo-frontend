'use client';

type CounterTodoProps = {
  unDoneLength?: number;
  DoneLength?: number;
};

const CounterTodo = ({
  unDoneLength = 0,
  DoneLength = 0,
}: CounterTodoProps) => {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <p className="text-sm">총 {unDoneLength}개의 할 일이 있습니다</p>
      <p className="text-sm">총 {DoneLength}개의 할 일을 완료했습니다</p>
    </div>
  );
};
export default CounterTodo;
