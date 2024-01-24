import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { TaskModule } from './tasks/tasks.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, TaskModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
