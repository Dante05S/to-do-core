import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor
} from '@nestjs/common'
import { Observable, catchError, map, throwError } from 'rxjs'
import { Response, http } from 'src/helpers/request'
import { ResponseController } from 'src/types/ResponseController'

@Injectable()
export class ResponseControllerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<ResponseController<any>>
  ): Observable<Response<any>> {
    return next.handle().pipe(
      map((data) => {
        const [result, message] = data
        if (
          !Array.isArray(data) ||
          data.length !== 2 ||
          message === undefined ||
          typeof message !== 'string'
        ) {
          throw new Error(
            `'The response format is not valid ([data, message]). Controller: ${
              context.getClass().name
            }'`
          )
        }
        return http.response(result, HttpStatus.OK, message)
      }),
      catchError((error) => {
        const err = error as Error
        return throwError(() => new HttpException(err.message, 500))
      })
    )
  }
}
