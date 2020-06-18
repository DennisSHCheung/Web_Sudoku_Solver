import React, { Component } from 'react';
import BoxComponent from './BoxComponent';
import './Box.css';

class Grid extends Component {
    constructor() {
        super();
        this.state = {
            gameGrid: "",
            numbers:	[[1,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
                         [0,0,0,0,0,0,0,0,0]],
            selectedId: -1
        }
    }

    onClick = (id, event) => {
        
        if (this.state.selectedId === id) {
            this.setState({ selectedId: -1 });
        } else {
            this.setState({ selectedId: id });
        }

        event.stopPropagation();
    }

    onKeyPress = (event) => {
        console.log(this.state.selectedId);
        if (this.state.selectedId !== -1) { // Only update numbers if a box is selected
            let tempArray = this.state.numbers;
            tempArray[Math.floor(this.state.selectedId/9)][(this.state.selectedId%9)] = event.key;            
            this.setState({ numbers: tempArray });
        }
    }

    // Construct the 9x9 grid based on numbers (2d array)
    getGrid = () => {
        const grid = this.state.numbers.map((row, i) => {
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
                            if (item == 0) {
                                item = " ";
                            }

                            // Set border-color to lime if a box is selected
                            let className = "box";
                            if (this.state.selectedId === (i * 9 + j)) {
                                className += " highlightedBox";
                            }

                            const id = i * 9 + j; // Convert 2d position to 1d
                            const largeBox = (
                                <div style={{marginLeft: '4px'}}>
                                    <BoxComponent value={item} id={id} onClick={this.onClick} className={className} />
                                </div>
                            );
                            const normalBox = (
                                <div style={{marginLeft: '2px'}}>
                                    <BoxComponent value={item} id={id} onClick={this.onClick} className={className} />
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