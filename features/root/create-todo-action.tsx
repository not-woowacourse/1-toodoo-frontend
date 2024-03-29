import CreateTodoFab from '@/features/root/create-todo-fab';
import CreateTodoSheet from '@/features/root/create-todo-sheet';

const CreateTodoAction = () => {
  return <CreateTodoSheet trigger={<CreateTodoFab />} />;
};

export default CreateTodoAction;
