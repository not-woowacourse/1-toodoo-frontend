export type TodoDto = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
  client: {
    id: number;
    name: string;
  };
};

export type TodoListDto = TodoDto[];
