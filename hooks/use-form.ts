import { useState } from 'react';

const useForm = <T>(params: { initialValues: T }) => {
  const { initialValues } = params;

  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleChange };
};

export default useForm;
