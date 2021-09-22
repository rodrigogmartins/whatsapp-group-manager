import { setupRoutes } from '@/app/config/routes'
import { CorsMiddleware } from '@/app/config/middlewares/express'

import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
setupRoutes(app)
app.use(cookieParser())
app.use(CorsMiddleware)

export default app
