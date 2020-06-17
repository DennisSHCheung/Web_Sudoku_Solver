import React from 'react';
import './Box.css';

const BoxComponent = (props) => {

    let { value, id } = props;
    if (value === 0) {
        value = " ";
    }

    return (
        <div className="box">
            <p className="value">{value} {id}</p>
        </div>        
    );

}

export default BoxComponent;