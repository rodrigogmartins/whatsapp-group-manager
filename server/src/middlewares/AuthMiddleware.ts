import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  verify(req.cookies.auth!, process.env.SECRET_KEY!, (err: any, decoded: any) =>
    !err && decoded
      ? next()
      : res.status(401).json({
          message: 'Você precisa estar logado para acessar esta rota'
        })
  )
}

export { AuthMiddleware }
