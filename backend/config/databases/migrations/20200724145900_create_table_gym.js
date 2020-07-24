
exports.up = function(knex) {
    return knex.schema.createTable('gym',table=>{
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('email').notNull().unique()
      table.string('password').notNull()
      table.string('facebook',1000)
      table.string('number').notNull()
      table.string('instagram',1000)
      table.string('kit').notNull()
      table.string('cep').notNull()
      table.string('url',1000).notNull()
      table.timestamp('createAt').notNull()
      table.boolean('admin').notNull().defaultTo(true)
      table.timestamp('deletedAt')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('gym')
  };
  