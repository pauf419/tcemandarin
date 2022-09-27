const nm = require('nodemailer')
const Order = require('../models/order.model')
const ApiError = require('../exceptions/api.error')

class SmtpService {
  constructor() {
    this.transporter = nm.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
  }

  async send(name, number, email, description) {

    const date = new Date()

    const options1 = {
      month: 'short'
    }

    const options2 = {
      hour: '2-digit'
    };

    const dateOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }

    const timeOptions = {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    }

    const options3 = {
      ...timeOptions, ... dateOptions
    }

    await Order.create({
      name,
      email,
      number,
      description,
      date: date.toLocaleString('ru', options3)
    })

    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'lebedevpavel0511@gmail.com',
      subject: `Заявка на обсуждение проекта на ресурсе TCE MANDARIN.`,
      text: '',
      html:
        `
          <div style='font-family: "Google Sans"; color: #000'>
            <div style='display: flex; font-size: 22px; font-weight: bold; width: 329px; margin: 0 auto'>
              <h1 style='color: #ff6801'>TCE</h1><h1>MANDARIN</h1>
            </div>
            <div style='display: grid;font-weight: bold;font-size: 20px; color: #000'>
              <div style='color: #000'>
                <span> Имя: </span> ${name}
              </div>
              <br/>
              <div style='color: #000'>
                <span> Номер телефона: </span> ${number}
              </div>
              <br/>
              <div style='color: #000'>
                <span> Почта: </span> ${email}
              </div>
              <br/>
              <div style='color: #000; display: grid'>
                <span> Описание: </span>
                ${description}
              </div>
              <div style='width: 100px;border-top: 2px solid #ff6801; margin: 50px auto'> </div>
              <div>
                <div>
                  <span> Дата создания: </span> ${date.toLocaleString('ru', options3)}
                </div>
              </div>
            </div>
          </div>
        `
    })
  }

  async get() {
    const orders = await Order.find()

    return orders
  }

  async changeStatus(id, status) {
    const order = await Order.findById(id)

    if(!order) throw ApiError.BadRequest('Произошла непредвиденная ошибка. Попробуйте позже.')

    if(status === 'delete') {
      await order.remove()
      return { message: 'Запись успешно удалена.' }
    }

    order.status = status

    await order.save()

    return { message: 'Запись успешно обновлена.' }
  }
}

module.exports = new SmtpService()
