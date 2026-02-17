import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service.js';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' }); //important
  }
  async validate(email: string, password: string) {
    try {
      const user = await this.authService.validateUser(email, password);
      if (!user) {
        throw new BadRequestException('Mot de passe ou email incorrect');
      }
      return user;
    } catch (error: unknown) {
      throw error;
    }
  }
}
