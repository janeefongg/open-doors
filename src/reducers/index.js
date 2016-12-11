import { combineReducers } from 'redux';
import registerReducer from './register_reducer';
import loginReducer from './login_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
  register: registerReducer,
  login   : loginReducer,
  search  : searchReducer,
});
