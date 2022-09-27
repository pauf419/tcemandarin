import $api from '../http'

export default class NewsService {
  static async create(header, description, short_description, background) {
    return $api.post('/news/create', {header, description, short_description, background})
  }

  static async get(page, limit, args) {
    return $api.get(`/news/get`, {
        params: {
            page,
            limit,
            args
        }
    })
  }

  static async getById(id) {
    return $api.post('/news/get-by-id', {id})
  }
}
