import axios, { InternalAxiosRequestConfig } from 'axios';

import { HTTP_HEADERS, BACKEND_PROXY_ORIGIN } from '@/constants/constants';

const axiosInstance = axios.create({
  baseURL: BACKEND_PROXY_ORIGIN,
});

const axiosRequestIntercepterConfig = (config: InternalAxiosRequestConfig) => {
  config.headers[HTTP_HEADERS.CONTENT_TYPE_KEY] = 'application/json';
  config.headers[HTTP_HEADERS.CLIENT_NAME_KEY] = 'Subin Han';

  return config;
};

axiosInstance.interceptors.request.use(axiosRequestIntercepterConfig);

export { axiosInstance };
