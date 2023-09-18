import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('AuthMiddleware.ts')

const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const verifiedToken = verify(req.cookies.auth!, process.env.SECRET_KEY!)

    if (!verifiedToken) {
      throw new Error('TOKEN_DESERIALIZATION_ERROR')
    }

    return next()
  } catch (error) {
    const errorPayload = {
      status: 401,
      message: 'error',
      errorCode: 'AUTH_REQUIRED_ERROR',
      description:
        'Authentication requiredVocê precisa estar logado para acessar esta rota'
    }

    log.error(errorPayload)

    return res.status(errorPayload.status).json(errorPayload)
  }
}

export { AuthMiddleware }
