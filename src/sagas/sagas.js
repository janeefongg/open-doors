import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import {postSignIn} from '../actions/index'

function* postSignInUser(action) {

  const signInObj = {
    email   : action.payload.email,
    password: action.payload.password,
  };

  try {
    yield call(postSignIn, signInObj);
    yield put ({ type: 'SIGNIN_SUCCESS', isSignedIn: true })
  } catch (e) {
    yield put ({ type: 'SIGNIN_FAILED', isSignedIn: false });
  }
}

function* mySaga() {
  yield takeEvery('POST_SIGNIN', postSignInUser);
}

export default mySaga;
