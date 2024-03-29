import { Priority } from '@/types/enums/priority.enum';

type Todo = {
  id: number;
  title: string;
  description: string | null;
  priority: Priority | null;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type { Todo };
