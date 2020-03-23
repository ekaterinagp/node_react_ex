exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments("id");
      table.string("username");
      table.string("first_name");
      table.string("last_name");
      // table.string("address");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("addresses", table => {
      table.increments("id");
      table.string("address_1");
      table.string("address_2");
      table.integer("postal_code");
      table.string("city");
      table
        .integer("user_id")
        .unsigned()
        .notNullable();
      table.foreign("user_id").references("users.id");
    });
};

exports.down = function(knex) {
  //rollback
  return knex.schema.dropTableIfExists("addresses").dropTableIfExists("users");
};

//cheat sheet
// knex.schema.createTable('user', (table) => {
//   table.increments('id')
//   table.string('name')
//   table.integer('age')
// })
// .then(() => ···)

//
// knex init
// knex migrate:make migration_name
// knex migrate:make migration_name -x ts # Generates a TypeScript migration file
// knex migrate:latest
// knex migrate:rollback
