import React, { Component } from 'react';
import Grid from './Components/Grid';
import './App.css';

class App extends Component {
	constructor() {
		super();		
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
						<Grid />						
					</div>
					
				</div>
			</div>
		);
	}
}

export default App;
