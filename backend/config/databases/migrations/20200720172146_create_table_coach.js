
exports.up = function(knex) {
    return knex.schema.createTable('coach',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.string('facebook',1000)
        table.string('number').notNull()
        table.string('instagram',1000)
        table.string('cref').notNull()
        table.string('salario').notNull()
        table.boolean('admin').notNull().defaultTo(false)
        table.integer('gymId').references('id')
             .inTable('gym').notNull()
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('coach')
};
