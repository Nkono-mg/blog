import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { UserDTO } from './DTO/user.dto.js';
import * as bcrypt from 'bcrypt';
import { UsersDAO } from './DAO/user.dao.js';
import { UserToSaveType } from './types/user.create.type.js';

@Injectable()
export class UsersService {
  constructor(private readonly userDAO: UsersDAO) {}
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
}
