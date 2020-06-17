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

    componentDidMount() {
        this.constructGrid();
    }

    constructGrid = () => {
        console.log("here");
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
                            const id = i * 9 + j;
                            let largeBox = (
                                <div style={{marginLeft: '4px'}}>
                                    <BoxComponent value={item} id={id} onClick={this.onClick} />
                                </div>
                            );
                            let normalBox = (
                                <div style={{marginLeft: '2px'}}>
                                    <BoxComponent value={item} id={id} onClick={this.onClick} />
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
        this.setState({ gameGrid: grid });
    }

    onClick = (id) => {
        if (this.state.selectedId === id) {
            this.setState({ selectedId: -1 });
        } else {
            this.setState({ selectedId: id });
            console.log(id);
        }
    }

    onKeyPress = (event) => {
        if (this.state.selectedId !== -1) {
            let tempArray = this.state.numbers;
            tempArray[Math.floor(this.state.selectedId/9)][(this.state.selectedId%9)] = event.key;            
            this.setState({ numbers: tempArray });
            console.log(this.state.numbers[0][0]);
            this.constructGrid();
            console.log(event.key);
        }
    }

    render() {    
        console.log("after");
        return (
            <div className="column" onKeyPress={this.onKeyPress} tabIndex="0">
                { this.state.gameGrid }
            </div>
        );
    }
}

export default Grid;