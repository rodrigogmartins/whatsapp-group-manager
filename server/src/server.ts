import http from 'http'
import 'module-alias/register'
import { createTerminus } from '@godaddy/terminus'

import { app } from '@/app/config/app'

import { LoggerAdapter } from '@/infra/adapters/Logger'
import knex from '@/infra/database/knex'

const log = LoggerAdapter.createLogFor('server.js')

knex.migrate
  .latest()
  .then(() => {
    const server = http.createServer(app)

    createTerminus(server, {
      signal: 'SIGINT',
      healthChecks: {
        '/healthcheck': () => {
          return new Promise(() => true)
        }
      },
      onSignal: () => {
        log.info('server is starting cleanup')

        return new Promise(() => true)
      }
    })

    server.on('listening', () => {
      log.info(`Server is running at: http://localhost:${process.env.PORT}`)
    })
    server.listen(process.env.PORT)
  })
  .catch(() => console.error('Error trying to run the server!'))
