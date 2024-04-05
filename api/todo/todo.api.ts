import { AxiosInstance } from 'axios';

import { TodoDto, TodoListDto } from './todo.dto';

class TodoAPI {
  private core: AxiosInstance;
  constructor(core: AxiosInstance) {
    this.core = core;
  }
  async getTodoList() {
    const { data } = await this.core.get<TodoListDto>(`/todos`);
    return data;
  }

  async createTodo({
    title,
    description,
  }: {
    title: string;
    description?: string;
  }) {
    const { data } = await this.core.post(`/todos`, {
      title: title,
      description: description,
    });
    return data;
  }

  async editTodo({
    id,
    title,
    description,
    isDone,
  }: {
    id: string;
    title?: string;
    description?: string;
    isDone?: boolean;
  }) {
    const { data } = await this.core.patch<TodoDto>(`/todos/${id}`, {
      title: title,
      description: description,
      isDone: isDone,
    });
    return data;
  }

  async deleteTodo(id: string) {
    await this.core.delete(`/todos/${id}`);
  }
}

export default TodoAPI;
