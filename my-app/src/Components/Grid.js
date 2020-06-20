import React, { Component } from 'react';
import BoxComponent from './Box/BoxComponent';
const algorithm = require('../Algorithm');

class Grid extends Component {
    // Triggered when a box is selected and a key is detected
    onKeyDown = (event) => {
        let key = event.key;
        // Backspace also clears a box
        if (key === "Backspace") {
            key = "0";
        }
        // Prevent bizarre values
        key = parseInt(key);        
        if (isNaN(key)) {
            return;
        }
        
        if (this.props.selectedId !== -1) { // Only update numbers if a box is selected
            const row = Math.floor(this.props.selectedId / 9);
            const col = this.props.selectedId % 9;
            // Ensure the entered key is a valid move
            if (algorithm.isInputCorrect(this.props.numbers, row, col, key) || (key === 0)) {
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
                                item = null;
                            }

                            // Set border-color to lime if a box is selected
                            let boxClassName = "box";
                            if (this.props.selectedId === (i * 9 + j)) {
                                boxClassName += " highlightedBox";
                            }

                            const id = i * 9 + j; // Convert 2d position to 1d
                            const largeBox = (
                                <div style={{marginLeft: '4px'}}>
                                    <BoxComponent key={(i+1) *j} value={item} id={id} onClick={this.props.onBoxClick} className={boxClassName} />
                                </div>
                            );
                            const normalBox = (
                                <div style={{marginLeft: '2px'}}>
                                    <BoxComponent key={(i+1) *j} value={item} id={id} onClick={this.props.onBoxClick} className={boxClassName} />
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
            <div className="column" onKeyDown={this.onKeyDown} tabIndex="0">
                {this.getGrid()}
            </div>
        );
    }
}

export default Grid;