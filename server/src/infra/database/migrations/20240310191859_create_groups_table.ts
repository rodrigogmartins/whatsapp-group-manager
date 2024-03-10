import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('groups', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('url_slug').notNullable().unique()
    table.string('creator_id').references('id').inTable('users').notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('groups')
}
