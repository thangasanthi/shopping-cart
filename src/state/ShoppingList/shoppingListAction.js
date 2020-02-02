/** Load the shoppingList */
export const getShoppingList = () => {
  return dispatch => {
    dispatch({ type: "UPDATE_LOADING_STATUS", payload: true });
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

/** 
 *  The function for sort the shopping list
 * @param {String} type - Sort the shoppingList based on type
*/
export const sortShoppingList = type => {
  return dispatch => {
    dispatch({ type: "SORT_SHOPPING_LIST", payload: type });
  };
};  

/** 
 *  The function for add the item to cart list
 * @param {Object} data - Contains the list data
*/
export const addToCart = data => {
  return dispatch => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };
};

/** 
 *  The function for sort the shopping list
 * @param {String} type - Sort the shoppingList based on type
*/
export const onChangeInput = (value) => {
  return dispatch => {
    dispatch({ type: "ON_CHANGE_INPUT", payload: value });
  };
};


/** The function of search */
export const onSubmitSearch = () => {
  return dispatch => {
    dispatch({ type: "ON_SUBMIT_SEARCH" });
  };
}

/** 
 *  The function for change the shopping list price limit
 * @param {String} value - value of input range
*/
export const onChangeRangeValue = (value) => {
  return dispatch => {
    dispatch({ type: "ON_CHANGE_RANGE_VALUE", payload: value });
  };
}

/**  The function for filter the shopping list */
export const onApplyFilter = () => {
  return dispatch => {
    dispatch({ type: "ON_APPLY_FILTER" });
  };
};


/** 
 *  The function for remove the item from cart list
 * @param {Object} data - object of selected item
*/
export const removeItem = (data) => {
  return dispatch => {
    dispatch({ type: "REMOVE_ITEM" , payload: data});
  };
};


/** 
 * The function for update the cart qty
 * @param {Object} data - the object which has the type of action and list 
*/
export const updateQty = (data)=>{
  return dispatch => {
    dispatch({ type: "UPDATE_ITEM_QTY" , payload: data});
  };
}