import axios, { InternalAxiosRequestConfig } from 'axios';

import { HTTP_HEADERS } from '@/constants/http-headers';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:10241',
});

const axiosRequestInterceptorConfig = (config: InternalAxiosRequestConfig) => {
  config.headers[HTTP_HEADERS.CLIENT_NAME_KEY] = 'Yongjun Park';

  return config;
};

axiosInstance.interceptors.request.use(axiosRequestInterceptorConfig);

export { axiosInstance };
