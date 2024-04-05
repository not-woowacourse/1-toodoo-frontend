import { useState } from 'react';

import TodoForm from '@/components/TodoForm/TodoForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import useMutationCreateTodo from '@/react-query/mutations/useMutationCreateTodo';

export default function CreateTodo() {
  const { mutate: createTodo } = useMutationCreateTodo();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleCreateTodo = () => {
    createTodo({ title, description });
  };
  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };
  const handleChangeDescription = (value: string) => {
    setDescription(value);
  };
  const handleReset = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="px-2 py-6 w-full justify-start">
          + New Reminder
        </Button>
      </DialogTrigger>
      <TodoForm
        type="create"
        title={title}
        description={description}
        onClick={handleCreateTodo}
        onChangeTitle={handleChangeTitle}
        onChangeDescription={handleChangeDescription}
        onReset={handleReset}
      />
    </Dialog>
  );
}
