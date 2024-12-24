import knex, { Knex } from "knex";
import config from "../../knexfile";

const env = process.env.ENVIRONMENT || "development";

// Define the type for Knex configuration
interface KnexConfig {
  client: string;
  connection: {
    filename: string;
  };
}

// Knex configuration
const knexConfig: KnexConfig = config[env] as KnexConfig;

let knexInstance: Knex | null = null;

// Get or create a Knex instance
const getKnexInstance = (): Knex => {
  if (knexInstance) {
    return knexInstance;
  }
  knexInstance = knex(knexConfig);
  return knexInstance;
};

export default getKnexInstance;
