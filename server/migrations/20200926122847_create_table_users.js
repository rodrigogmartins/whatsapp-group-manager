exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary()
    table.string('name').notNull()
    table
      .string('cpf_cnpj')
      .notNull()
      .unique()
    table
      .string('email')
      .notNull()
      .unique()
    table.boolean('email_confirmed').notNull()
    table.string('password').notNull()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
