import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm.js'; 
import Result from './Result.js'; 


class App extends Component {
	constructor(props)
	{
		  super(props);
		  this.displayResults = this.displayResults.bind(this); 
		  this.changeResults = this.changeResults.bind(this); 
	}
	
	changeResults(results)
	{
		var temp =
		{
			schoolName : results.school.name, 
			inStateTuit : results['2014'].cost.tuition.in_state, 
			outStateTuit : results['2014'].cost.tuition.out_of_state,
			medianEarnings6Yrs : results['2009'].earnings['6_yrs_after_entry'].median 
			
			
		}
		return temp; 
	}
	
	
	displayResults(toDisplay)
	{
		var results = toDisplay.results; 
		//console.log(results); 
		var results = results.map(this.changeResults);
		console.log(results); 
		
		
		
	}
	
  render() {
    return (
		<MyForm displayResults={this.displayResults}/> 
    );
  }
}

export default App;
