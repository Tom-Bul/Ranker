import { makeStyles } from '@material-ui/core/styles';

const MovieListStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    // marginTop: theme.spacing(3),
    // marginLeft: theme.spacing(3),
    // backgroundColor: 'blue',
  },
  moviesGrid: {

  },
  addMovie: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(2),
    height: '60vh',
    width: '15vw',
    backgroundColor: '#d66853',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#d66853',
    outline: 'none',
    border: '2px solid #212d40',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default MovieListStyles;
