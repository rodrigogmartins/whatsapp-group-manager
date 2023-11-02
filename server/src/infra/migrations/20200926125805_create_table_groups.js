exports.up = function (knex) {
  return knex.schema.createTable('groups', (table) => {
    table.string('id').primary()
    table.string('name').notNull()
    table
      .string('url_slug')
      .notNull()
      .unique()
    table
      .string('creator_id')
      .references('id')
      .inTable('users')
      .notNull()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('groups')
}
