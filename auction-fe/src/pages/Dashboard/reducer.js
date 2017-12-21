import {
  FETCH_USERS_ERROR,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  CREATE_USER_PENDING,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
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
    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case CREATE_USER_PENDING:
      return state;
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case DELETE_USER_PENDING:
      return state;
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
