import { combineReducers } from 'redux';
import dummyReducer from './dummy_reducer';
import authReducer from './auth_reducers'

export default combineReducers({
  dummyReducer,
  authReducer,
});
