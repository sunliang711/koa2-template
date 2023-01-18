import Router from 'koa-router'

const router = new Router()

router.get('/health', async (ctx, next) => {
    ctx.response.type = "application/json"
    ctx.response.body = { status: "ok" }
})

router.post('/health', async (ctx, next) => {
    ctx.response.type = "application/json"
    ctx.response.body = { status: "ok" }
})

export default router
