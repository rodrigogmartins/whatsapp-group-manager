import knex from '@config/knex'
import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express'

const UserController = {
  async index(req: Request, res: Response): Promise<Response<any>> {
    const results = await knex('users')

    return res.status(200).json(results)
  },
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<any> | undefined> {
    try {
      const { name, email, password } = req.body
      const hashedPassword = await UserController.obterHash(password)

      await knex('users').insert({
        name,
        email,
        password: hashedPassword
      })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  },
  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<any> | undefined> {
    try {
      const { id } = req.params
      const { name, email, password } = req.body
      const hashedPassword = await UserController.obterHash(password)

      await knex('users')
        .update({
          name,
          email,
          password: hashedPassword
        })
        .where({ id })

      return res.send()
    } catch (error) {
      next(error)
    }
  },
  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<any> | undefined> {
    try {
      const { id } = req.params
      await knex('users').where({ id }).del()

      return res.send()
    } catch (error) {
      next(error)
    }
  },
  async obterHash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(parseInt(process.env.GEN_SALT || '12'))

    return await bcrypt.hash(password, salt)
  }
}

export { UserController }
