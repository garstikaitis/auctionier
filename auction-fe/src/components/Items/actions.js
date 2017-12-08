import Api from '../../utils/Api';
import { fetchUsers } from '../../pages/UserListPage/actions';

export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const ADD_ITEM_TO_USER_PENDING = 'ADD_ITEM_TO_USER_PENDING';
export const ADD_ITEM_TO_USER_SUCCESS = 'ADD_ITEM_TO_USER_SUCCESS';
export const ADD_ITEM_TO_USER_ERROR = 'ADD_ITEM_TO_USER_ERROR';

function fetchItemsRequest() {
  return {
    type: FETCH_ITEMS_PENDING,
  };
}

function fetchItemsSuccess(items) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
}

function fetchItemsFailure(error) {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error,
  };
}

export function fetchItems() {
  return async dispatch => {
    dispatch(fetchItemsRequest());
    try {
      const data = await Api.getItems();
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error));
    }
  };
}

function addItemToUserRequest(userId, itemId) {
  return {
    type: ADD_ITEM_TO_USER_PENDING,
  };
}

function addItemToUserSuccess() {
  return {
    type: ADD_ITEM_TO_USER_SUCCESS,
  };
}

function addItemToUserError(error) {
  return {
    type: ADD_ITEM_TO_USER_ERROR,
    error,
  };
}

export function addItemToUser(userId, itemId) {
  return async dispatch => {
    dispatch(addItemToUserRequest(userId, itemId));
    try {
      await Api.addItemToUser(userId, itemId);
      dispatch(addItemToUserSuccess());
    } catch (error) {
      dispatch(addItemToUserError(error));
    }
  };
}
