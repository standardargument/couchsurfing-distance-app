import Router from "@koa/router";

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
  ctx.body = { data: {} };
  ctx.status = 200;
});

export default router;
