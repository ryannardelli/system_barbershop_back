export class UserEntity {
  id!: string;
  firebaseUid!: string;
  name!: string;
  email!: string;
  picture?: string;
  role!: string;

  constructor(user: Partial<UserEntity>) {
    Object.assign(this, user);
  }
}
