import { SIGNUP_ERROR, SIGNUP_PENDING, SIGNUP_SUCESS } from './actions';

const initialState = {
  loading: true,
  data: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_PENDING:
      return state;
    case SIGNUP_SUCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
