import knex from '@config/knex'
import { NextFunction, Request, Response } from 'express'
import { generateHash } from 'src/methods/HashMethods'

const UserController = {
  async index(req: Request, res: Response): Promise<Response<any>> {
    const results = await knex('users')

    return res.status(200).json(results)
  },
  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<any> | undefined> {
    try {
      const { id } = req.params
      const { name, email, password } = req.body
      const hashedPassword = await generateHash(password)

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
  }
}

export { UserController }
