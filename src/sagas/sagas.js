import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import {postSignIn} from '../actions/index'

function* postSignInUser(action) {

  const signInObj = {
    email   : action.payload.email,
    password: action.payload.password,
  };

  try {
    const user = yield call(postSignIn, signInObj);
    yield put ({type: 'USER_SUCCESS', user: user})
  } catch (e) {
    yield put ({type: 'USER_FAILED', message: e.message});
  }
}
function* mySaga() {
  yield takeEvery('POST_SIGNIN', postSignInUser);
}

export default mySaga;
