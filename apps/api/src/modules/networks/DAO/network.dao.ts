import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service.js';
import { NetworkDTO } from '../DTO/network.dto.js';

@Injectable()
export class NetworkDAO {
  constructor(private readonly prismaService: PrismaService) {}

  async createNetwork(dataForm: NetworkDTO) {
    return await this.prismaService.prisma.network.create({ data: dataForm });
  }
  async findNetworkByName(name: string) {
    return await this.prismaService.prisma.network.findUnique({
      where: { name: name },
    });
  }
  async findNetworkByID(id: string) {
    return await this.prismaService.prisma.network.findUnique({
      where: { id: id },
    });
  }
  async getAllNetworks() {
    return this.prismaService.prisma.network.findMany({});
  }

  async deleteNetwork(id: string) {
    return await this.prismaService.prisma.network.delete({
      where: { id: id },
    });
  }
  async updateNetwok(id: string, updateData: Partial<NetworkDTO>) {
    return await this.prismaService.prisma.network.update({
      where: { id: id },
      data: updateData,
      select: {
        name: true,
        description: true,
      },
    });
  }
}
