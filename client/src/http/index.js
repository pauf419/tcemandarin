import axios from 'axios'
import {store} from '../index'

export const API_URL = `https://aqueous-caverns-60256.herokuapp.com/api`

const $api = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
},async (error) => {
  store.setModalActive(true)
  store.setModalData({
    message: error.response.data.message
  })
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
})

export default $api
