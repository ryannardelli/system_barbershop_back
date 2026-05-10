export class UserEntity {
  id: string;
  firebaseUid: string;
  email: string;
  role: string;

  constructor(partial: Partial<UserEntity>) {
    this.id = partial.id!;
    this.firebaseUid = partial.firebaseUid!;
    this.email = partial.email!;
    this.role = partial.role!;
  }
}
