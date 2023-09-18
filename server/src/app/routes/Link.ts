import { makeLinkController } from '@/app/factories'
import { adaptRoute } from '@/infra/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

const linkController = makeLinkController()

export default (router: Router): void => {
  router.get(
    '/links',
    AuthMiddleware,
    adaptRoute(linkController.collectionLoader())
  )
  router.get('/links/:id', AuthMiddleware, adaptRoute(linkController.loader()))
  router.post('/links', AuthMiddleware, adaptRoute(linkController.creator()))
  router.put('/links/:id', AuthMiddleware, adaptRoute(linkController.updater()))
  router.delete(
    '/links/:id',
    AuthMiddleware,
    adaptRoute(linkController.remover())
  )
}
