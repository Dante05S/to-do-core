import { User } from '../users/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class CodeToken {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    nullable: false,
    default: ''
  })
  code!: string

  @Column({
    nullable: true,
    default: null
  })
  expire_at!: Date

  @OneToOne(() => User, (user) => user.code_token)
  user: User

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date
}
