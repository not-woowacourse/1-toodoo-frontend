import axios, { AxiosInstance } from 'axios';

import TodoAPI from './todo/todo.api';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

class API {
  private readonly axiosInstance: AxiosInstance;

  public readonly todo: TodoAPI;

  constructor() {
    this.axiosInstance = this.createAxiosInstance();
    // 각 api 마다 새로운 인스턴스(객체) 생성
    this.todo = new TodoAPI(this.axiosInstance);
  }

  private createAxiosInstance() {
    const instance = axios.create({
      baseURL: SERVER_URL,
      headers: {
        // TODO: auth 페이지 만들고 이름은 나중에 주입해주기
        'Client-Name': 'Yuna Kim',
      },
    });

    return instance;
  }
}

export default API;
