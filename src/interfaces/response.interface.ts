import { HttpStatus } from '@nestjs/common'

export type ResponseObjectData = Record<string, unknown>

type ResponseData<T = ResponseObjectData[] | ResponseObjectData | null> = T
export interface Response<T> {
  data: ResponseData<T> | null
  code: HttpStatus
  success: boolean
  message: string
  errors: string[]
}
