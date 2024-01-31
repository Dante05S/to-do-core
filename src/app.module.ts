import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule } from '@nestjs/config'
import { TaskModule } from './tasks/tasks.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { ResponseControllerInterceptor } from './interceptors/ResponseController.interceptor'
import { HttpExceptionsFilter } from './filters/http-exception.filter'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false
    }),
    TaskModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionsFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseControllerInterceptor
    }
  ]
})
export class AppModule {}
