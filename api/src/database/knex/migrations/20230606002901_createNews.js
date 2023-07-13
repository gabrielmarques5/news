exports.up = knex => knex.schema.createTable("news", table => {
    table.increments("id");
    table.text("title");
    table.text("content");
    table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("news");
