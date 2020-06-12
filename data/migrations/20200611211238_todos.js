
exports.up = function (knex) {
    return knex.schema.createTable('todo', (tbl) => {
        tbl.increments()
        tbl.text('name').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('todo')
};
