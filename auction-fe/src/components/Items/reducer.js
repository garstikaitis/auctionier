import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_PENDING,
  FETCH_ITEMS_SUCCESS,
  ADD_ITEM_TO_USER_ERROR,
  ADD_ITEM_TO_USER_PENDING,
  ADD_ITEM_TO_USER_SUCCESS,
} from './actions';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_PENDING:
      return state;
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case ADD_ITEM_TO_USER_PENDING:
      return state;
    case ADD_ITEM_TO_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_ITEM_TO_USER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
