import express from 'express'
import { UserController } from '@controllers/UserController'
import { GroupController } from '@controllers/GroupController'
import { AuthController } from '@controllers/AuthController'
import { AuthMiddleware } from '@middlewares/AuthMiddleware'

const routes = express.Router()

routes
  // Users
  .get('/api/users', AuthMiddleware, UserController.index)
  .put('/api/users/:id', AuthMiddleware, UserController.update)
  .delete('/api/users/:id', AuthMiddleware, UserController.delete)
  // Auth
  .post('/api/auth/signin', AuthController.signin)
  .post('/api/auth/signup', AuthController.signup)
  .post('/api/auth/signout', AuthController.signout)
  // Groups
  .get('/api/groups', AuthMiddleware, GroupController.index)
  .get('/api/groups/:id', AuthMiddleware, GroupController.show)
  .post('/api/groups', AuthMiddleware, GroupController.create)
  .put('/api/groups/:id', AuthMiddleware, GroupController.update)
  .delete('/api/groups/:id', AuthMiddleware, GroupController.delete)

export { routes }
