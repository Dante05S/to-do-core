import { Module } from '@nestjs/common'
import { TaskController } from './tasks.controller'
import { TaskService } from './tasks.service'
import { taskProviders } from './task.providers'

@Module({
  controllers: [TaskController],
  providers: [...taskProviders, TaskService]
})
export class TaskModule {}
