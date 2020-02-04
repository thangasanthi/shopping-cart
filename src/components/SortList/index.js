import React from 'react';


import './index.css';
/**
* Sort component with sorting options.
* @param {Object} props - object which contains the sotring function etc..
* @param {Function} sortShoppingList - function which set the sorting based on type
*/

export default (props) => {
  
  return (
    <div className="navbar">
      <label className="sort__by" onClick={props.toggleSort}><i className="fa fa-sort sort__icon"></i>Sort By</label>
      <div className={props.showSort ? 'sortby__mobile show ': 'hide'}>
        <div className="sortby__content">
          <h5 className="mb-4">Sort Options</h5>
          <label className="cursor" onClick={props.sortShoppingList.bind(this, "HTL")}>
          Price -- High Low
            <input type="radio" name="radio" className="sortby__input"/>
            <span className="checkmark"></span>
          </label>
          <label className="cursor" onClick={props.sortShoppingList.bind(this, "LTH")}>
              Price -- Low High
            <input type="radio" name="radio" className="sortby__input"/>
            <span className="checkmark"></span>
          </label>
          <label className="cursor" onClick={props.sortShoppingList.bind(this, "Discount")}>
              Discount
            <input type="radio" name="radio" className="sortby__input"/>
            <span className="checkmark"></span>
          </label>
          <div className="sortby__btns">
            <button className="cancel__btn" type="button" onClick={props.toggleSort}>
              Cancel
              </button>
            {/* <button className="apply__btn" type="button" onClick={props.onApplyFilter}>
              Apply
              </button> */}
          </div>
        </div>
      
      </div>
    </div>
  )
}