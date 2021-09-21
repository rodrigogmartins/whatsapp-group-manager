import { makeUserCreatorController } from '@/app/factories'
import { adaptRoute } from '@/app/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/users', AuthMiddleware, adaptRoute(makeUserCreatorController()))
  router.get(
    '/users/:id',
    AuthMiddleware,
    adaptRoute(makeUserCreatorController())
  )
  router.post('/users', AuthMiddleware, adaptRoute(makeUserCreatorController()))
  router.put(
    '/users/:id',
    AuthMiddleware,
    adaptRoute(makeUserCreatorController())
  )
  router.delete(
    '/users/:id',
    AuthMiddleware,
    adaptRoute(makeUserCreatorController())
  )
}
