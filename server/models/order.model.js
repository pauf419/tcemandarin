const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
  name: {type: String, required: true},
  number: {type: String, required: true},
  email: {type: String, required: true},
  description: {type: String, required: true},
  date: {type: String, required: true},
  status: {type: String, default: 'waiting'}
})

module.exports = model('Order', OrderSchema)
