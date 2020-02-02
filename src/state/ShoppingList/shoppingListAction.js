export const getShoppingList = () => {
  return dispatch => {
    const URL = `https://api.myjson.com/bins/qzuzi`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        if (data) {
          dispatch({ type: "GET_SHOPPING_LIST_SUCCESS", payload: data });
        }
      })
      .catch(error=> console.log(error));
  };
};

export const sortShoppingList = type => {
  return dispatch => {
    dispatch({ type: "SORT_SHOPPING_LIST", payload: type });
  };
};  

export const addToCart = data => {
  return dispatch => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };
};

export const onChangeInput = (value) => {
  return dispatch => {
    dispatch({ type: "ON_CHANGE_INPUT", payload: value });
  };
};

export const onSubmitSearch = () => {
  return dispatch => {
    dispatch({ type: "ON_SUBMIT_SEARCH" });
  };
}

export const onChangeRangeValue = (value) => {
  return dispatch => {
    dispatch({ type: "ON_CHANGE_RANGE_VALUE", payload: value });
  };
}

export const onApplyFilter = () => {
  return dispatch => {
    dispatch({ type: "ON_APPLY_FILTER" });
  };
};

export const removeItem = (data) => {
  return dispatch => {
    dispatch({ type: "REMOVE_ITEM" , payload: data});
  };
}

export const updateQty = (data)=>{
  return dispatch => {
    dispatch({ type: "UPDATE_ITEM_QTY" , payload: data});
  };
}