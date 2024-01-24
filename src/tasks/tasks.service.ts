import { Inject, Injectable } from '@nestjs/common'
import { Service } from 'src/Service'
import { Task } from './task.entity'
import { TASK_REPOSITORY } from 'src/constants'
import { Repository } from 'typeorm'

@Injectable()
export class TaskService extends Service<Task> {
  constructor(
    @Inject(TASK_REPOSITORY)
    private taskRepository: Repository<Task>
  ) {
    super(taskRepository)
  }
}
