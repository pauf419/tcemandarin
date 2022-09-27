const smtpRouter = require('./smtp.router')
const newsRouter = require('./news.router')
const authRouter = require('./auth.router')
const Router = require('express')

const router = new Router()

router.use('/smtp', smtpRouter)
router.use('/news', newsRouter) 
router.use('/auth', authRouter)

module.exports = router
