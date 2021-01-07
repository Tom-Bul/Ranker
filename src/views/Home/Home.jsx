import React from 'react';
import { Box } from '@material-ui/core';

import homeStyles from './HomeStyles';

const Home = () => {
  const classes = homeStyles();

  return (
    <Box className={classes.root}>
      Home page
    </Box>
  );
};

export default Home;