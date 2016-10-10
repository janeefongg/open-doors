import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
),
  document.getElementById('root')
);
