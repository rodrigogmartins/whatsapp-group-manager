import knex from '@config/knex'
import { NextFunction, Request, Response } from 'express'

const LinkController = {
  async index(req: Request, res: Response): Promise<Response<any>> {
    const results = await knex('links')

    return res.status(200).json(results)
  },
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<any> | undefined> {
    try {
      const { link, clicks_limit, clicks, group_id } = req.body

      await knex('links').insert({
        link,
        clicks_limit,
        clicks,
        group_id
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
      const { link, clicks_limit, clicks, group_id } = req.body

      await knex('links')
        .update({
          link,
          clicks_limit,
          clicks,
          group_id
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
      await knex('links').where({ id }).del()

      return res.send()
    } catch (error) {
      next(error)
    }
  }
}

export { LinkController }
