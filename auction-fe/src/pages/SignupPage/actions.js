import Api from '../../utils/Api';

export const SIGNUP_PENDING = 'SIGNUP_PENDING';
export const SIGNUP_SUCESS = 'SIGNUP_SUCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

function signupRequest(user) {
  return {
    type: SIGNUP_PENDING,
    payload: {
      username: user.username,
      password: user.password,
    },
  };
}

function signupSucess(user) {
  window.location.href = '/dashboard';
  return {
    type: SIGNUP_SUCESS,
    payload: user,
  };
}

function signupFailure(error) {
  return {
    type: SIGNUP_ERROR,
    payload: error,
  };
}

export function signup(user) {
  return async dispatch => {
    dispatch(signupRequest(user));
    try {
      const data = await Api.signup(user);
      window.localStorage.setItem('token', data.token);
      dispatch(signupSucess(data));
    } catch (error) {
      dispatch(signupFailure(error));
    }
  };
}
