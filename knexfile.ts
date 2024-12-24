import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/couchsurfing.sqlite3",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: "./data/couchsurfing.sqlite3",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./data/couchsurfing.sqlite3",
    },
    useNullAsDefault: true,
  },
};

export default config;
