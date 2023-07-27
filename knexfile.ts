import dotenv from "dotenv";
dotenv.config();
import { Knex } from "knex";

interface KnexConfig {
  [key: string]: Knex.Config;
}

const knexConfig: KnexConfig = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
      database: process.env.DB_NAME || "mydatabase",
      user: process.env.DB_USER || "myuser",
      password: process.env.DB_PASSWORD || "mypassword",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
  },
};

export default knexConfig;
