import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActionArea, Typography, CardMedia } from '@material-ui/core';

import MovieStyles from './MovieStyle';

const Movie = props => {
  const classes = MovieStyles();
  const [data, setData] = useState([]);
 
  useEffect(() => {
    getMovieData();
  });

  const getMovieData = () => {
    axios.get(`http://www.omdbapi.com/?apikey=5e2ebf5b&t=${props.title}`)
            .then(res => setData(res.data))
            .catch(err => console.log('error: ' + err));
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea} onClick={() => {props.delete(props._id) }}>
        <CardMedia component="img" alt={data.title} image={data.Poster} title={data.title} className={classes.cardImage}/>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {`Prod: ${data.Year}`}
          </Typography>
          <Typography variant="body2" component="p">
            {props.rating}/10
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Movie;