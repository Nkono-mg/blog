import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDTO } from './DTO/user.dto.js';
import * as bcrypt from 'bcrypt';
import { UsersDAO } from './DAO/user.dao.js';
import { UserToSaveType } from './types/user.create.type.js';
import { ElasticsearchService } from '../elasticsearch/elasticsearch.service.js';

@Injectable()
export class UserService {
  constructor(
    private readonly userDAO: UsersDAO,
    private readonly elasticseachSerivce: ElasticsearchService,
  ) {}
  async createUser(dataForm: UserDTO) {
    const { userName, password, confirmPassword, email } = dataForm;
    if (!userName || !password || !confirmPassword || !email) {
      throw new BadRequestException('Tous les champs sont obligatoires');
    }
    if (password !== confirmPassword) {
      throw new BadRequestException('Les mots de passe ne sont pas identiques');
    }
    try {
      const existingUser = await this.userDAO.findUserByEmail(email);
      if (existingUser) {
        throw new BadRequestException('Email existe déjà !');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const userToSave: UserToSaveType = {
        userName,
        email,
        password: hashedPassword,
      };
      const user = await this.userDAO.createUser(userToSave);
      //indexer dans ElasticSearch
      const indexUser = await this.elasticseachSerivce.indexUser(user);
      if (!indexUser) {
        throw new BadRequestException(
          `Utilisateur ${user.userName} n'est pas indexé dans ElasticSeach`,
        );
      }
      return {
        success: true,
        data: {
          id: user.id,
          userName: user.userName,
          email: user.email,
          role: user.role,
        },
      };
    } catch (error: unknown) {
      throw error;
    }
  }
  async deleteUser(userId: string) {
    try {
      if (!userId) {
        throw new BadRequestException('UserId est vide');
      }
      const existingUserToDelete = await this.userDAO.findUserByID(userId);
      if (!existingUserToDelete) {
        throw new BadRequestException(`L'utilisateur ${userId} n'existe pas`);
      }
      const deletedUser = await this.userDAO.deleteUser(userId);
      if (!deletedUser) {
        throw new BadRequestException(
          `Erreur de suppression de l'utilisateur ${userId}`,
        );
      }
      // supprimer dans Elasticsearch
      const userToDelete = await this.elasticseachSerivce.deleteUser(userId);
      if (!userToDelete) {
        throw new BadRequestException(
          `Utilisateur ${userId} n'est pas supprimé dans Elasticsearch`,
        );
      }
      return {
        success: true,
        message: 'Suppression avec succès',
      };
    } catch (error: unknown) {
      throw error;
    }
  }
  async getOneUser(userId: string) {
    try {
      if (!userId) {
        throw new BadRequestException('UserId invalide');
      }
      const userToFind = await this.userDAO.findUserByID(userId);
      if (!userToFind) {
        throw new BadRequestException(`Utilisateur ${userId} n'existe pas`);
      }
      return { success: true, user: userToFind };
    } catch (error: unknown) {
      throw error;
    }
  }
  async getAllUsers() {
    try {
      const users = await this.userDAO.getAllUsers();
      if (!users) {
        throw new BadRequestException(`Liste des utilisateur est vide`);
      }
      return {
        success: true,
        users,
      };
    } catch (error) {
      throw error;
    }
  }
}
