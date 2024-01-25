import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put
} from '@nestjs/common'
import { TaskService } from './tasks.service'
import { CreateTaskDto } from './dto/create_task.dto'
import { UpdateStatusDto } from './dto/update_status.dto'

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.taskService.getById(id, 'The task does not exist')
  }

  @Post()
  create(@Body() task: CreateTaskDto) {
    return this.taskService.create(task)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: CreateTaskDto) {
    return this.taskService.update(id, task, 'The task does not exist')
  }

  @Patch(':id')
  updateStatus(@Param('id') id: string, @Body() task: UpdateStatusDto) {
    return this.taskService.update(id, task, 'The task does not exist')
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.remove(id, 'The task does not exist')
  }
}
