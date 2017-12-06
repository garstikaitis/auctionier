import Api from '../../utils/Api';

export const FETCH_ITEMS_PENDING = 'FETCH_ITEMS_PENDING';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

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
