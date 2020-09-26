exports.up = function (knex) {
  return knex.schema.createTable('groups', (table) => {
    table.increments('id').primary()
    table.string('slug').notNull().unique()
    table.string('description').notNull()
    table.integer('creator_id').references('id').inTable('users').notNull()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('groups')
}
