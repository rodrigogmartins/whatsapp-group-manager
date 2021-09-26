exports.up = function (knex) {
  return knex.schema.createTable('links', (table) => {
    table.string('id').primary()
    table.string('url').notNull()
    table.string('platform').notNull()
    table.integer('clicks_limit').notNull()
    table.integer('clicks').notNull()
    table
      .string('group_id')
      .references('id')
      .inTable('groups')
      .notNull()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('links')
}
