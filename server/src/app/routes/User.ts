import { makeUserController } from '@/app/factories'
import { adaptRoute, adaptSessionRoute } from '@/infra/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

const userController = makeUserController()

export default (router: Router): void => {
  router.post('/users', adaptRoute(userController.creator()))
  router.put('/users/:id', AuthMiddleware, adaptRoute(userController.updater()))
  // Session
  router.post('/users/login', adaptSessionRoute(userController.login()))
  router.delete(
    '/users/logout',
    AuthMiddleware,
    adaptSessionRoute(userController.logout())
  )
}
