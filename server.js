const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static('public'));


// Routes
const moviesController = require('./controllers/movies.js')
app.use('/movies', moviesController)

// this will catch any route that doesn't exist
app.get('*', (req, res) => {
  res.status(404).json('Sorry, page not found')
})


mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose');
})

app.listen(3000, () => {
    console.log('listening...');
});
