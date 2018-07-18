const express = require('express')
const router = express.Router()

const Movie = require('../models/movies.js')

// INDEX
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// CREATE
router.post('/', async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body)
    res.status(200).json(newMovie)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleteMovie = await Movie.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteMovie)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// EDIT
router.put('/:id', async (req, res) => {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateMovie)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

module.exports = router
