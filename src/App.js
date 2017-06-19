import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import FourColumns from './components/FourColumns';
import TwoGrid from './components/TwoGrid';
import FourColumnsOrdered from './components/FourColumnsOrdered';
import FourColumnsGridAreas from './components/FourColumnsGridAreas';
import BasicSiteLayout from './components/BasicSiteLayout';
import ContentPanelsLayout from './components/ContentPanelsLayout';
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
          <Route path="/four-columns-ordered" component={FourColumnsOrdered} />
          <Route path="/four-columns-with-grid-areas" component={FourColumnsGridAreas} />
          <Route path="/basic-layout" component={BasicSiteLayout} />
          <Route path="/content-panels-layout" component={ContentPanelsLayout} />
        </div>
      </Router>
    );
  }
}

export default App;
