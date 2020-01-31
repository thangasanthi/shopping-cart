const INITIAL_STATE = {
  shoppingList: [],
  cartList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SHOPPING_LIST_SUCCESS":
      return { ...state, shoppingList: action.payload };

    case "SORT_SHOPPING_LIST":
    console.log('SORT_SHOPPING_LIST', action.payload )
      let sortedList = state.shoppingList.slice();
      if (action.payload.toUpperCase() === "HTL") {
        sortedList.sort((list1, list2) => list2.price - list1.price);
      }
      if (action.payload.toUpperCase() === "LTH") {
        sortedList.sort((list1, list2) => list1.price - list2.price);
      }
      if (action.payload.toUpperCase() === "DISCOUNT") {
        sortedList.sort((list1, list2) => list2.discount - list1.discount);
      }
      return { ...state, shoppingList: sortedList };

    case "ADD_TO_CART":
      let cartList = state.cartList.slice();
      const isAlreadAdded = cartList.some(list=>list.id === action.payload.id);
     
      if(!isAlreadAdded){
        cartList.push(action.payload);
      }
      return { ...state, cartList };
    default:
      return state;
  }
};
