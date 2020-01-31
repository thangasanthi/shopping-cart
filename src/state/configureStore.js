import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import shopingListReducer from "./ShoppingList/shoppingListReducer";

export default () => {
  return createStore(
    combineReducers({
      shopingListReducer
    }),
    compose(applyMiddleware(thunkMiddleware))
  );
};
