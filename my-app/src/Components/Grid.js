import React, { Component } from 'react';
import BoxComponent from './BoxComponent';
import './Box.css';
const algorithm = require('../Algorithm');
//var solve = require('../Algorithm.js');

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    onKeyPress = (event) => {
        const key = parseInt(event.key);
        // Prevent bizarre values
        if (isNaN(key)) {
            return;
        }
        if (this.props.selectedId !== -1) { // Only update numbers if a box is selected
            const row = Math.floor(this.props.selectedId / 9);
            const col = this.props.selectedId % 9;
            // Ensure the entered key is a valid move
            if (algorithm.checkMove(this.props.numbers, row, col, key) || (key === 0)) {
                this.props.setNumbersElement(row, col, key);
            }
        }
    }

    // Construct the 9x9 grid based on numbers (2d array)
    getGrid = () => {
        const grid = this.props.numbers.map((row, i) => {
            let count = 0; // count the number of elements in each row
            let className = "row";
            if (i === 2 || i === 5 || i === 8) {
                className = "row thirdRow"; // Every third row needs to have a larger gap
            }
            return (
                <div className={className}>
                    {
                        row.map((item, j) => {
                            
                            // Leave an empty box if 0
                            if (item === 0) {
                                item = " ";
                            }

                            // Set border-color to lime if a box is selected
                            let className = "box";
                            if (this.props.selectedId === (i * 9 + j)) {
                                className += " highlightedBox";
                            }

                            const id = i * 9 + j; // Convert 2d position to 1d
                            const largeBox = (
                                <div style={{marginLeft: '4px'}}>
                                    <BoxComponent value={item} id={id} onClick={this.props.onBoxClick} className={className} />
                                </div>
                            );
                            const normalBox = (
                                <div style={{marginLeft: '2px'}}>
                                    <BoxComponent value={item} id={id} onClick={this.props.onBoxClick} className={className} />
                                </div>
                            );

                            if (j === count) { // Every third column needs to have a larger gap
                                count += 3;
                                return largeBox;
                            } else {
                                return normalBox;
                            }
                        })
                    }
                </div>
            );
        });
        return grid;
    }

    render() {   
        return (
            <div className="column" onKeyPress={this.onKeyPress} tabIndex="0">
                {this.getGrid()}
            </div>
        );
    }
}

export default Grid;