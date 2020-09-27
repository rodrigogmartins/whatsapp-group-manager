import knex from '@config/knex'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import * as cookie from 'cookie'

const AuthController = {
  async signin(req: Request, res: Response): Promise<Response<any>> {
    const { email, password } = req.body
    const user = await knex('users').where({ email }).first()
    const isSamePassword = await bcrypt.compare(password, user.password)

    if (isSamePassword) {
      const userfirstName = user.name.split(' ')[0]

      const claims = { sub: user.id, name: user.name }
      const jwt = sign(claims, process.env.SECRET_KEY!, { expiresIn: '1h' })

      const authCookie = cookie.serialize('auth', jwt, {
        httpOnly: true,
        secure: process.env.ENVIRONMENT !== 'development',
        sameSite: 'strict',
        maxAge: 3600,
        path: '/'
      })

      res.setHeader('Set-Cookie', authCookie)

      return res
        .status(200)
        .json({ message: `Bem vindo de volta, ${userfirstName} :D` })
    }

    return res.status(401).json({
      message:
        'Nao foi possivel realizar o login, verifique suas credenciais e tente novamente em instantes.'
    })
  }
}

export { AuthController }
