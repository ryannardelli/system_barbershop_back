import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { FirebaseAuthGuard } from '../guards/firebase-auth.guard';
import { CurrentUser } from '../decorators/current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sync')
  @UseGuards(FirebaseAuthGuard)
  sync(@Req() req) {
    return this.authService.syncUser(req.user);
  }

  @Get('me')
  @UseGuards(FirebaseAuthGuard)
  getMe(@CurrentUser() user) {
    return user;
  }
}
