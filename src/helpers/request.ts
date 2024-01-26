import { HttpStatus } from '@nestjs/common'
import { type Request } from 'express'

export type ResponseObjectData = Record<string, unknown>

type ResponseData<T = ResponseObjectData[] | ResponseObjectData | null> = T

export interface Response<T> {
  data: ResponseData<T> | null
  code: HttpStatus
  success: boolean
  message: string
  errors: string[]
}

export const http = {
  isApplicationJson: (req: Request) => Boolean(req.is('application/json')),
  error: <T>(
    data: ResponseData<T> | null = null,
    code = HttpStatus.BAD_REQUEST,
    errors: string[] = []
  ): Response<T> => ({
    data,
    message: '',
    code,
    success: false,
    errors
  }),
  response: <T>(
    data: ResponseData<T> | null = null,
    code = HttpStatus.OK,
    message = ''
  ) => ({
    data,
    code,
    success: true,
    message,
    errors: []
  })
}

export const error = {
  contentTypeIsInvalid: {
    data: null,
    message: '',
    errors: ['Content-Type es inválido'],
    code: HttpStatus.BAD_REQUEST,
    success: false
  },
  authorizationHeaderDoesntExist: {
    data: null,
    message: '',
    errors: ['No autorizado. El token es requerido'],
    code: HttpStatus.UNAUTHORIZED,
    success: false
  },
  forbidden: {
    data: null,
    message: '',
    errors: ['Acceso denegado. El token no tiene permisos para esta acción'],
    code: HttpStatus.FORBIDDEN,
    success: false
  },
  invalidToken: (message: string): Response<{ type: string }> => ({
    data: {
      type: 'invalid'
    },
    message: '',
    errors: ['No autorizado. El token no es válido', message],
    code: HttpStatus.UNAUTHORIZED,
    success: false
  }),
  invalidBodyToken: {
    data: null,
    message: null,
    errors: ['No autorizado. La estructura del token recibido es inválida'],
    code: HttpStatus.UNAUTHORIZED,
    success: false
  },
  expiredToken: {
    data: {
      type: 'expired'
    },
    message: '',
    errors: ['No autorizado. El token ya expiró'],
    code: HttpStatus.UNAUTHORIZED,
    success: false
  },
  apiKeyHeaderDoesntExist: {
    data: null,
    message: '',
    errors: ['No autorizado. El api-key es requerido'],
    code: HttpStatus.UNAUTHORIZED,
    success: false
  },
  invalidApiKey: {
    data: null,
    message: '',
    errors: ['No autorizado. El api-key no es válido'],
    code: HttpStatus.UNAUTHORIZED
  }
}
