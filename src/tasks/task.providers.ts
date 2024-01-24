import { DataSource } from 'typeorm'
import { Task } from './task.entity'
import { PROVIDE, TASK_REPOSITORY } from 'src/constants'

export const taskProviders = [
  {
    provide: TASK_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: [PROVIDE]
  }
]
