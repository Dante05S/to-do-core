import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
import { NotFoundException } from '@nestjs/common'

import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

abstract class BaseAttributes {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export abstract class Service<E extends BaseAttributes> {
  constructor(private repository: Repository<E>) {}

  async getAll(): Promise<E[]> {
    return this.repository.find()
  }

  async getById(id: string, message: string): Promise<E> {
    const data = await this.repository.findOneBy({ id: id as any })

    // Valida si la data existe
    if (data === null) {
      throw new NotFoundException(message)
    }
    return data
  }

  async getOne(where: FindOptionsWhere<E>, message: string): Promise<E> {
    const data = await this.repository.findOneBy(where)

    // Valida si la data existe
    if (data === null) {
      throw new NotFoundException(message)
    }
    return data
  }

  async create(body: DeepPartial<E>): Promise<DeepPartial<E> & E> {
    return this.repository.save(body)
  }

  async update(
    id: string,
    body: QueryDeepPartialEntity<E>,
    message: string
  ): Promise<E> {
    // Find the data
    const entity = await this.getById(id, message)

    // Update data
    const data = await this.repository.save({ ...entity, ...body })
    return data
  }

  async remove(id: string, message: string): Promise<void> {
    // Find the data
    await this.getById(id, message)

    // Remove data
    await this.repository.delete(id)
  }
}
