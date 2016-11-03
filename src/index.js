import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'

// vendor css
import 'bootstrap-grid/dist/grid.css';

// authored scss
import './index.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
),
  document.getElementById('root')
);
