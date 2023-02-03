/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//essa implementaçao parece podre, ver se tem um metodo melhor
exports.up = function(knex) {
  // const regex = /d{2}-d{2}/;
  // const data = new Date().toString().match(regex);

  const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;

  return knex.schema.createTable('games', function (table) {
    table.increments('gameId');
    table.string('date').defaultTo(date);
    table.string('number1', 4);
    table.string('number2', 4);
    table.string('number3', 4);
    table.string('number4', 4);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('games');
};
