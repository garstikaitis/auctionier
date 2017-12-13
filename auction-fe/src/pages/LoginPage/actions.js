import Api from '../../utils/Api';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCESS = 'LOGIN_SUCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginRequest(user) {
  return {
    type: LOGIN_PENDING,
    payload: {
      username: user.username,
      password: user.password,
    },
  };
}

function loginSucess(user) {
  return {
    type: LOGIN_SUCESS,
    payload: user.token,
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}

export function login(user) {
  return async dispatch => {
    dispatch(loginRequest(user));
    try {
      const data = await Api.authenticate(user);
      dispatch(loginSucess(data));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
}
