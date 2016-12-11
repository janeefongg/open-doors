import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import rootSaga from '../sagas';
import configureStore, { sagaMiddleware } from '../store/configureStore';
import initialState from '../store/initialState';

import Splash from './splash';
import Register from './register';
import Login from './login';
import SearchCompany from './search-company';
import CompanyProfile from './company-profile';
import ListCompanies from './list-companies';

const store = configureStore(initialState);
sagaMiddleware.run(rootSaga);

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
      <Route path="/list" component={ListCompanies}>
      </Route>
      <Route path="/company" component={CompanyProfile}>
      </Route>
    </Router>
  </Provider>
);

export default Root;
