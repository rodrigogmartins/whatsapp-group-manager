import * as Knex from 'knex'
import configuracao from '../knexfile.js'

const environment = process.env.ENVIRONMENT || 'development'

export default Knex(configuracao[environment])
