import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Box, Paper, Modal, Fade, Backdrop, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import MoviesListStyles from './MoviesListStyles';
import Movie from '../Movie';

const MoviesList = () => {
  const classes = MoviesListStyles();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState({movie: { title: 'test', rating: 4}})
 
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:5000/movies')
            .then(res => setData(res.data))
            .catch(err => console.log('error: ' + err));
  };

  const handleClick = id => {
    console.log(id)
    axios.delete(`http://localhost:5000/movies/${id}`)
      .then(res => console.log(res.data));
    data.filter(el => el._id !== id)

    setData(data.filter(el => el._id !== id))
  }

  const handleAddMovie = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeTitle = e => {
    setMovie(prevMov => ({
      movie: {
        ...prevMov.movie,
        title: e.target.value
      }
    }))
  }

  const onChangeRating = e => {
    setMovie(prevMov => ({
      movie: {
        ...prevMov.movie,
        rating: e.target.value
      }
    }))
  }

  const onSubmit = e => {
    e.preventDefault();

    const newMovie = {
      title: movie.movie.title,
      rating: movie.movie.rating,
    }

    axios.post('http://localhost:5000/movies/add', newMovie)
      .then(res => console.log(res.data));

    setOpen(false)
    window.location = '/movies';
  }

  return (
    <Box className={classes.root}>
      <Grid container justify="center" xs={12} className={classes.moviesGrid}>
        {
          data.map(movie => {
            return <Movie title={movie.title} rating={movie.rating} key={movie._id} _id={movie._id} delete={handleClick}/>
          })
        }
        <Paper elevation={3} className={classes.addMovie} onClick={handleAddMovie}>
          <AddIcon style={{ color: '#7d4e57', fontSize: 100}} />
        </Paper>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={onChangeTitle}/>
            <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={onChangeRating}/>
            <input type='submit' value='Add Movie' />
          </form>
        </Fade>
      </Modal>
    </Box>
  );
};

export default MoviesList;