exports.up = async function (knex) {
  return await knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.bigint("telegram_id").unique().index();
    table.string("username");
    table.string("first_name");
    table.string("last_name");
    table.string("language_code");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
