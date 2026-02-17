import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersDAO } from '../DAO/user.dao.js';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserPayloadDTO } from '../DTO/user.payload.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userDAO: UsersDAO,
  ) {}

  async validateUser(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new BadRequestException('Les champs sont obligatoires');
      }
      const userToValidate = await this.userDAO.findUserByEmail(email);
      if (!userToValidate) {
        throw new UnauthorizedException('Email invalide');
      }
      const isPasswordValide = await bcrypt.compare(
        password,
        userToValidate.password,
      );
      if (!isPasswordValide) {
        throw new UnauthorizedException('Mot de passe incorrect');
      }
      return userToValidate;
    } catch (error: unknown) {
      throw error;
    }
  }

  async userLogin(user: UserPayloadDTO) {
    const payload = {
      id: user.id,
      email: user.email,
      userName: user.userName,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
