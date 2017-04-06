import React from 'react'; 
import './MyForm.css'; 
import t from 'tcomb-form';

const Form = t.form.Form; 

const query = t.struct({
	name : t.String
});


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
		var name = this.refs.form.getValue().name; 
		//console.log(name); 
		name = this.makeReady(name); 
		
		fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name="+ 
			name+"&api_key=WFRRaro1e4xNtfUM486ErRfVrb9JOIX8ek7C2xyp")
			.then(res => res.json())
			.then(res => this.props.displayResults(res))
	}
	
	
	render(){
		return(
			<div className="formContainer">
				 <h1> Search for school</h1> 
				 <Form ref="form" type={query} /> 
				 
				 <button onClick={this.submit} > Search </button> <br/>
				 
			</div>
		); 
	}
}

export default MyForm; 