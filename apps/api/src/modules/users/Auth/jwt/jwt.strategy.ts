import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserPayloadDTO } from '../../DTO/user.payload.dto.js';
import { ConfigService } from '@nestjs/config';
import { UsersDAO } from '../../DAO/user.dao.js';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersDAO: UsersDAO,
    private readonly confiService: ConfigService,
  ) {
    super({
      jwtFromRequest: (req) => req?.cookies?.jwt, //récupère le token depuis le cookie
      secretOrKey: confiService.getOrThrow<string>('JWT_SECRET'),
    });
  }

  async validate(payload: UserPayloadDTO) {
    const user = await this.usersDAO.findUserByEmail(payload.email);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
