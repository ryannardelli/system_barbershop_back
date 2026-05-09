export interface FirebaseUser {
  uid: string;
  email: string;
  email_verified: boolean;
  name?: string;
  picture?: string;
  role?: 'admin' | 'client' | 'barber';
}
