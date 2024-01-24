import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { TaskModule } from './task/task.module'

@Module({
  imports: [ConfigModule.forRoot(), TaskModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
