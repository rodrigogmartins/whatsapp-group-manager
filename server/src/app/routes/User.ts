import { makeUserController } from '@/app/factories'
import { adaptRoute } from '@/app/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

const userController = makeUserController()

export default (router: Router): void => {
  router.get(
    '/users/email-confirmation/:token',
    adaptRoute(userController.emailValidator())
  )
  router.post('/users', AuthMiddleware, adaptRoute(userController.creator()))
  router.put('/users/:id', AuthMiddleware, adaptRoute(userController.updater()))
}
