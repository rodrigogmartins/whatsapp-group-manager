import { Controller } from '@/view/interfaces'

import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req.params, req.body)

    res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}

export const adaptSessionRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req.params, req.body)

    res.setHeader('Set-Cookie', httpResponse.data)
    res.status(204).json('')
  }
}
