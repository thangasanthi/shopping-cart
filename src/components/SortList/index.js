import React from 'react';

/**
* Sort component with sorting options.
* @param {Object} props - object which contains the sotring function etc..
* @param {Function} sortShoppingList - function which set the sorting based on type
*/

export default (props) => {
  return (
    <div className="navbar">
      <label>Sort By</label>
      <label className="cursor" onClick={props.sortShoppingList.bind(this, "HTL")}>
        Price -- High Low
              </label>
      <label className="cursor" onClick={props.sortShoppingList.bind(this, "LTH")}>
        Price -- Low High
              </label>
      <label className="cursor" onClick={props.sortShoppingList.bind(this, "Discount")}>
        Discount
              </label>
    </div>
  )
}