const Router = require('express')
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = new Router()

router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/refresh', authController.refresh)
router.post('/add-admin', authMiddleware, authController.addAdmin)

module.exports = router
