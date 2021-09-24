import { makeSessionController } from '@/app/factories'
import { adaptRoute } from '@/app/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

const sessionController = makeSessionController()

export default (router: Router): void => {
  router.post('/session/login', adaptRoute(sessionController.logIn()))
  router.delete(
    '/session/logout',
    AuthMiddleware,
    adaptRoute(sessionController.logOut())
  )
}
