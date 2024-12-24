import Router from '@koa/router';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = { message: 'OK' };
  ctx.status = 200;
});

export default router;
