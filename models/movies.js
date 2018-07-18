
const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  title: String,
  description: String,
  likes: {type: Number, default: 0}
})

module.exports = mongoose.model('Movies', movieSchema)
