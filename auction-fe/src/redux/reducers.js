import { combineReducers } from 'redux';
import usersReducer from '../pages/UserListPage/reducer';
import singleUserReducer from '../pages/UserPage/reducer';

export default combineReducers({
  users: usersReducer,
  user: singleUserReducer,
});
