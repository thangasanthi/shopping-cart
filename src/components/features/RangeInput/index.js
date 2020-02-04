import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './index.css';

export default (props) => {
  return (
    <div className="">
      <h2 onClick={props.toggleFilter}> <i className="fa fa-filter filter__icon"></i>Filters</h2><br />
      <div className={props.showFilter ? "filter__mobile show" : "hide"}>
        <div className="filter__content">
         {
          props.showFilter ? <h5 className="mb-5">Filter option</h5> : null
         } 
          <InputRange
            maxValue={10000}
            minValue={100}
            value={props.rangevalue}
            onChange={value => props.onChange(value)} />
          <label id="price-label"> Price </label>
          <br />
          <button className="cancel__btn" type="button" onClick={props.toggleFilter}>
            Cancel
            </button>
          <button className="apply__btn" type="button" onClick={props.onApplyFilter}>
            Apply
            </button>
        </div>
        
      </div>
    </div>
  );
};