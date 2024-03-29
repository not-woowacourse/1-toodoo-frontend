import { Priority } from '@/types/enums/priority.enum';

type Todo = {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type { Todo };
