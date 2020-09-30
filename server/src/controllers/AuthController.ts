import knex from '@config/knex'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import * as cookie from 'cookie'
import { compareHash, generateHash } from 'src/methods/HashMethods'
import { PasswordValidator } from '@validators/PasswordValidator'
import { EmailValidator } from '@validators/EmailValidator'

const AuthController = {
  async signin(req: Request, res: Response): Promise<Response<any>> {
    const { email, password } = req.body
    const user = await knex('users').where({ email }).first()
    const isSamePassword = await compareHash(password, user.password)

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
        'Não foi possivel realizar o login, verifique suas credenciais e tente novamente em instantes.'
    })
  },
  async signup(
    req: Request,
    res: Response
  ): Promise<Response<any> | undefined> {
    try {
      const { name, email, password } = req.body

      PasswordValidator(password)
      EmailValidator(email)

      const hashedPassword = await generateHash(password)
      const userId = await knex('users')
        .insert({
          name,
          email,
          password: hashedPassword
        })
        .returning('id')

      const cookieOptions: cookie.CookieSerializeOptions = {
        httpOnly: true,
        secure: process.env.ENVIRONMENT !== 'development',
        sameSite: 'strict',
        maxAge: 3600,
        path: '/'
      }
      const claims = { sub: userId, name }
      const jwt = sign(claims, process.env.SECRET_KEY!, { expiresIn: '1h' })
      const authCookie = cookie.serialize('auth', jwt, cookieOptions)

      const userfirstName = name.split(' ')[0]

      res.setHeader('Set-Cookie', authCookie)

      return res.status(200).json({ message: `Bem vindo, ${userfirstName} :D` })
    } catch (error) {
      if (
        error.type === 'PasswordValidationError' ||
        error.type === 'EmailValidationError'
      ) {
        return res.status(500).json({
          message: error.message,
          type: error.type
        })
      }

      return res.status(500).json({
        message:
          'Não foi possivel efetuar seu cadastro, tente novamente em instantes!'
      })
    }
  },
  signout(req: Request, res: Response): Response<any> {
    const authCookie = cookie.serialize('auth', '', {
      httpOnly: true,
      secure: process.env.ENVIRONMENT !== 'development',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })
    console.log('saindo')

    res.setHeader('Set-Cookie', authCookie)

    return res.send(200).json({ message: 'Você foi desconectado com sucesso' })
  }
}

export { AuthController }
