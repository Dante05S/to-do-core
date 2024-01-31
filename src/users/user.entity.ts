import { Task } from '../tasks/task.entity'
import { CodeToken } from '../code-token/code-token.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm'

@Unique(['email'])
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    nullable: false,
    default: ''
  })
  name: string

  @Column({
    nullable: false,
    default: ''
  })
  email: string

  @Column({
    nullable: false,
    default: ''
  })
  password: string

  @OneToOne(() => CodeToken, (codeToken) => codeToken.user)
  @JoinColumn()
  code_token!: CodeToken

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
