import React from "react";
import { connect } from "react-redux";
import {
  sortShoppingList,
  addToCart,
  onChangeInput,
  onChangeRangeValue,
  onApplyFilter
} from "../../state/ShoppingList/shoppingListAction";
import Filter from '../Filter/index.js';
import Header from '../Header/index';
import SortList from '../SortList/index.js';
import "./index.css";
import ProductList from '../ProductList';
import Loader from '../features/Loader';

class shoppingList extends React.Component {

  onChangeRangeValue = (value) => {
    this.props.onChangeRangeValue(value);
  };

  render() {
    const { shoppingList, isLoading } = this.props;

    return (
      <React.Fragment>
        <Header showCart={true} />
        <div className="row mx-auto" style={{ minHeight: '85vh' }}>
          <div className="side">
            <Filter
              rangevalue={this.props.rangevalue}
              onChange={this.onChangeRangeValue}
              onApplyFilter={this.props.onApplyFilter}
            />
          </div>
          <div className="main">
            <SortList sortShoppingList={this.props.sortShoppingList} />
            {isLoading ?  <Loader /> : <ProductList productList={shoppingList} addToCart={this.props.addToCart} showAddCart={true}/> }
          </div>
        </div>
        <footer>
          <div>@copyright</div>
        </footer>
      </React.Fragment>
    );
  }
}
const mapStatetoProps = state => {
  const { shopingListReducer } = state;
  return {
    shoppingList: shopingListReducer.shoppingList,
    cartList: shopingListReducer.cartList,
    rangevalue: shopingListReducer.rangevalue,
    isLoading: shopingListReducer.isLoading
  };
};

const mapDispatchToProps = {
  sortShoppingList,
  addToCart,
  onChangeInput,
  onChangeRangeValue,
  onApplyFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(shoppingList);
