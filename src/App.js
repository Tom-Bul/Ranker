import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import Navbar from './components/Navbar';
import Home from './views/Home';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <br/>
        <Route path='/' exact component={Home} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
