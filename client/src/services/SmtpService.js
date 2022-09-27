import $api from '../http'

export default class SmtpService {
  static async send(name, number, email, description) {
    return $api.post('/smtp/send', {name, number, email, description})
  }

  static async get() {
    return $api.get('/smtp/get')
  }

  static async changeStatus(id, status) {
    return $api.post('/smtp/change-status', {id, status})
  }
}
