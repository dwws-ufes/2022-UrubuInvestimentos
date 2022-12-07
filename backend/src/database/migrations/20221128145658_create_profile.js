/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  let uuidGenerationRaw = knex.client.config.client === 'sqlite3' ? `(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))` : `uuid_generate_v4()`;
  return knex.schema.createTable('profile', function (table) {
    table.uuid('id').primary().defaultTo(knex.raw(uuidGenerationRaw));

    table.string('email').notNullable();
    table.string('password').notNullable();
    table.integer('age').notNullable();
    table.decimal('balance');
    table.string('nickname');
    table.string('CPF');
    table.string('region');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('profile');
};
