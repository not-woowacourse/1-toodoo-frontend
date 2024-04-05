import { AxiosInstance } from 'axios';

import { AuthDto } from './auth.dto';

class AuthAPI {
  private core: AxiosInstance;
  constructor(core: AxiosInstance) {
    this.core = core;
  }
  // 클라이언트 등록
  async register(name: string) {
    const { data } = await this.core.post<AuthDto>(`/clients`, {
      name: name,
    });
    return data;
  }
}

export default AuthAPI;
