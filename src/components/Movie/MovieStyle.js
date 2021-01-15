import { makeStyles } from '@material-ui/core/styles';

const MovieStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    height: '60vh',
    width: '15vw',
    backgroundColor: '#d66853',
  },
  actionArea: {
      height: '100%',
  },
  cardImage: {
      height: '80%',
  },
  cardContent: {
      height: '20%',
      wordBreak: 'break-word',
      overflow: 'hidden',
  },
}));

export default MovieStyles;