import { Column, Entity } from 'typeorm'
import { TaskStatus } from './enums/TaskStatus.enum'
import { BaseAttributes } from 'src/entities/BaseAttributes'

@Entity()
export class Task extends BaseAttributes {
  @Column({
    nullable: false,
    default: ''
  })
  title: string

  @Column({
    type: 'text',
    nullable: false,
    default: ''
  })
  description: string

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING
  })
  status: TaskStatus
}
