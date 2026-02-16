import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service.js';
import { UserToSaveType } from '../types/user.create.type.js';

@Injectable()
export class UsersDAO {
  constructor(private readonly prismaService: PrismaService) {}

  async findUserByEmail(email: string) {
    return await this.prismaService.prisma.user.findUnique({
      where: { email: email },
    });
  }
  async createUser(dataForm: UserToSaveType) {
    return await this.prismaService.prisma.user.create({ data: dataForm });
  }
}
