import { makeUserController } from '@/app/factories'
import { adaptRoute } from '@/app/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/users', AuthMiddleware, adaptRoute(makeUserController()))
  router.get('/users/:id', AuthMiddleware, adaptRoute(makeUserController()))
  router.post('/users', AuthMiddleware, adaptRoute(makeUserController()))
  router.put('/users/:id', AuthMiddleware, adaptRoute(makeUserController()))
  router.delete('/users/:id', AuthMiddleware, adaptRoute(makeUserController()))
}
