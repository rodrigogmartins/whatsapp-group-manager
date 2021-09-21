import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import * as path from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  const routesPath = path.join(__dirname, '../routes')

  app.use('/api', router)

  readdirSync(routesPath).map(async (fileName) => {
    ;(await import(path.join(routesPath, fileName))).default(router)
  })
}
