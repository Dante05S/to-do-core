import { FindOptionsWhere, Repository } from 'typeorm'
import { BaseAttributes } from './entities/BaseAttributes'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export abstract class Service<E extends BaseAttributes> {
  constructor(private repository: Repository<E>) {}

  async getAll(): Promise<E[]> {
    return this.repository.find()
  }

  async getById(id: string, message: string): Promise<E> {
    const data = await this.repository.findOneBy({ id: id as any })

    // Valida si la data existe
    if (data === null) {
      throw new Error(message)
    }
    return data
  }

  async getOne(where: FindOptionsWhere<E>, message: string): Promise<E> {
    const data = await this.repository.findOneBy(where)

    // Valida si la data existe
    if (data === null) {
      throw new Error(message)
    }
    return data
  }

  async create(body: E): Promise<E> {
    return this.repository.save(body)
  }

  async update(
    id: string,
    body: QueryDeepPartialEntity<E>,
    message: string
  ): Promise<E> {
    // Find the data
    await this.getById(id, message)

    // Update data
    const data = await this.repository.update(id, body)
    return data.raw
  }

  async remove(id: string, message: string): Promise<void> {
    // Find the data
    await this.getById(id, message)

    // Remove data
    await this.repository.delete(id)
  }
}
