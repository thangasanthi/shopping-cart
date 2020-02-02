import React from "react";
import { connect } from "react-redux";
import {
    getShoppingList,
    sortShoppingList,
    addToCart,
    removeItem,
    updateQty
} from "../../state/ShoppingList/shoppingListAction";
import Header from '../Header/index';
import './index.css';

class cartList extends React.Component {

    renderCartList = (list) => {
        return list.map((data, index) => {
            return (<div key={index.toString()} className="row cart-list">
                <div className="col-sm-2">
                    <img id="list-image" src={data.img_url} alt="" />
                </div>
                <div className="col-sm-2 pl-1">
                    {data.name} <br />
                    {data.price} <br />
                    {data.discount} <br />
                </div>
                <div className="col-sm-2 pl-1">
                    <label onClick={this.props.updateQty.bind(this, { action: 'REMOVE', id: data.id })}> - </label>  <span>{data.qty}</span> <label onClick={this.props.updateQty.bind(this, { action: 'ADD', id: data.id })}> + </label>
                </div>
                <div className="col-sm-2">
                    <b><label onClick={this.props.removeItem.bind(this, data)}> REMOVE </label></b>
                </div>
            </div>)
        })
    }

    /**
  * calculate the percentage.
  * @param {Number} price - total price of the item.
  * @param {Number} discount - discount on total price.
  */
    percentage = (price, percentage) => {
        var c = (parseFloat(price) * parseFloat(percentage)) / 100;
        return parseFloat(c);
    }

    /**
    * calculate the price details and discounts.
    * @param {Object} list - The object which contains the price and qty details  etc...
    */
    priceDetails = (list) => {
        let price = 0;
        let totalDiscount = 0;
        list.forEach(list => {
            price += list.price * list.qty;
            totalDiscount += this.percentage(price, list.discount);
        });
        const total_qty = list.reduce((t, { qty }) => t + qty, 0);
        const total_price = price - totalDiscount;

        return (<div>
            <label>Price ({total_qty} Items)</label> : {price} <br />
            <label> Discount</label> : {totalDiscount}
            <hr />
            <label>Total Payable {total_price}</label>
        </div>)
    }

    render() {
        const { cartList } = this.props;

        return (
            <React.Fragment>
                <Header showCart={false} />
                {
                    cartList.length > 0 ?
                        <div className="row">
                            <div className="col-sm-8">
                                {this.renderCartList(cartList)}
                            </div>
                            <div className="col-sm-4">
                                <div>
                                    <div>
                                        <h5> Price Details</h5>
                                    </div>
                                    {this.priceDetails(cartList)}
                                </div>
                            </div>
                        </div> :
                        <p> Your cart is empty </p>
                }
            </React.Fragment>
        );
    }
}
const mapStatetoProps = state => {
    const { shopingListReducer } = state;
    return {
        cartList: shopingListReducer.cartList,

    };
};

const mapDispatchToProps = {
    getShoppingList,
    sortShoppingList,
    addToCart,
    removeItem,
    updateQty
};

export default connect(mapStatetoProps, mapDispatchToProps)(cartList);
