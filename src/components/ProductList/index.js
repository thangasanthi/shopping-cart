import React from 'react';
import LazyImage from '../features/LazyImage'


export const ItemList = (list, showAddCart=false, addToCart = () => false) => {
    return (<div className="item__first" key={list.id}>
        <figure>
            <LazyImage src={list.img_url} className="item__img" alt="" />
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
