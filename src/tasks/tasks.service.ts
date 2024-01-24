import { Injectable } from '@nestjs/common'
import { Service } from 'src/Service'
import { Task } from './task.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TaskService extends Service<Task> {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {
    super(taskRepository)
  }
}
