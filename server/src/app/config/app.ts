import { setupRoutes } from '@/app/config/routes'
import {
  CorsMiddleware,
  ErrorHandlerMiddleware
} from '@/app/config/middlewares/express'

import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(CorsMiddleware)
app.use(ErrorHandlerMiddleware)
setupRoutes(app)

export { app }
