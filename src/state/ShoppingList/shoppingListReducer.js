const INITIAL_STATE = {
  shoppingList: [],
  tempShoppingList: [],
  cartList: [],
  searchValue: null,
  tempList: [],
  rangevalue: { min: 100, max: 10000 }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SHOPPING_LIST_SUCCESS":
      return { ...state, shoppingList: action.payload, tempShoppingList: action.payload };

    case "SORT_SHOPPING_LIST":
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
      const isAlreadAdded = cartList.some(list => list.id === action.payload.id);
      if (!isAlreadAdded) {
        cartList.push({ ...action.payload, qty: 1 });
      }
      return { ...state, cartList };

    case "ON_CHANGE_INPUT":
      return { ...state, searchValue: action.payload }

    case "ON_SUBMIT_SEARCH":
      let list = state.shoppingList, 
      filteredList = [];
      state.tempList = list;
      if (state.searchValue === null) {
        alert('Please enter something to search in search box');
        return state;
      }
      if (state.searchValue !== null && state.searchValue.trim() === '') {
        return { ...state, shoppingList: state.tempList };
      }
      list.forEach((data) => {
        if (data.name.toLowerCase() === state.searchValue.toLowerCase()) {
          filteredList.push(data);
        }
      });
      if (filteredList.length > 0) {
        return { ...state, shoppingList: filteredList }
      }
      return state;

    case 'ON_CHANGE_RANGE_VALUE': {
      return { ...state, rangevalue: action.payload }
    }

    case 'ON_APPLY_FILTER': {
      const list = state.tempShoppingList;
      const range = state.rangevalue;
      const filteredList = list.filter(el => (el.price >= range.min && el.price <= range.max));
      return { ...state, shoppingList: filteredList }
    }

    case 'REMOVE_ITEM': {
      const data = action.payload;
      return { ...state, cartList: state.cartList.filter(item => item.id !== data.id) };
    }

    case 'UPDATE_ITEM_QTY': {
      const data = action.payload;
      const cartList = state.cartList.slice();

      if (data.action.toUpperCase() === 'ADD') {
        cartList.forEach((el) => {
          if (el.id === data.id) {
            el.qty += 1;
          }
        });
      }
      if (data.action.toUpperCase() === 'REMOVE') {
        cartList.forEach((el) => {
          if (el.id === data.id && el.qty > 1) {
            el.qty -= 1;
          }
        });
      }
      return { ...state, cartList };
    }

    default:
      return state;
  }
};
