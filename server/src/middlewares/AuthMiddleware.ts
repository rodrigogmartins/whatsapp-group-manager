import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  verify(
    req.headers.authorization || '',
    process.env.SECRET_KEY || '123',
    function (err, decoded) {
      return !err && decoded
        ? next()
        : res.status(403).json({ message: 'Voce nao tem permissao' })
    }
  )
}

export { AuthMiddleware }
