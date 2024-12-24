import type { Knex } from "knex";

interface DistanceParams {
  knex: Knex;
  list: number[];
  target: number;
  count: number;
  max: number;
}

export default DistanceParams;
