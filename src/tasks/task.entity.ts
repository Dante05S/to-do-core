import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { TaskStatus } from './enums/TaskStatus.enum'
import { User } from '../users/user.entity'

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

  @ManyToOne(() => User, (user) => user.tasks)
  user: User

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
