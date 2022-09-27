const smtpService = require('../services/smtp.service')

class SmtpController {
  async send(req, res) {
    try {
      const { name, number, email, description } = req.body

      await smtpService.send(name, number, email, description )

      return res.status(200).json()
    } catch(e) {
      console.log(e)
      return res.status(400).json()
    }
  }

  async get(req, res, next) {
    try {
      const {name, number, email, description} = req.body
      const orders = await smtpService.get()

      return res.json(orders)
    } catch(e) {
      next(e)
    }
  }
 
  async changeStatus(req, res, next) {
    try {
      const {id, status} = req.body

      const order = await smtpService.changeStatus(id, status)

      return res.json(order)

    } catch(e) {
      next(e)
    }
  }
}

module.exports = new SmtpController()
