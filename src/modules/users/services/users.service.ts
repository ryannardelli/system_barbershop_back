import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../repositories/user.repository';
import { UserResponseDto } from '../dto/user-response.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.usersRepository.findAll();

    return users.map((user) => ({
      id: user.id,
      firebaseUid: user.firebaseUid,
      name: user.name,
      email: user.email,
      picture: user.picture ?? undefined,
    }));
  }

  async findById(id: string): Promise<UserResponseDto> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return {
      id: user.id,
      firebaseUid: user.firebaseUid,
      name: user.name,
      email: user.email,
      picture: user.picture ?? undefined,
    };
  }
}
