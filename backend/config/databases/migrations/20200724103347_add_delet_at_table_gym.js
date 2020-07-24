
exports.up = function(knex) {
    return knex.schema.alterTable('gym',table=>{
        table.timestamp('deletedAt')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('gym',table=>{
        table.dropColumn('deletedAt')
    })
};
