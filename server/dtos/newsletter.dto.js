module.exports = class NewsletterDto {
  header
  short_description
  description
  background
  date

  constructor(model) {
    this.header = model.header
    this.short_description = model.short_description
    this.description = model.description
    this.background = `${process.env.API_URL}/static/${model.background}`
    this.date = model.date
    this._id = model._id
  }
}
