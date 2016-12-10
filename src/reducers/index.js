import { combineReducers } from 'redux';
import dummyReducer from './dummy_reducer';
import registerReducer from './register_reducer';
import loginReducer from './login_reducer';

export default combineReducers({
  dummyReducer,
  register: registerReducer,
  login   : loginReducer,
});
