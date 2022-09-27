import { makeAutoObservable } from 'mobx'
import SmtpService from '../services/SmtpService'
import NewsService from '../services/NewsService'
import AuthService from '../services/AuthService'
import { API_URL } from '../http'
import axios from 'axios'

export default class Store {
  loading = false
  isAuth = false
  user = {}

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.loading = bool
  }

  async send(name, number, email, description) {
    if(!name | !number | !email | !description) return window.M.toast({ html: 'Для отправки заявки все поля должны быть заполнены!'})
    this.setLoading(true)
    try {
      const response = await SmtpService.send(name, number, email, description)
      window.M.toast({ html: 'Заявка успешно отправлена. Мы свяжемся с вами в течении определенного времени.'})
    } catch (e) {
      this.setLoading(false)
    } finally {
      this.setLoading(false)
    }
  }

  async createNewsletter(header, description, short_description, background) {
    this.setLoading(true)
    try {
      const response = await NewsService.create(header, description, short_description, background)
      window.M.toast({ html: 'Новость успешно опубликована.' })
      return { success: true, redirId: response.data._id}
    } catch (e) {
      return { success: false, redirId: null}
      this.setLoading(false)
    } finally {
      this.setLoading(false)
    }
  }

  async getOrders() {
    this.setLoading(true)
    try {
      const response = await SmtpService.get()
      return response.data
    } catch(e) {
      window.M.toast({ html: 'Произошла непредвиденная ошибка.' })
      this.setLoading(false)
    } finally {
      this.setLoading(false)
    }
  }

  async changeOrderStatus(id, status) {
    this.setLoading(true)
    try {
      const response = await SmtpService.changeStatus(id, status)
      if(response.data.message) return window.M.toast({ html: response.data.message })
    } catch(e) {
      window.M.toast({ html: 'Произошла непредвиденная ошибка.' })
      this.setLoading(false)
    } finally {
      this.setLoading(false)
    }
  }

  async login(email, password) {
    this.setLoading(true)
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e) {
      this.setLoading(false)
    } finally { this.setLoading(false) }
  }

  async logout() {
    this.setLoading(true)
    try {
      const response = await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({})
    } catch (e) {
      this.setLoading(false)
    } finally {this.setLoading(false)}
  }

  async checkAuth() {
      this.setLoading(true)
      try {
          const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})
          console.log(response)
          localStorage.setItem('token', response.data.accessToken)
          this.setAuth(true)
          this.setUser(response.data.user)
      } catch (e) {
          this.setLoading(false)
      } finally {this.setLoading(false)}
  }
}
