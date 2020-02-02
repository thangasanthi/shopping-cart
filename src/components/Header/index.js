import React, { Fragment } from 'react';
import { connect } from "react-redux";
import {
    getShoppingList,
    onChangeInput,
    onSubmitSearch,
} from "../../state/ShoppingList/shoppingListAction";
import SearchBox from '../Search/index';
import { withRouter, Redirect } from 'react-router-dom';
import './index.css';

/**
* Header Component.
* @param {Object} props - object which contains the functions and data related to header.
*/

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToCart: false
        }
    }

    componentDidMount() {
        this.props.getShoppingList();
      }

    onClickCart = () => {
        this.setState({ redirectToCart: true })
    }
    render() {

        const { redirectToCart } = this.state;

        if (redirectToCart) {
            return <Redirect push to="/cart" />
        }
        return (
            <Fragment>
                <header className="d-flex align-items-center justify-content-lg-start justify-content-header">
                    <div>
                        <i className="material-icons header__logo">star</i>
                    </div>
                    <div className="ml-auto d-flex header__rightdo">
                        <div>
                            <SearchBox onChangeInput={this.onChangeInput} onSubmitSearch={this.onSubmitSearch} />
                            <i className="material-icons search-icon" onClick={this.onSubmitSearch}>search</i>
                        </div>
                        <div >
                            {this.props.showCart ? 
                                <span onClick={this.onClickCart}>
                                <i className="material-icons cart-icon">shopping_cart</i>{
                                    this.props.cartList.length > 0 ? <label id="cart-count"> {this.props.cartList.length}</label> : null
                                }
                            </span> : null}
                           
                        </div>
                    </div>
                </header>
            </Fragment>
        )
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
    getShoppingList,
    onChangeInput,
    onSubmitSearch,
};

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Header));
