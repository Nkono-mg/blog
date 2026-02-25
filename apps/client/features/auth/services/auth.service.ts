import { authRepository } from "./auth.repository";
import { LoginPayloadType, CreateUserType } from "./auth.types";

export const authService = {
  async createUser(data: CreateUserType) {
    try {
      const user = await authRepository.createUser(data);
      if (!user) {
        throw new Error(`Erreur lors de création de compte!`);
      }
      return user;
    } catch (error) {
      throw error;
    }
  },
  async login(data: LoginPayloadType) {
    try {
      const user = await authRepository.login(data);
      if (!user) {
        throw new Error(` Utilisateur n'existe pas !`);
      }
      return user;
    } catch (error) {
      throw error;
    }
  },

  async logout() {
    await authRepository.logout();
  },

  async getCurrentUser() {
    return authRepository.getCurrentUser();
  },
};
