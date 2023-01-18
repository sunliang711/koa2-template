import Koa from 'koa'
import responseTime from 'koa-response-time'
import path from 'path'
import serve from 'koa-static'

import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

import config from './config'

import router from './routers'

const staticPath = './static'

const app = new Koa()

app.use(serve(path.join(__dirname, staticPath)))

app.use(responseTime())
app.use(logger())
app.use(bodyParser())

app.use(router.routes())

app.listen(config.server.port)

console.log("config:", config)
console.log(`server runing on port ${config.server.port}`)
