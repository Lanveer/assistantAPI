const Koa = require('koa2');
const qs = require('qs');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const bp = require('koa-body');
const apiRouter = require('./router/index');
const cors = require('koa2-cors');


app.use(cors({
    origin: 'http://localhost:3000',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With', 'Access-Control-Allow-Origin'],
}));
app.use(bp());
app.use(apiRouter.routes());
app.listen(3001);
console.log("server is running at http://localhost:3001");