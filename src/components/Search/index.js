import React, { Fragment } from "react";
import './index.css';

/**
* Search Component.
* @param {Object} props - object which contains the search value and function etc..
* @param {Function} onChangeInput - function which is used search the item based on user entered value.
*/

export default (props) => {
    return (
        <Fragment>
            <input id="search" placeholder="Search" className="shop__search" onChange={props.onChangeInput} onKeyPress={(e) => (e.which === 13) ? props.onSubmitSearch() : null} />
        </Fragment>)
}