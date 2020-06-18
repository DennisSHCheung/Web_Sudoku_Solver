import React, { Component } from 'react';
import './Box.css';

const BoxComponent = (props) => {
    
    return (
        <div className={props.className} onClick={(event) => props.onClick(props.id, event)}>
            <p className="value">{props.value}</p>
        </div>        
    );

}

export default BoxComponent;