import React, { Component } from 'react';
import Grid from './Components/Grid';
import './App.css';

class App extends Component {
	constructor() {
		super();		
	}

	onClick = (e) => {
		console.log('here');
	} 

	render() {
		return (
			<div className="page" onClick={(e) => this.onClick(e)}>
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
