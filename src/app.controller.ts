import { Controller, Get, HttpStatus } from '@nestjs/common'
import { Response } from './helpers/request'

@Controller()
export class AppController {
  @Get()
  getApp(): Response<null> {
    return {
      data: null,
      message: 'Welcome to To Do Core!',
      code: HttpStatus.OK,
      success: true,
      errors: []
    }
  }
}
