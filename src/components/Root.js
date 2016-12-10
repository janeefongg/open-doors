// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Register from './register';
import store from '../configureStore';
import Splash from './splash';

import SearchCompany from './search-company';
import CompanyProfile from './company-profile';
import SignIn from './auth/SignIn';


const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Splash}>
      </Route>
      <Route path="/register" component={Register}>
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
