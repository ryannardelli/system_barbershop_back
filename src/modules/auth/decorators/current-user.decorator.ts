import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { FirebaseUser } from '../interfaces/firebase-user.interface';

interface RequestWithUser {
  user: FirebaseUser;
}

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): FirebaseUser => {
    const http = ctx.switchToHttp();
    const request = http.getRequest<RequestWithUser>();

    return request.user;
  },
);
