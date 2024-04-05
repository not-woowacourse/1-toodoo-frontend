'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAPI } from '@/contexts/api.context/api.context';
import useMutationRegister from '@/react-query/mutations/useMutationRegister';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const api = useAPI();
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    mutate: register,
    data: response,
    isSuccess,
    isError,
    error,
  } = useMutationRegister();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('accessToken');
    if (isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  // logout
  if (isLoggedIn) {
    return children;
  }

  // login
  if (isError) {
    if (error.message === '이미 같은 이름의 클라이언트가 존재합니다') {
      localStorage.setItem('accessToken', userName);
      api.setToken(userName);
      return children;
    }
  }

  // register
  if (isSuccess) {
    localStorage.setItem('accessToken', userName);
    api.setToken(userName);
    return children;
  }

  const handleRegister = () => {
    register({ name: userName });
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-1">
        <label className="text-gray-900">이름</label>
        <Input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="name"
        />

        <p className="text-sm text-gray-600">
          등록/로그인 할 이름을 입력해주세요 🐶
        </p>
      </div>
      <Button onClick={handleRegister}>submit</Button>
    </div>
  );
}
