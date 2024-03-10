import knex from 'knex'

const knexConfig = {
  client: process.env.DB_CLIENT,
  connection: process.env.DATABASE_URL,
  migrations: {
    tableName: process.env.DB_MIGRATIONS_TABLE,
    directory: './src/infra/database/migrations'
  }
}
const database = knex(knexConfig)

export default database
