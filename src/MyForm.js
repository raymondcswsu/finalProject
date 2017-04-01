import React from 'react'; 


class MyForm extends React.Component{
	
	constructor(props){
		super(props);
		
		this.submit = this.submit.bind(this); 
		this.makeReady = this.makeReady.bind(this); 

	}
	
	makeReady(string)
	{
		string = string.split(" "); 
		var str1 = "%20";
		string = string.map(n => n.concat(str1));
		//console.log(string);
		string = string.reduce(function(prev, curr){return prev+curr},"");
		//console.log(string);
		return string; 
	}
	
	 
	submit(){
		var name = document.getElementById('Name').value; 
		var location = document.getElementById('State').value; 
		name = this.makeReady(name); 
		console.log(name); 
		fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name="+ 
			name+"&api_key=WFRRaro1e4xNtfUM486ErRfVrb9JOIX8ek7C2xyp")
			.then(res => res.json())
			.then(res => this.props.displayResults(res))
	}
	
	
	render(){
		return(
			<div className="formContainer">
				 <span className="inputField">School Name: <input type="text" id="Name" /> </span> 
				 <span className="inputField">State: <input type="text" id="State" /> </span> 
				 <button onClick={this.submit} > Search </button> 
			</div>
		); 
	}
}

export default MyForm; 