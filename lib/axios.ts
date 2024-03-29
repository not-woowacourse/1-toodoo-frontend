import axios, { InternalAxiosRequestConfig } from 'axios';

import { HTTP_HEADERS } from '@/constants/http-headers';
import { BACKEND_PROXY_ORIGIN } from '@/constants/url';

const axiosInstance = axios.create({
  baseURL: BACKEND_PROXY_ORIGIN,
});

const axiosRequestInterceptorConfig = (config: InternalAxiosRequestConfig) => {
  config.headers[HTTP_HEADERS.CONTENT_TYPE_KEY] = 'application/json';
  config.headers[HTTP_HEADERS.CLIENT_NAME_KEY] = 'Yongjun Park';

  return config;
};

axiosInstance.interceptors.request.use(axiosRequestInterceptorConfig);

export { axiosInstance };
