import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import FourColumns from './components/FourColumns';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Nav />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Route exact path="/" component={Home}/>
          <Route path="/four-columns" component={FourColumns}/>

        </div>
      </Router>
    );
  }
}

export default App;
