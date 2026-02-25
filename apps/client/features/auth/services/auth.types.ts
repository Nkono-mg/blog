export interface LoginPayloadType {
  email: string;
  password: string;
}

export interface AuthResponse {
  jwt: string;
}

export interface CreateUserType extends LoginPayloadType {
  userName: string;
  confirmPasswrod: string;
}
