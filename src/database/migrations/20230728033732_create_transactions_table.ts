import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("transactions", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.string("cpf").notNullable();
    table.text("description").notNullable();
    table.timestamp("transaction_date").notNullable();
    table.string("points_value").notNullable();
    table.decimal("value", 10, 2).notNullable();
    table.string("status").notNullable();
    table
      .string("user_id")
      .references("users.id")
      .notNullable()
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("transactions");
}
