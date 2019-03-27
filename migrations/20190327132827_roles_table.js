//what new changes
exports.up = function(knex, Promise) {
return knex.schema.createTable('roles', function(tbl){
    //primary key, id and make it auto-increment
    tbl.increments();

    tbl.string('name', 128)
    .notNullable()
    .unique();
})
};
//how to undo changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles');
};
