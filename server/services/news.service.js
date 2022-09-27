const {v4} = require('uuid')
const Newsletter = require('../models/newsletter.model')
const fileService = require('./file.service')
const NewsletterDto = require('../dtos/newsletter.dto')
const ApiError = require('../exceptions/api.error')

class NewsService {

  async create(header, short_description, description, background) {

    const newsletters = await Newsletter.find()

    const index = newsletters.length + 1

    const date = new Date().toISOString().slice(0, 10)

    const backgroundWay = fileService.saveFile(background)

    const newsletter = await Newsletter.create({
      header,
      short_description,
      description,
      background: backgroundWay,
      date,
      index
    })

    const newsletterDto = new NewsletterDto(newsletter)

    return newsletterDto
  }

  async get(page, limit, args) {
    var skip = page * limit
    const allNewsletters = await Newsletter.find()
    const newslettersFromDb = await Newsletter.find().sort({index: -1}).skip(skip).limit(limit)

    const newsletters = [...newslettersFromDb.map(newsletter => {
      const newsletterDto = new NewsletterDto(newsletter)

      return newsletterDto
    })]
 
    if(newslettersFromDb.length <= 0) return {canLoad: false, x_page_count: allNewsletters.length}

    const segmented = this.segmentNewsletter(newsletters)

    return {newsletters, segmented, canLoad: true, x_page_count: allNewsletters.length}
  }

  segmentNewsletter(arr) {

    const seg1 = []
    const seg2 = []

    arr.map((newsletter, i) => {
      if(i < arr.length / 2) {
        return seg1.push(newsletter)
      } else {
        return seg2.push(newsletter)
      }
    })

    return [[...seg1, ...seg2]]
  }

  async getById(id) {
    try {
      const newsletter = await Newsletter.findById(id)
      if(!newsletter) return {notFound: true, newsletter}
      const newsletterDto = new NewsletterDto(newsletter)
      return {notFound: true, newsletter: newsletterDto}
    } catch(e) {
      console.log(e)
    }
  }
}

module.exports = new NewsService()
