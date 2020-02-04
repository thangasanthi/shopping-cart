import React from 'react';
import RangeInput from '../features/RangeInput/index.js';

export default (props) => {
    return (
        <RangeInput
            rangevalue={props.rangevalue}
            onChange={props.onChange}
            onApplyFilter={props.onApplyFilter}
            toggleFilter={props.toggleFilter}
            showFilter={props.showFilter}
        />
    )
}