import Api from '../../utils/Api';

export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

function fetchUserRequest(id) {
  return {
    type: FETCH_USER_PENDING,
    payload: id,
  };
}

function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
}

function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

export function fetchUser(id) {
  return async dispatch => {
    dispatch(fetchUserRequest(id));
    try {
      const data = await Api.getSingleUser(id);
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  };
}
