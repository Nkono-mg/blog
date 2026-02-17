import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ElasticsearchService {
  private client: Client;

  constructor() {
    this.client = new Client({
      node: process.env.ELASTICSEARCH_NODE!,
    });
  }

  async indexUser(user) {
    return this.client.index({
      index: 'users', // nom de l’index Elasticsearch
      id: user.id,
      document: user,
    });
  }

  async searchUsers(query: string) {
    const { hits } = await this.client.search({
      index: 'users',
      query: {
        multi_match: {
          query,
          fields: ['userName', 'email', 'role'],
        },
      },
    });
    return hits.hits.map((hit) => hit._source);
  }

  async deleteUser(id: string) {
    return this.client.delete({
      index: 'users',
      id,
    });
  }
}
