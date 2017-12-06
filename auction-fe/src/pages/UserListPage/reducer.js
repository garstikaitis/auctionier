import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
} from './actions';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return state;
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
