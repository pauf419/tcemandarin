const newsService = require('../services/news.service')

class NewsController {
  async create(req, res, next) {
    try {
      const { header, description, short_description } = req.body

      const { background } = req.files

      const newsletter = await newsService.create(header, short_description, description, background)

      return res.json(newsletter)
    } catch(e) {
      next(e)
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body

      const response = await newsService.delete(id)

      return res.json(response)
    } catch(e) {
      next(e)
    }
  }

  async get(req, res, next) {
    const {page, limit, args} = req.query
    const newsletters = await newsService.get(page, limit, args)
    return res.json(newsletters)
  }

  async getById(req, res, next) {
    try {
      const {id} = req.body
      const newsletter = await newsService.getById(id)
      return res.json(newsletter)
    } catch(e) {
      next(e)
    }
  }
}

module.exports = new NewsController()
