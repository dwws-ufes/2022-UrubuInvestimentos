/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('profile', function (table) {
    table.uuid('id', {
        useBinaryUuid: false,
        primaryKey: true
    }).primary();

    table.string('email').notNullable();
    table.string('password').notNullable();
    table.integer('age').notNullable();
    table.decimal('balance');
    table.string('nickname');
    table.string('CPF');
    table.string('region', 2);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('profile');
};
