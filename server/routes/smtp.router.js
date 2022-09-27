const smtpController = require('../controllers/smtp.controller')
const Router = require('express')
const authMiddleware = require('../middlewares/auth.middleware')

const router = new Router()

router.post('/send', smtpController.send)
router.get('/get', authMiddleware, smtpController.get)
router.post('/change-status', authMiddleware, smtpController.changeStatus)

module.exports = router
