import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import usersReducer from '../pages/Dashboard/reducer';
import singleUserReducer from '../pages/UserPage/reducer';
import itemReducer from '../components/Items/reducer';
import authenticationReducer from '../pages/LoginPage/reducer';

export default combineReducers({
  users: usersReducer,
  user: singleUserReducer,
  items: itemReducer,
  authentication: authenticationReducer,
  form: formReducer,
});
