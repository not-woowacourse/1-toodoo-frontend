import TodoList from '@/components/templates/TodoList';
import { cn } from '@/lib/utils';
// context : doneVisible, todos
const RootPage = () => {
  return (
    <main
      className={cn(
        'max-w-xl h-screen',
        'flex flex-col items-center',
        'bg-neutral-50',
        'p-7',
        'mx-auto',
      )}
    >
      <h1 className="font-bold text-3xl">Reminders</h1>
      <TodoList />
    </main>
  );
};

export default RootPage;
