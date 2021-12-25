import { NextFunction, Request, Response } from 'express'

const ErrorHandlerMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err}`
  })
}

export { ErrorHandlerMiddleware }
