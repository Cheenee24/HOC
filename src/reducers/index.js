import { combineReducers } from 'redux';
import authenticationReducer from './authetication';

const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
