import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';

import TodoForm from '@/components/TodoForm/TodoForm';
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
    <div className="absolute bottom-4 right-4 flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <PlusCircle className="w-20 h-20 cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors duration-300" />
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
    </div>
  );
}
