import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './index.css';

export default (props) => {
  return (
    <div className="">
      <h2>Filters</h2><br />
      <InputRange
        maxValue={10000}
        minValue={100}
        value={props.rangevalue}
        onChange={value => props.onChange(value)} />
      <label id="price-label"> Price </label>
      <br />
      <button className="apply__btn" type="button" onClick={props.onApplyFilter}>
        Apply
        </button>
    </div>
  );
};