import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("connections", function (table) {
    table.increments("id").primary().unsigned();
    table.integer("x").unsigned();
    table.foreign("x").references("id").inTable("users");
    table.integer("y").unsigned();
    table.foreign("y").references("id").inTable("users");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("connections");
}
