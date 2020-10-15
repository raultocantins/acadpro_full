
exports.up = function(knex) {
   return knex.schema.table('users', function (table) {           
        table.dropColumn('email');
        table.dropColumn('fat');
        table.dropColumn('pressure');
        table.dropColumn('birth');    
});
}

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
