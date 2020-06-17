import React, { Component } from 'react';
import './Box.css';

class BoxComponent extends Component {
    constructor(props) {
        super(props);
        const { value, id } = props;
        this.state = {
            value: value,
            id: id
        }
    }

    render() {
        if (this.state.value === 0) {
            this.state.value = " ";
        }
    
        return (
            <div className="box" onClick={() => this.props.onClick(this.state.id)}>
                <p className="value">{this.state.value}</p>
            </div>        
        );
    }
}

export default BoxComponent;