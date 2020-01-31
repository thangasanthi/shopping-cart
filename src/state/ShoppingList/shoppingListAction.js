export const getShoppingList = () => {
  return dispatch => {
    const URL = `https://api.myjson.com/bins/qzuzi`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        if (data) {
          console.log("getShoppingList", data);
          dispatch({ type: "GET_SHOPPING_LIST_SUCCESS", payload: data });
        }
      });
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

