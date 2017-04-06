import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm.js'; 
import Result from './Result.js'; 
import ResultHolder from './ResultHolder.js'; 


class App extends Component {
	constructor(props)
	{
		  super(props);
		  
		  this.displayResults = this.displayResults.bind(this); 
		  this.changeResults = this.changeResults.bind(this); 
		  this.state = {
				results: [],
				
			};
	}
	
	
	
	changeResults(results)
	{
		//console.log(results); 
		var tempSchoolName;
		var tempInStateTuit;
		var tempOutStateTuit;
		var tempMedianEarnings6yrs; 
		try{
			tempSchoolName = results.school.name;
		}
		catch(err){
			tempSchoolName = "Not Found"; 
		}
		try{
			tempInStateTuit = results['2014'].cost.tuition.in_state;
		}
		catch(err){
			tempInStateTuit = "Not Found"; 
		}
		try{
			tempOutStateTuit = results['2014'].cost.tuition.out_of_state;
		}
		catch(err){
			tempOutStateTuit = "Not Found"; 
		}
		try{
			tempMedianEarnings6yrs = results['2009'].earnings['6_yrs_after_entry'].median;
		}
		catch(err){
			tempMedianEarnings6yrs = "Not Found"; 
		}
		
			var temp =
			{	
				schoolName : tempSchoolName , 
				inStateTuit : tempInStateTuit, 
				outStateTuit : tempOutStateTuit,
				medianEarnings6Yrs :  tempMedianEarnings6yrs 
					 
			}
		
		
		//console.log(temp); 
		return temp; 
	}
	
	
	
	
	displayResults(toDisplay)
	{
		this.setState({"results" : []}); 
		var results = toDisplay.results;
		
		//console.log(results); 
		var results = results.map(this.changeResults);
		//console.log(results); 
		this.setState({"results" : results}); 
		//console.log(this.state.results); 
		//this.forceUpdate();  
		
		
	}
	
	
	
  render() {
    return (
		<div>
		<MyForm displayResults={this.displayResults}/> 
			{
				this.state.results.map(result => <Result props={result}/>)
			}
		</div> 
    );
  }
}

export default App;
