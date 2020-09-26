import knex from '@config/knex'
import { NextFunction, Request, Response } from 'express'

const GroupController = {
  async index(req: Request, res: Response): Promise<Response<any>> {
    const results = await knex('groups')

    return res.status(200).json(results)
  },
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<any> | undefined> {
    try {
      const { slug, description, creator_id } = req.body

      await knex('groups').insert({
        slug,
        description,
        creator_id
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
      const { slug, description, creator_id } = req.body

      await knex('groups')
        .update({
          slug,
          description,
          creator_id
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
      await knex('groups').where({ id }).del()

      return res.send()
    } catch (error) {
      next(error)
    }
  }
}

export { GroupController }
