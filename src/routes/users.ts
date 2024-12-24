import Router from "@koa/router";
import { getDistanceBetweenUsers } from "../models/users";

const router = new Router();

router.get("/", async (ctx) => {
  console.info("get not implemented");
  ctx.body = { data: [] };
  ctx.status = 200;
});

router.get("/:id", async (ctx) => {
  console.info("get by id not implemented");
  const { id } = ctx.params;
  ctx.body = { data: {} };
  ctx.status = 200;
});

router.post("/", async (ctx) => {
  console.info("create not implemented");
  ctx.body = { data: {} };
  ctx.status = 200;
});

router.put("/:id", async (ctx) => {
  console.info("put not implemented");
  const { id } = ctx.params;
  ctx.body = { data: {} };
  ctx.status = 200;
});

router.patch("/:id", async (ctx) => {
  console.info("patch not implemented");
  const { id } = ctx.params;
  ctx.body = { data: {} };
  ctx.status = 200;
});

router.post("/distance", async (ctx) => {
  const { user, target } = ctx.request.body;

  if (user === undefined || target === undefined) {
    ctx.body = { user: "required", target: "required" };
    return (ctx.status = 400);
  }

  if (!(typeof user === "number") || !(typeof target === "number")) {
    ctx.body = { user: "required", target: "required" };
    return (ctx.status = 400);
  }

  const distance = await getDistanceBetweenUsers(user, target);
  ctx.body = { data: { user, target, distance } };
  ctx.status = 200;
});

export default router;
