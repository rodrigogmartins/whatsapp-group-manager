exports.up = function (knex) {
  return knex.schema.createTable('links', (table) => {
    table.increments('id').primary()
    table.string('link').notNull()
    table.integer('clicks_limit').notNull()
    table.integer('clicks').notNull()
    table.integer('group_id').references('id').inTable('groups').notNull()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('links')
}
