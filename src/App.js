import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import FourColumns from './components/FourColumns';
import TwoGrid from './components/TwoGrid';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route exact path="/" component={Home} />
          <Route path="/four-columns" component={FourColumns} />
          <Route path="/two-grid" component={TwoGrid} />
        </div>
      </Router>
    );
  }
}

export default App;
