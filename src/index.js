require('dotenv').config();
const port = process.env.PORT || 4500;

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정
router.get('/', (ctx, next) => {
    ctx.body = '홈';
});

//app.use(router.routers());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`heurm server is listening to port ${port}`);
});