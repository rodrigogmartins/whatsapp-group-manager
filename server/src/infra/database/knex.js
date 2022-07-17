import Knex from 'knex'

const knex = Knex({
  client: process.env.DB_CLIENT,
  connection: process.env.DATABASE_URL,
  migrations: {
    tableName: process.env.DB_MIGRATIONS_TABLE
  }
})

knex.migrate.latest()

export default knex
