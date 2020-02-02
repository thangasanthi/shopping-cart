import React from "react";
import { connect } from "react-redux";
import {
  sortShoppingList,
  addToCart,
  onChangeInput,
  onSubmitSearch,
  onChangeRangeValue,
  onApplyFilter
} from "../../state/ShoppingList/shoppingListAction";
import Filter from '../Filter/index.js';
import Header from '../Header/index';
import SortList from '../SortList/index.js';
import "./index.css";

class shoppingList extends React.Component {

  onChangeInput = (e) => {
    this.props.onChangeInput(e.target.value);
  }

  onSubmitSearch = () => {
    this.props.onSubmitSearch();
  };

  onChangeRangeValue = (value) => {
    this.props.onChangeRangeValue(value);
  };

  render() {
    const { shoppingList } = this.props;
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
            <div className="item__list">
              {shoppingList.map(data => (
                <div className="item__first" key={data.id}>
                  <figure>
                    <img src={data.img_url} className="item__img" alt="" />
                    <figcaption>{data.name}</figcaption>
                    <span className="item__price">
                      <i className="fa fa-inr" aria-hidden="true" /> {data.price}
                    </span>{" "}
                    <span className="item__act">100</span>{" "}
                    <span className="item__discnt">{data.discount}% off</span>
                    <div>
                      <button className="add__cart" type="button" onClick={this.props.addToCart.bind(this, data)}>
                        Add to Cart
                      </button>
                    </div>
                  </figure>
                </div>
              ))}
            </div>
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
    rangevalue: shopingListReducer.rangevalue
  };
};

const mapDispatchToProps = {
  sortShoppingList,
  addToCart,
  onChangeInput,
  onSubmitSearch,
  onChangeRangeValue,
  onApplyFilter
};

export default connect(mapStatetoProps, mapDispatchToProps)(shoppingList);
