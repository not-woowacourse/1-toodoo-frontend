type Todo = {
  id: number;
  title: string;
  description: string | null;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type { Todo };
