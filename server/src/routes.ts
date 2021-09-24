import express from 'express'
import { AuthController } from '@controllers/AuthController'

const routes = express.Router()

routes
  // Auth
  .post('/api/auth/signin', AuthController.signin)
  .post('/api/auth/signup', AuthController.signup)
  .post('/api/auth/signout', AuthController.signout)

export { routes }
