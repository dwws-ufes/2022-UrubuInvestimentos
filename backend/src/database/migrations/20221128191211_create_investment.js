/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('investments', function (table) {
    table.string('selectedNumber').notNullable();
    table.decimal('value').notNullable();
    table.decimal('odds').notNullable();
    
    table.string('investmentOwner').notNullable();

    table.foreign('investmentOwner').references('id').inTable('profile');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('investments');
};
