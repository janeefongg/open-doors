import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import {postLogin} from '../actions/index'

function* loginUser(action) {

  const signInObj = {
    username: action.payload.username,
    password: action.payload.password,
  };

  try {
    console.log('inside here')
    const isLoginSuccessful = yield call(postLogin, signInObj);
    console.log('this is isLoginSuccessful', isLoginSuccessful)
    yield put ({ type: 'SIGNIN_SUCCESS', isSignedIn: true })
  } catch (e) {
    yield put ({ type: 'SIGNIN_FAILED', isSignedIn: false });
  }
}

function* mySaga() {
  yield takeEvery('POST_LOGIN', loginUser);
}

export default mySaga;
