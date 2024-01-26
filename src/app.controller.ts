import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  getApp() {
    return [null, 'Welcome to To Do Core!']
  }
}
