import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException
} from '@nestjs/common'
import { http } from 'src/helpers/request'

@Catch()
export class HttpExceptionsFilter implements ExceptionFilter {
  catch(e: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const statusCode =
      e instanceof HttpException
        ? e.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR
    const errors = [(e as Error).message]
    const response = ctx.getResponse()
    response.status(statusCode).json(http.error(null, statusCode, errors))
  }
}
