import express from 'express'
import { UserController } from '@controllers/UserController'
import { GroupController } from '@controllers/GroupController'
import { LinkController } from '@controllers/LinkController'

const routes = express.Router()

routes
  // Users
  .get('/api/users', UserController.index)
  .post('/api/users', UserController.create)
  .put('/api/users/:id', UserController.update)
  .delete('/api/users/:id', UserController.delete)
  // Groups
  .get('/api/groups', GroupController.index)
  .post('/api/groups', GroupController.create)
  .put('/api/groups/:id', GroupController.update)
  .delete('/api/groups/:id', GroupController.delete)
  // Links
  .get('/api/groups', LinkController.index)
  .post('/api/groups', LinkController.create)
  .put('/api/groups/:id', LinkController.update)
  .delete('/api/groups/:id', LinkController.delete)

export { routes }
