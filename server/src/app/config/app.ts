import { setupRoutes } from '@/app/config/routes'
import { CorsMiddleware } from '@/app/config/middlewares/CorsMiddleware'

import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser'

const app = express()
setupRoutes(app)
app.use(cookieParser())
app.use(CorsMiddleware)

export default app
