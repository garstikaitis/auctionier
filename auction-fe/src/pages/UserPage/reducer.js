import {
  FETCH_USER_FAILURE,
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
} from './actions';

const initialState = {
  loading: true,
  data: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return state;
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
