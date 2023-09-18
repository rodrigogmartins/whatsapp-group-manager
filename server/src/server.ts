import 'module-alias/register'
import { app } from '@/app/config/app'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('server.js')

app.listen(process.env.PORT, () =>
  log.info(`Server is running at: http://localhost:${process.env.PORT}`)
)
