import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
),
  document.getElementById('root')
);
