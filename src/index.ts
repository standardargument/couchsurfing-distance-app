import Koa from "koa";
import Router from "@koa/router";
import { bodyParser } from "@koa/bodyparser";

import healthRouter from "./routes/health";

const app = new Koa();
const router = new Router();

router.use("/health", healthRouter.routes(), healthRouter.allowedMethods());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
