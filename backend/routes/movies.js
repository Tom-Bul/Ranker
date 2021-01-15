const router = require('express').Router();
// const { modelName } = require('../models/movie.model');
let Movie = require('../models/movie.model');

router.route('/').get((req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const rating = req.body.rating;

  const newMovie = new Movie({
    title,
    rating,
  });

  newMovie.save()
    .then(() => res.json('Movie added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Movie.findByIdAndDelete(req.params.id)
      .then(() => res.json('Movie deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;