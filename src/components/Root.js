// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { sagaMiddleware } from '../configureStore';
import rootSaga from '../sagas/sagas';
import configureStore from '../configureStore';
import Splash from './splash';
import Register from './register';
import Login from './login';

import SearchCompany from './search-company';
import CompanyProfile from './company-profile';

const initialState = {
  register: {
    username            : '',
    password            : '',
    email               : '',
    firstName           : '',
    lastName            : '',
    numberOfFields      : 5,
    numberOfValidAnswers: 0,
    isValid             : false,
  },
  login: {
    username            : '',
    password            : '',
    numberOfFields      : 2,
    numberOfValidAnswers: 0,
    isValid             : false,
  },
}

const store = configureStore(initialState);
sagaMiddleware.run(rootSaga);

console.log('my store --- ', store);
const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Splash}>
      </Route>
      <Route path="/register" component={Register}>
      </Route>
      <Route path="/login" component={Login}>
      </Route>
      <Route path="/search" component={SearchCompany}>
      </Route>
      <Route path="/company" component={CompanyProfile}>
      </Route>
    </Router>
  </Provider>
);

export default Root;
