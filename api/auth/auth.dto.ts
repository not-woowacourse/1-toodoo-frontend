export type RegisterDto = {
  id: number;
  name: string;
};

export type LoginDto = {
  message: string;
  error: string;
  statusCode: number;
};

export type AuthDto = RegisterDto | LoginDto;
