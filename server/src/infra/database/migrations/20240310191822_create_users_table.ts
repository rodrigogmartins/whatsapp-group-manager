import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
