import { LoggerAdapter } from '@/app/adapters/Logger'
import { NextFunction, Request, Response } from 'express'

const logger = LoggerAdapter.createLogFor('ErrorHandlerMiddleware.ts')

const ErrorHandlerMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  if (err instanceof Error) {
    const errorPayload = {
      status: 400,
      message: 'error',
      errorCode: 'BAD_REQUEST_ERROR',
      description: err.message
    }

    logger.error('Bad request', {
      ...errorPayload,
      error: err
    })

    return res.status(400).json(errorPayload)
  }

  const errorPayload = {
    status: 500,
    message: 'error',
    errorCode: 'INTERNAL_SERVER_ERROR',
    description: `Internal server error - ${err}`
  }

  logger.error('Internal server error', {
    ...errorPayload,
    error: err
  })

  return res.status(500).json(errorPayload)
}

export { ErrorHandlerMiddleware }
