import { Injectable } from '@nestjs/common';
import { FirebaseUser } from '../interfaces/firebase-user.interface';

@Injectable()
export class AuthService {
  syncUser(user: FirebaseUser) {
    return {
      firebaseUid: user.uid,
      email: user.email,
    };
  }
}
