type Todo = {
  id: number;
  title: string;
  description: string | null;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type PostTodoDto = Pick<Todo, 'title'>;

type PatchTodoDto = Partial<Pick<Todo, 'title' | 'description' | 'isDone'>>;

type ResPostTodoDto = Todo;

type ResGetTodosDto = Todo[];

type ResGetTodoDto = Todo;

type ResPatchTodoDto = Todo;

type ResDeleteTodoDto = void;

export type {
  Todo,
  PatchTodoDto,
  PostTodoDto,
  ResGetTodoDto,
  ResGetTodosDto,
  ResPostTodoDto,
  ResPatchTodoDto,
  ResDeleteTodoDto,
};
