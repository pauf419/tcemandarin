const newsController = require('../controllers/news.controller')
const Router = require('express')
const authMiddleware = require('../middlewares/auth.middleware')

const router = new Router()

router.post('/create', authMiddleware, newsController.create)
router.post('/delete', authMiddleware, newsController.delete)
router.post('/get-by-id', newsController.getById)
router.get('/get', newsController.get)

module.exports = router
