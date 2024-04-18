const mongoose = require('mongoose');

// Define schema for Movie
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: true
  }
});

// Create Movie model from schema
const movie = mongoose.model('movie', movieSchema);

module.exports = movie;
