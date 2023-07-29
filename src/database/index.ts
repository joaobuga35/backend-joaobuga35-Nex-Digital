import { Knex } from "knex";
import knexConfig from "../../knexfile";

const knexInstance: Knex = require("knex")(knexConfig.development);

export { knexInstance };
