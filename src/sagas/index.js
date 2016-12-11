import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { postLogin } from '../services/index'

function* loginUser(action) {
  const loginObj = {
    username: action.payload.username,
    password: action.payload.password,
  };

  try {
    const isLoginSuccessful = yield call(postLogin, loginObj);
    yield put({ type: 'LOGIN_STATUS', payload: true });
  } catch (e) {
    yield put({ type: 'LOGIN_STATUS', payload: false });
  }
}

function* registerUser({payload}) {

}

export default function* root() {
  yield [
    takeEvery('POST_LOGIN', loginUser),
    takeEvery('REGISTER_USER', registerUser),
  ];
};
