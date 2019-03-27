//what new changes
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl){
        //primary key, id and make it auto-increment
        tbl.increments();
    
        tbl.string('name', 128)
        .notNullable()
        .unique();

        //foreign key
        tbl
            .integer('role_id')
            .unsigned()
            .references('id')
            .inTable('roles')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    };
    //how to undo changes
    exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists('users');
    };
