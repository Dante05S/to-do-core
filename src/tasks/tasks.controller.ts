import { Controller, Get } from '@nestjs/common'
import { TaskService } from './tasks.service'

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.getAll()
  }
}
