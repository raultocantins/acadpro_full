
exports.up = function(knex) {
    return knex.schema.alterTable('coach',table=>{
        table.timestamp('deletedAt')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('coach',table=>{
        table.dropColumn('deletedAt')
    })
};
