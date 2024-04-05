type TodoResultDescriptorProps = {
  isShowAlreadyDone: boolean;
  totalLength: number;
  notDoneLength: number;
};

const TodoResultDescriptor = (props: TodoResultDescriptorProps) => {
  const descriptor = getTodoResultDescriptor(props);

  return <p className="text-sm text-neutral-500">{descriptor}</p>;
};

type GetTodoResultDescriptorParams = TodoResultDescriptorProps;

const getTodoResultDescriptor = (params: GetTodoResultDescriptorParams) => {
  const { isShowAlreadyDone, totalLength, notDoneLength } = params;

  if (isShowAlreadyDone) {
    const doneLength = totalLength - notDoneLength;

    return `총 ${notDoneLength}개의 할 일이 남아있습니다. 지금까지 ${doneLength}개의 할 일을 완료했습니다.`;
  }

  return `총 ${notDoneLength}개의 할 일이 있습니다.`;
};

export default TodoResultDescriptor;
