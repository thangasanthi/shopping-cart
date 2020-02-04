import React from 'react';
import LazyImage from '../features/LazyImage'
import './index.css';

export const ItemList = (list, showAddCart=false, addToCart = () => false, leftImg = false) => {

    return (
    <div className="item__first" key={list.id}>
        <figure className={leftImg ? "item__first_left_image" : ""} >
            <LazyImage src={list.img_url} className="item__img" alt="" />
            <div className="pl-3">
                <figcaption>{list.name}</figcaption>
                <span className="item__price">
                    <i className="fa fa-inr" aria-hidden="true" /> {list.price}
                </span>{" "}
                <span className="item__act">100</span>{" "}
                <span className="item__discnt">{list.discount}% off</span>
                {
                    showAddCart ?
                        <div>
                            <button className="add__cart" type="button" onClick={(e) => addToCart(list)}>
                                Add to Cart
                                </button>
                        </div>
                        : null
                }
                <div>
                </div>
            </div>
        </figure>
    </div>
    )
}

export default (props) => {
    return (
        <div className="item__list">
            {props.productList.map(list => (
                ItemList(list, props.showAddCart, props.addToCart)
            ))}
        </div>
    )
}
