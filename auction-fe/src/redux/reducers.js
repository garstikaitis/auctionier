import { combineReducers } from 'redux';
import usersReducer from '../pages/UserListPage/reducer';
import singleUserReducer from '../pages/UserPage/reducer';
import itemReducer from '../components/Items/reducer';
import authenticationReducer from '../pages/LoginPage/reducer';

export default combineReducers({
  users: usersReducer,
  user: singleUserReducer,
  items: itemReducer,
  authentication: authenticationReducer,
});
