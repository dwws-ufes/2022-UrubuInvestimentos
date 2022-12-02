/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//essa implementaçao parece podre, ver se tem um metodo melhor
exports.up = function(knex) {
  return knex.schema.createTable('games', function (table) {
    table.increments('gameId');
    table.string('number1', 4);
    table.string('number2', 4);
    table.string('number3', 4);
    table.string('number4', 4);
    table.string('number5', 4);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('games');
};