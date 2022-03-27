const knex = require('../src/infra/database/knex')

knex.migrate.latest()
