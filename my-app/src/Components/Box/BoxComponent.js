import React from 'react';
import './Box.css';

const BoxComponent = (props) => {
    return (
        <div className={props.className} onClick={(event) => props.onClick(props.id, event)}>
            {
                props.value && <p className="value">{props.value}</p>
            }
        </div>        
    );
}

export default BoxComponent;