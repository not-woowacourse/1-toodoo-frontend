import { useMutation } from '@tanstack/react-query';

import { useAPI } from '@/contexts/api.context/api.context';

export default function useMutationRegister() {
  const api = useAPI();
  const mutationFn = async ({ name }: { name: string }) => {
    try {
      const response = await api.auth.register(name);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
  return useMutation({
    mutationFn,
    onError: (error) => {
      console.error('error', error);
      return error;
    },
  });
}
