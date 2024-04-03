export interface Todo {
  id: number;
  title: string;
  description: string | null;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TodoGetResponse = Todo[];

export type TodoPatchResponse = Todo;

export type TodoPostResponse = Todo;
