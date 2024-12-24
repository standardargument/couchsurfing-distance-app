import { filter, find, flatten, includes, map, pipe, propEq } from "ramda";

import Connection from "../types/Connection";
import User from "../types/User";
import type DistanceParams from "../types/DistanceParams";
import getKnexInstance from "../config/knex";

export async function getUsers(): Promise<User[]> {
  console.info("Fetching users from db");

  try {
    const knex = getKnexInstance();

    const users = await knex<User>("users AS u").select(
      "u.id",
      "u.firstName",
      "u.lastName",
      "u.email",
    );

    return users as User[];
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function getUserById(id: number): Promise<User> {
  console.info(`Fetching user from db: ${id}`);

  try {
    const knex = getKnexInstance();

    const users = await knex<User>("users AS u")
      .select("u.id", "u.firstName", "u.lastName", "u.email")
      .where("u.id", id)
      .first();

    return users as User;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function addUser(user: User): Promise<number[]> {
  console.info(`create user`);

  try {
    const knex = getKnexInstance();

    const response = await knex<User>("users AS u").insert({ ...user });

    return response as number[];
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function getDistanceBetweenUsers(
  user: number,
  target: number,
): Promise<number> {
  try {
    const knex = getKnexInstance();

    const tries = process.env.MAX_TRIES ?? "5";
    const MAX_TRIES = parseInt(tries);

    console.info(`Calculating distance between users: ${user}, ${target}`);
    console.info("MAX_TRIES", MAX_TRIES);

    let count = 1;
    let distance = await findDistance({
      knex,
      list: [user],
      target: target,
      count,
      max: MAX_TRIES,
    });

    return distance ?? -1;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

export async function findDistance(params: DistanceParams) {
  const { knex, list, target, count, max } = params;

  if (count >= max) {
    return count;
  }

  let connections = await knex<Connection>("connections AS c")
    .select("c.id", "c.x", "c.y")
    .whereIn("c.x", list)
    .or.whereIn("c.y", list);

  console.debug(connections);
  const foundX = find(propEq(target, "x"))(connections);

  if (foundX) {
    return count;
  }

  const foundY = find(propEq(target, "y"))(connections);

  if (foundY) {
    return count;
  }

  const flattened = pipe(
    map((x: Connection) => {
      return [x.x, x.y];
    }),
    flatten,
  )(connections);

  const filtered = filter((x) => !includes(x, list), flattened);

  return await findDistance({
    knex,
    list: filtered,
    target: target,
    count: count + 1,
    max,
  });
}
