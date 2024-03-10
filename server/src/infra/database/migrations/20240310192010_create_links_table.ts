import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('links', (table) => {
    table.string('id').primary()
    table.string('url').notNullable()
    table.string('platform').notNullable()
    table.integer('clicks_limit').notNullable()
    table.integer('clicks').notNullable()
    table.string('group_id').references('id').inTable('groups').notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('links')
}
