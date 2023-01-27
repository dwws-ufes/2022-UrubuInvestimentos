/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('investments', function (table) {
    table.increments('investmentId');
    table.string('selectedNumber', 4).notNullable();
    table.decimal('value').notNullable();
    table.decimal('odds').notNullable();
    
    table.string('investmentOwner').notNullable();

    table.foreign('investmentOwner').references('id').inTable('profile');

    table.integer('gameIdAtual').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('investments');
};
