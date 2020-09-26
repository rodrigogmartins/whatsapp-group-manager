import knex from '@config/knex'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { Request, Response } from 'express'

const AuthController = {
  async signin(req: Request, res: Response): Promise<Response<any>> {
    const { email, password } = req.body
    const user = await knex('users').where({ email }).first()
    const isSamePassword = await bcrypt.compare(password, user.password)

    if (isSamePassword) {
      const claims = {
        sub: user.id,
        name: user.name
      }

      const jwt = sign(claims, process.env.SECRET_KEY || '123', {
        expiresIn: '1h'
      })

      return res.status(200).json({ authToken: jwt })
    }

    return res.status(401).json({
      message:
        'Nao foi possivel realizar o login, verifique suas credenciais e tente novamente em instantes.'
    })
  },
  async obterHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(parseInt(process.env.GEN_SALT || '12'))

    return await bcrypt.hash(password, salt)
  }
}

export { AuthController }
