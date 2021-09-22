import {
  makeUsersCollectionLoaderController,
  makeUserLoaderController,
  makeUserCreatorController,
  makeUserUpdaterController,
  makeUserRemoverController
} from '@/app/factories'
import { adaptRoute } from '@/app/adapters'
import { AuthMiddleware } from '@/app/config/middlewares/express'

import { Router } from 'express'

export default (router: Router): void => {
  router.get(
    '/users',
    AuthMiddleware,
    adaptRoute(makeUsersCollectionLoaderController())
  )
  router.get(
    '/users/:id',
    AuthMiddleware,
    adaptRoute(makeUserLoaderController())
  )
  router.post('/users', AuthMiddleware, adaptRoute(makeUserCreatorController()))
  router.put(
    '/users/:id',
    AuthMiddleware,
    adaptRoute(makeUserUpdaterController())
  )
  router.delete(
    '/users/:id',
    AuthMiddleware,
    adaptRoute(makeUserRemoverController())
  )
}
