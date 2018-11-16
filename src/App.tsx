import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './HomePage';
import VideoSelector from './VideoSelector';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/videos" component={VideoSelector} />
        </div>
      </Router>
    );
  }
}

export default App;