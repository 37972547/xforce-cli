const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')


const BeanFactory = require("./structure/BeanFactory");


const rootDir = __dirname;

const beanFactory = BeanFactory.createBeanFactory(rootDir);

const RouterDispatcher = require('./structure/RouterDispatcher');

const routers = RouterDispatcher.initRouter(app);


// error handler
onerror(app)
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(cors()); 

// app.use(async(ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "*");
//   ctx.set("Access-Control-Allow-Credentials", true);
//   ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
//   ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
//   ctx.set("X-Powered-By", ' 3.2.1');
//   ctx.set("Content-Type", "application/json;charset=utf-8");
//   if (ctx.request.method == "OPTIONS") {
//       ctx.response.status = 200
//   }
//    await next()
// }
// );

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(routers.routes(), routers.allowedMethods())



// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});



module.exports = app
