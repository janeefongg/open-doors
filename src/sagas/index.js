import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router';

import { postLogin, postSignup, searchCompanyAJAX } from '../services'


function* loginUser(action) {
  const loginObj = {
    username: action.payload.username,
    password: action.payload.password,
  };

  try {
    yield call(postLogin, loginObj);
    yield put({ type: 'LOGIN_STATUS', payload: true });
  } catch (e) {
    yield put({ type: 'LOGIN_STATUS', payload: false });
  }
}

function* registerUser({payload}) {
  const registerPayload = {
    username: payload.username,
    password: payload.password,
    email   : payload.email,
  }

  try {
    yield call(postSignup, registerPayload);
    yield put ({ type: 'REGISTER_SUCCESS', isRegisterSuccess: true });
    browserHistory.push('/search');
  } catch (e) {
    console.error(e);
    yield put ({ type: 'REGISTER_FAILED', isRegisterSuccess: false });
  }
}

function* searchCompanies({payload}) {
  const searchQuery = payload.companyName.length > 0 ? payload.companyName : payload.companyLocation;
  try {
    const results = yield call(searchCompanyAJAX, searchQuery);
    yield put ({ type: 'SAVE_SEARCH_RESULTS', payload: results });
    yield put ({ type: 'SEARCH_FAIL', payload: false });
  } catch (e) {
    console.error(e);
    yield put ({ type: 'SEARCH_FAIL', payload: true });
  }
}

export default function* root() {
  yield [
    takeEvery('POST_LOGIN', loginUser),
    takeEvery('REGISTER_USER', registerUser),
    takeEvery('POST_COMPANY_SEARCH', searchCompanies),
  ];
};
