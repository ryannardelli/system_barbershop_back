import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import admin from '../firebase/firebase-admin.config';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token não informado');
    }

    const [scheme, token] = authHeader.split(' ');

    if (scheme !== 'Bearer' || !token) {
      throw new UnauthorizedException(
        'Formato de token inválido. Use: Bearer <token>',
      );
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);

      (request as Record<string, any>).user = decodedToken;

      return true;
    } catch (error) {
      console.error('Erro ao verificar token Firebase:', error);
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }
}
