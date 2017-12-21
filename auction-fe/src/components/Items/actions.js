import axios from 'axios';
import Api from '../../utils/Api';
import { fetchUsers } from '../../pages/Dashboard/actions';

export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const ADD_ITEM_TO_USER_PENDING = 'ADD_ITEM_TO_USER_PENDING';
export const ADD_ITEM_TO_USER_SUCCESS = 'ADD_ITEM_TO_USER_SUCCESS';
export const ADD_ITEM_TO_USER_ERROR = 'ADD_ITEM_TO_USER_ERROR';
export const CREATE_ITEM_PENDING = 'CREATE_ITEM_PENDING';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_ERROR = 'CREATE_ITEM_ERROR';

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
    payload: {
      userId,
      itemId,
    },
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
    payload: error,
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

function createItemRequest(details) {
  return {
    type: CREATE_ITEM_PENDING,
    payload: details,
  };
}

function createItemSuccess(item) {
  return {
    type: CREATE_ITEM_SUCCESS,
    payload: item,
  };
}

function createItemError(error) {
  return {
    type: CREATE_ITEM_ERROR,
    payload: error,
  };
}

export function createItem(itemDetails) {
  return async dispatch => {
    dispatch(createItemRequest(itemDetails));
    try {
      const item = axios
        .post('http://localhost:3000/api/items', itemDetails, {})
        .then(result => {
          console.log(result.data);
        });
      dispatch(createItemSuccess(item));
    } catch (error) {
      dispatch(createItemError(error));
    }
  };
}
