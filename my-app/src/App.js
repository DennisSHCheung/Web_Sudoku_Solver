import React, { Component } from 'react';
import Grid from './Components/Grid';
import './App.css';
const algorithm = require('./Algorithm');

class App extends Component {
	constructor() {
		super();	
		this.state = {
			selectedId: -1, 
			numbers:	
			[[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0]]
		}	
	}

	onClick = () => {
		this.setState({ selectedId: -1 });
	} 

	onBoxClick = (id, event) => {
        if (this.state.selectedId === id) {
            this.setState({ selectedId: -1 });
        } else {
            this.setState({ selectedId: id });
        }
        event.stopPropagation();
	}
	
	onSolveButtonClick = () => {
		const result = algorithm.solve(this.state.numbers);
	}

	setNumbersElement = (row, col, num) => {
		let tempArray = this.state.numbers;
		tempArray[row][col] = num;
		this.setState({ numbers: tempArray });
	}

	render() {
		return (
			<div className="page" onClick={this.onClick}>
				<div>
					<h1> SUDOKU SOLVER</h1>
				</div>
				<div className="content">
					<div className="gridBorder">
						<div style={{marginTop:'5px'}}></div>
						<Grid 
						selectedId={this.state.selectedId} 
						onBoxClick={this.onBoxClick} 
						numbers={this.state.numbers}
						setNumbersElement={this.setNumbersElement}
						/>						
					</div>
					<div>
						<button onClick={this.onSolveButtonClick}></button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
