export class CreateUserDto {
  firebaseUid!: string;
  name!: string;
  email!: string;
  picture?: string;
  role?: string;
}
