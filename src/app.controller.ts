import { Controller, Get, HttpStatus } from '@nestjs/common'
import { Response, http } from './helpers/request'

@Controller()
export class AppController {
  @Get()
  getApp(): Response<null> {
    return http.response(null, HttpStatus.OK, 'Welcome to To Do Core!')
  }
}
