import { LOGIN_ERROR, LOGIN_SUCESS, LOGIN_PENDING } from './actions';

const initialState = {
  loading: true,
  data: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return state;
    case LOGIN_SUCESS:
      console.log(action);
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
