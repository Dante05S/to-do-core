import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { TaskStatus } from './enums/TaskStatus.enum'

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string

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

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
