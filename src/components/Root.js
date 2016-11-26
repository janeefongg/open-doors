// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from '../configureStore';
import Splash from './splash';
import SearchCompany from './search-company';
import CompanyProfile from './company-profile';
import SignIn from './auth/signin';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Splash}>
      </Route>
      <Route path="/search" component={SearchCompany}>
      </Route>
      <Route path="/company" component={CompanyProfile}>
      </Route>
      <Route path="/signin" component={SignIn}>
      </Route>
    </Router>
  </Provider>
);

export default Root;
