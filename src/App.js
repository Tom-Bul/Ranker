import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import Home from './views/Home';
import Movies from './views/Movies';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/movies' component={Movies} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
