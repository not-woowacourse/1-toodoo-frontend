'use client';

import { PropsWithChildren, createContext, useContext, useState } from 'react';

import API from '@/api/api';

const ApiContext = createContext<API | undefined>(undefined);

export const useAPI = () => {
  const api = useContext(ApiContext);
  if (!api) {
    throw new Error();
  }
  return api;
};

export default function ApiProvider({ children }: PropsWithChildren) {
  //  API 인스턴스 최초 한 번 만들고 context로 주입하여 이 인스턴스를 재사용
  const [api] = useState(new API());
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

// XXX: 아래 방식으로 했을 때의 문제점?
// const initialApiContextValue: API = new API();
// const ApiContext = createContext(initialApiContextValue);

// export const useAPI = () => useContext(ApiContext);

// export default function ApiProvider({ children }: PropsWithChildren) {
//   return (
//     <ApiContext.Provider value={initialApiContextValue}>
//       {children}
//     </ApiContext.Provider>
//   );
// }
