import React from 'react';
// import { Box } from '@material-ui/core';

import moviesStyles from './MoviesStyles';
import MoviesList from '../../components/MoviesList'


const Movies = () => {
  const classes = moviesStyles();

  return (
    <MoviesList />
  );
};

export default Movies;