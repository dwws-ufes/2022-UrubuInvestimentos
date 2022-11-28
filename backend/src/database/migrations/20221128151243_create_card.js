/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('card', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('number',16).notNullable();
    table.string('expiration').notNullable();
    table.string('CVV',3).notNullable();
    table.string('cardNickname');

    table.string('owner').notNullable();

    table.foreign('owner').references('id').inTable('profile');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('card');
};
