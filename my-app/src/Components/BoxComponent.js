import React, { Component } from 'react';
import './Box.css';

const BoxComponent = (props) => {

    const { value, id } = props;
    
    return (
        <div className="box" onClick={() => props.onClick(id)}>
            <p className="value">{value}</p>
        </div>        
    );

}

export default BoxComponent;