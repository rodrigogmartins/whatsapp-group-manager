import { makeUserController } from '@/app/factories'
import { adaptRoute } from '@/app/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

const userController = makeUserController()

export default (router: Router): void => {
  router.get(
    '/users',
    AuthMiddleware,
    adaptRoute(userController.collectionLoader())
  )
  router.get('/users/:id', AuthMiddleware, adaptRoute(userController.loader()))
  router.post('/users', AuthMiddleware, adaptRoute(userController.creator()))
  router.put('/users/:id', AuthMiddleware, adaptRoute(userController.updater()))
  router.delete(
    '/users/:id',
    AuthMiddleware,
    adaptRoute(userController.remover())
  )
}
