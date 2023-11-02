const knex = require('../database/knex')

knex.migrate.latest()
