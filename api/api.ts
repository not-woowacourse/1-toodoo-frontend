import axios, { AxiosInstance } from 'axios';

import AuthAPI from './auth/auth.api';
import TodoAPI from './todo/todo.api';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

class API {
  private readonly axiosInstance: AxiosInstance;
  public isLoggedIn: boolean;

  public readonly todo: TodoAPI;
  public readonly auth: AuthAPI;

  constructor() {
    this.axiosInstance = this.createAxiosInstance();
    // 각 api 마다 새로운 인스턴스(객체) 생성
    this.todo = new TodoAPI(this.axiosInstance);
    this.auth = new AuthAPI(this.axiosInstance);
    this.isLoggedIn = false;
  }

  private createAxiosInstance() {
    const instance = axios.create({
      baseURL: SERVER_URL,
    });

    return instance;
  }

  setToken(name: string) {
    this.axiosInstance.defaults.headers.common['Client-Name'] = name;
    this.isLoggedIn = true;
  }

  removeToken() {
    this.axiosInstance.defaults.headers.common['Client-Name'];
    this.isLoggedIn = false;
  }
}

export default API;
