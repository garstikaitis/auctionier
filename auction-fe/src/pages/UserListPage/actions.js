import Api from '../../utils/Api';

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const CREATE_USER_PENDING = 'CREATE_USER_PENDING';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const DELETE_USER_PENDING = 'DELETE_USER_PENDING';
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_PENDING,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
}

export function fetchUsers() {
  return async dispatch => {
    dispatch(fetchUsersRequest());
    try {
      const data = await Api.getUsers();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
  };
}

function createUserRequest(data) {
  return {
    type: CREATE_USER_PENDING,
    payload: data,
  };
}

function createUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS,
  };
}

function createUserError(error) {
  return {
    type: CREATE_USER_ERROR,
    payload: error,
  };
}

export function createUser(data) {
  return async dispatch => {
    dispatch(createUserRequest(data));
    try {
      await Api.createUser(data);
      dispatch(createUserSuccess());
      dispatch(fetchUsers());
    } catch (error) {
      dispatch(createUserError(error));
    }
  };
}

function deleteUserRequest(id) {
  return {
    type: DELETE_USER_PENDING,
    payload: id,
  };
}

function deleteUserSuccess() {
  return {
    type: DELETE_USER_SUCCESS,
  };
}

function deleteUserError(error) {
  return {
    type: DELETE_USER_ERROR,
    payload: error,
  };
}

export function deleteUser(id) {
  return async dispatch => {
    dispatch(deleteUserRequest(id));
    try {
      await Api.deleteUser(id);
      dispatch(deleteUserSuccess());
      dispatch(fetchUsers());
    } catch (error) {
      dispatch(deleteUserError(error));
    }
  };
}
