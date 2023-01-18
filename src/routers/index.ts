import Router from 'koa-router'
import health from './health'

// const router = new Router({ prefix: '/api/v1' })
const router = new Router()

router.use('/api/v1', health.routes())
// router.use('/api/v1', TODO.routes())

// debug, print all routes
// console.log("router:", router)

export default router
