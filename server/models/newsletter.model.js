const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const NewsletterSchema = new Schema({
  header: {type: String, required: true},
  short_description: {type: String, default: null, required: false},
  description: {type: String, required: true},
  background: {type: String, default: null},
  index: {type: Number}
})

NewsletterSchema.plugin(mongoosePaginate)

module.exports = model('Newsletter', NewsletterSchema)
