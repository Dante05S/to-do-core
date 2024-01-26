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
  async getAll() {
    const tasks = await this.taskService.getAll()
    return [tasks, 'Get tasks successfully']
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const task = await this.taskService.getById(id, 'The task does not exist')
    return [task, 'Get task successfully']
  }

  @Post()
  async create(@Body() task: CreateTaskDto) {
    const newTask = await this.taskService.create(task)
    return [newTask, 'Task created successfully']
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() task: CreateTaskDto) {
    const updateTask = await this.taskService.update(
      id,
      task,
      'The task does not exist'
    )
    return [updateTask, 'Task updated successfully']
  }

  @Patch(':id')
  async updateStatus(@Param('id') id: string, @Body() task: UpdateStatusDto) {
    const updateTask = await this.taskService.update(
      id,
      task,
      'The task does not exist'
    )
    return [updateTask, 'Status updated successfully']
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.taskService.remove(id, 'The task does not exist')
    return [null, 'Task deleted successfully']
  }
}
