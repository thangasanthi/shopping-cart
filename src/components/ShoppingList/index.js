import React from "react";
import "./cart.css";
import "./index.css";
import { connect } from "react-redux";
import {
  getShoppingList,
  sortShoppingList,
  addToCart
} from "../../state/ShoppingList/shoppingListAction";

class shoppingList extends React.Component {
  componentDidMount() {
    this.props.getShoppingList();
  }
  render() {
    const { shoppingList } = this.props;

    console.log("shoppingList", shoppingList);

    return (
      <React.Fragment>
        <header className="d-flex align-items-center justify-content-lg-start justify-content-header">
          <div>
            <i className="material-icons header__logo">star</i>
          </div>
          <div className="ml-auto d-flex header__rightdo">
            <div>
              <i className="material-icons">search</i>
            </div>
            <div>
              <i className="material-icons">shopping_cart</i>{
                this.props.cartList.length > 0 ? <label id="cart-count"> {this.props.cartList.length}</label> : null
              }

            </div>
          </div>
        </header>

        <div className="row mx-auto">
          <div className="side">
            <h2>Filters</h2>
            <button class="apply__btn" type="button">
              Apply
            </button>
          </div>
          <div className="main">
            <div className="navbar">
              <a href={"#"}>Sort By</a>
              <label className="cursor" onClick={this.props.sortShoppingList.bind(this, "HTL")}>
                Price -- High Low
              </label>
              <label className="cursor" onClick={this.props.sortShoppingList.bind(this, "LTH")}>
                Price -- Low High
              </label>
              <label className="cursor" onClick={this.props.sortShoppingList.bind(this, "Discount")}>
                Discount
              </label>

            </div>
            <div class="item__list">
              {shoppingList.map(data => (
                <div className="item__first" key={data.id}>
                  <figure>
                    <img src={data.img_url} className="item__img" alt="" />
                    <figcaption>{data.name}</figcaption>
                    <span className="item__price">
                      <i class="fa fa-inr" aria-hidden="true" /> {data.price}
                    </span>{" "}
                    <span className="item__act">100</span>{" "}
                    <span className="item__discnt">{data.discount} off</span>
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

  };
};

const mapDispatchToProps = {
  getShoppingList,
  sortShoppingList,
  addToCart
};

export default connect(mapStatetoProps, mapDispatchToProps)(shoppingList);
