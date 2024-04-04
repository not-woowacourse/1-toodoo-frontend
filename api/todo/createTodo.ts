import instance from '@/api/axiosModule';

export const createTodo = async ({ title }: { title: string }) => {
  const { data: response } = await instance.post(`/todos`, { title: title });
  return response.data;
};
