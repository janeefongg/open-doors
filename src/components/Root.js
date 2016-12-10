// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
<<<<<<< Updated upstream
import configureStore from '../configureStore';
import Splash from './splash';
import Register from './register';
=======

import store from '../configureStore';
import Splash from './splash';

>>>>>>> Stashed changes
import SearchCompany from './search-company';
import CompanyProfile from './company-profile';
import SignIn from './auth/SignIn';


const Root = () => (
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
  </Provider>
);

export default Root;
