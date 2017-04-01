import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm.js'; 

//<img src={baseballImg} alt="" /> 
class App extends Component {
	constructor(props)
	{
		  super(props);
		  this.displayResults = this.displayResults.bind(this); 
	}
	
	
	displayResults(toDisplay)
	{
		console.log(toDisplay); 
	}
	
  render() {
    return (
		<MyForm displayResults={this.displayResults}/> 
    );
  }
}

export default App;
