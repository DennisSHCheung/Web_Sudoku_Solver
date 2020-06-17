import React, { Component } from 'react';
import BoxComponent from './Components/BoxComponent';
import BoxList from './Components/BoxList';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			numbers:	[[0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0],
						 [0,0,0,0,0,0,0,0,0]]
		};		
	}

	render() {
		return (
			<div className="page">

				<div>
					<h1> SUDOKU SOLVER</h1>
				</div>
				<div className="content">
					<div className="gridBorder">
						<div style={{marginTop:'5px'}}></div>
						<BoxList numbers={this.state.numbers} />						
					</div>
					
				</div>
			</div>
		);
	}
}

export default App;
