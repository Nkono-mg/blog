import { BadRequestException, Injectable } from '@nestjs/common';
import { NetworkDAO } from './DAO/network.dao.js';
import { NetworkDTO } from './DTO/network.dto.js';

@Injectable()
export class NetworkService {
  constructor(private readonly networkDAO: NetworkDAO) {}

  async createNetwork(dataForm: NetworkDTO) {
    try {
      const { name, description } = dataForm;
      if (!name || !description) {
        throw new BadRequestException('Tous les champs sont obligatoires');
      }
      const isExistingNetwork = await this.networkDAO.findNetworkByName(name);
      if (isExistingNetwork) {
        throw new BadRequestException('Network existe déjà !');
      }
      const savedNetwork = await this.networkDAO.createNetwork(dataForm);
      if (!savedNetwork) {
        throw new BadRequestException(
          `Erreur lors de l'enregistrement de Network ${name}`,
        );
      }
      return {
        success: true,
        data: savedNetwork,
      };
    } catch (error) {
      throw error;
    }
  }
  async findNetworkByName(name: string) {
    try {
      if (!name) {
        throw new BadRequestException(`Network ${name} est vide`);
      }
      const networkToFind = await this.networkDAO.findNetworkByName(name);
      if (!networkToFind) {
        throw new BadRequestException(`Network ${name} n'existe pas`);
      }
      return { success: true, data: networkToFind };
    } catch (error) {
      throw error;
    }
  }
  async findNetworkByID(id: string) {
    try {
      if (!id) {
        throw new BadRequestException(`Network ${id} est vide`);
      }
      const networkToFind = await this.networkDAO.findNetworkByID(id);
      if (!networkToFind) {
        throw new BadRequestException(`Network ${id} n'existe pas`);
      }
      return { success: true, data: networkToFind };
    } catch (error) {
      throw error;
    }
  }
  async getAllNetworks() {
    try {
      const networks = await this.networkDAO.getAllNetworks();
      if (networks.length === 0) {
        throw new BadRequestException(`Liste network est vide`);
      }
      return { success: true, data: networks };
    } catch (error) {
      throw error;
    }
  }
  async deleteNetwork(id: string) {
    try {
      if (!id) {
        throw new BadRequestException(`Network ${id} est vide`);
      }
      const networkToDelete = await this.networkDAO.deleteNetwork(id);
      if (!networkToDelete) {
        throw new BadRequestException(
          `Erreur de suppression de la Network ${id}`,
        );
      }
      return { success: true, message: 'Suppression avec succès' };
    } catch (error) {
      throw error;
    }
  }
  async updateNetwok(id: string, dataForm: NetworkDTO) {
    if (!id) {
      throw new BadRequestException(`Network ${id} est vide`);
    }
    try {
      const { name, description } = dataForm;
      if (!name || !description) {
        throw new BadRequestException(`Tous les champs sont obligatoires`);
      }
      const updatedNetwork = await this.networkDAO.updateNetwok(id, dataForm);
      if (!updatedNetwork) {
        throw new BadRequestException(
          `Une erreur lors de la mise à jour de Network ${name}`,
        );
      }
      return { success: true, data: updatedNetwork };
    } catch (error) {
      throw error;
    }
  }
}
