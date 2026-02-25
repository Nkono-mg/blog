import { api } from "@/lib/axios";
import { LoginPayloadType, AuthResponse, CreateUserType } from "./auth.types";

export const authRepository = {
  async createUser(data: CreateUserType) {
    const response = await api.post("/users/create", data);

    return response.data;
  },
  async login(data: LoginPayloadType): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/login", data);

    return response.data;
  },

  async logout() {
    await api.post("/auth/logout");
  },

  async getCurrentUser(): Promise<AuthResponse> {
    const response = await api.get<AuthResponse>("/auth/user");
    return response.data;
  },
};
