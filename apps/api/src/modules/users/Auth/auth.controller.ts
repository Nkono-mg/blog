import { Controller, Post, UseGuards, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LocalAuthGuard } from './jwt/local.guard.js';
import { JwtAuthGuard } from './jwt/jwt.guard.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response({ passthrough: true }) res) {
    //nessaire pour ecrire dans le cookie
    const token = await this.authService.userLogin(req.user);
    //stocker le jwt dans un cookie
    res.cookie('jwt', token.access_token, {
      httpOnly: true, // inaccessible depuis JS côté client
      secure: false, // mettre true si HTTPS
      sameSite: 'lax', // protection CSRF basique
      maxAge: 86_400_000, // 1 jour
    });
    return {
      success: true,
      message: 'Vous êtes connecté',
    };
  }
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Response({ passthrough: true }) res) {
    //supprimer le cookie
    res.clearCookie('jwt', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });
    return { success: true, message: 'Vous êtes déconnecté' };
  }
}
