import { makeAutoObservable, configure } from 'mobx'
import SmtpService from '../services/SmtpService'
import NewsService from '../services/NewsService'
import AuthService from '../services/AuthService'
import { API_URL } from '../http'
import axios from 'axios'

export default class Store {
  loading = false
  isAuth = false
  user = {}
  modalData = {}
  modalActive = false

  constructor() {
    makeAutoObservable(this)
  }

  // MODAL
  setModalData(data) {
    this.modalData = data
  }

  setModalActive(bool) {
    this.modalActive = bool
  }

  // AUTH & API
  setAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.loading = bool
  }

  // MAIN FUNCTIONALITY
  async send(name, number, email, description) {
    if(!name | !number | !email | !description) {
      this.setModalActive(true)
      this.setModalData({
        message: 'Для отправки заявки все поля должны быть заполнены!'
      })
      return {failed: true}
    }
    this.setLoading(true)
    try {
      const response = await SmtpService.send(name, number, email, description)
      this.setModalActive(true)
      this.setModalData({
        message: 'Заявка отправлена, и уже рассматривается специалистами. Мы свяжемся с вами в ближайшее время!'
      })
      return {failed: false}
    } catch (e) {
      this.setModalActive(true)
      this.setModalData({
        message: 'Произошла непредвиденная ошибка. Попробуйте позже.'
      })
      this.setLoading(false)
      return {failed: true}
    } finally {
      this.setLoading(false)
    }
  }

  async createNewsletter(header, description, short_description, background) {
    if(!header | !description | !background) {
      this.setModalActive(true)
      this.setModalData({
        message: 'Для создания новости все обязательные поля должны быть заполнеными.'
      })
      return {failed: true}
    }
    this.setLoading(true)
    try {
      const response = await NewsService.create(header, description, short_description, background)
      this.setModalActive(true)
      this.setModalData({
        message: 'Новость успешно опубликована.'
      })
      return { success: true, redirId: response.data._id}
    } catch (e) {
      this.setModalActive(true)
      this.setModalData({
        message: 'Произошла непредвиденная ошибка. Попробуйте позже.'
      })
      this.setLoading(false)
      return { success: false, redirId: null}
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
      this.setModalActive(true)
      this.setModalData({
        message: 'Произошла непредвиденная ошибка. Попробуйте позже.'
      })
      this.setLoading(false)
    } finally {
      this.setLoading(false)
    }
  }

  async changeOrderStatus(id, status) {
    this.setLoading(true)
    try {
      const response = await SmtpService.changeStatus(id, status)
      if(response.data.message) {
        this.setModalActive(true)
        this.setModalData({
          message: response.data.message
        })
      }
    } catch(e) {
      this.setModalActive(true)
      this.setModalData({
        message: 'Произошла непредвиденная ошибка. Попробуйте позже.'
      })
      this.setLoading(false)
    } finally {
      this.setLoading(false)
    }
  }

  async login(email, password) {
    if(!email | !password) {
      this.setModalActive(true)
      this.setModalData({
        message: 'Произошла непредвиденная ошибка. Попробуйте позже.'
      })
      return {failed: true}
    }
    this.setLoading(true)
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      return {failed: false}
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
          localStorage.setItem('token', response.data.accessToken)
          this.setAuth(true)
          this.setUser(response.data.user)
      } catch (e) {
          this.setLoading(false)
      } finally {this.setLoading(false)}
  }
}
