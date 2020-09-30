import knex from '@config/knex'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

const GroupController = {
  async index(req: Request, res: Response): Promise<Response<any>> {
    const decoded: any = await verify(
      req.cookies.auth!,
      process.env.SECRET_KEY!
    )
    const results = await knex('groups').where({ creator_id: decoded.sub })

    return res.status(200).json(results)
  },
  async show(req: Request, res: Response): Promise<Response<any>> {
    const { id } = req.params
    const decoded: any = await verify(
      req.cookies.auth!,
      process.env.SECRET_KEY!
    )
    const result = await knex('groups')
      .where({
        creator_id: decoded.sub,
        id: id
      })
      .first()

    return res.status(200).json({ ...result, userName: decoded.name })
  },
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<any> | undefined> {
    try {
      const { slug, description } = req.body
      const decoded: any = await verify(
        req.cookies.auth!,
        process.env.SECRET_KEY!
      )

      await knex('groups').insert({
        slug,
        description,
        creator_id: decoded.sub
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
      const { slug, description } = req.body

      await knex('groups')
        .update({
          slug,
          description
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
