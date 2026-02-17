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
  async findUserByID(id: string) {
    return await this.prismaService.prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        userName: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  }
  async getAllUsers() {
    return this.prismaService.prisma.user.findMany({
      select: {
        id: true,
        userName: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  }
  async createUser(dataForm: UserToSaveType) {
    return await this.prismaService.prisma.user.create({ data: dataForm });
  }
  async deleteUser(userId: string) {
    return await this.prismaService.prisma.user.delete({
      where: { id: userId },
    });
  }
}
