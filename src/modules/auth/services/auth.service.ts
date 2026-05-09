import { Injectable } from '@nestjs/common';
import { FirebaseUser } from '../interfaces/firebase-user.interface';

@Injectable()
export class AuthService {
    async syncUser(user: FirebaseUser) {
        return {
            firebaseUid: user.uid,
            email: user.email,
        }
    }
}