import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Layout from './Layout';
import Home from './Home';

export default function() {
  CustomRouter() {
    return (
      <Router>
        <Route path = "/" component={Layout} >
          <IndexRoute component={Home} />
        </Route>
      </Router>
    )
  }
}
