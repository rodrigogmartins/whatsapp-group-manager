import { makeGroupController } from '@/app/factories'
import { adaptRoute } from '@/app/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

const groupController = makeGroupController()

export default (router: Router): void => {
  router.get(
    '/groups',
    AuthMiddleware,
    adaptRoute(groupController.collectionLoader())
  )
  router.get(
    '/groups/:id',
    AuthMiddleware,
    adaptRoute(groupController.loader())
  )
  router.post('/groups', AuthMiddleware, adaptRoute(groupController.creator()))
  router.put(
    '/groups/:id',
    AuthMiddleware,
    adaptRoute(groupController.updater())
  )
  router.delete(
    '/groups/:id',
    AuthMiddleware,
    adaptRoute(groupController.remover())
  )
}
