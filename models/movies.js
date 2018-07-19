
const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, default: 'Best movie ever!'},
  likes: {type: Number, default: 0},
  tags: [{type: String}],
  watched: {type: Boolean, default: false}
})

module.exports = mongoose.model('Movies', movieSchema)
