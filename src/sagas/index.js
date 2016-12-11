import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { postLogin } from '../actions/index'
// import { postRegister } from '../actions/'

function* loginUser(action) {
  const loginObj = {
    username: action.payload.username,
    password: action.payload.password,
  };

  try {
    console.log('inside here')
    const isLoginSuccessful = yield call(postLogin, loginObj);
    console.log('this is isLoginSuccessful', isLoginSuccessful)
    yield put ({ type: 'SIGNIN_SUCCESS', isSignedIn: true })
  } catch (e) {
    yield put ({ type: 'SIGNIN_FAILED', isSignedIn: false });
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
