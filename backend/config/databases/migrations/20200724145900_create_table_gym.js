
exports.up = function(knex) {
    return knex.schema.createTable('gym',table=>{
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('email').notNull().unique()
      table.string('password').notNull()     
      table.timestamp('createAt').notNull()      
      table.timestamp('deletedAt')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('gym')
  };
  