import CreateTodoAction from '@/features/root/create-todo-action';
import TodoFetcher from '@/features/root/todo-fetcher';

const RootPage = () => {
  return (
    <main className="max-w-screen-sm mx-auto">
      <div className="px-2 py-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Reminders</h1>
          <TodoFetcher />
        </div>
      </div>
      <CreateTodoAction />
    </main>
  );
};

export default RootPage;
