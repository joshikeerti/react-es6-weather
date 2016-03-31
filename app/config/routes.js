import React from 'react';
import { RouteHandler, Link, Route, Router, hashHistory,IndexRoute } from 'react-router';

import Home from '../components/Home';
import Main from '../containers/Main';

const routes = (
  <Router history = {hashHistory}>
    <Route path='/' component = {Main}>
    <IndexRoute component = {Home}/>
  </Route>
  </Router>

);
export default routes
