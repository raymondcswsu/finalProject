import React from 'react';
import './Result.css'; 

class Result extends React.Component{
	
	constructor(props)
	{
		super(props); 
		//console.log(props); 
		
		this.state = 
		{
			"schoolName": props.props.schoolName,
			"inState": props.props.inStateTuit,
			"outState": props.props.outStateTuit,
			"medianEarn": props.props.medianEarnings6Yrs
		}
		//console.log(this.state); 
	}
	
	render(){
		return(
			<div className="container"> 
				<p className="line">School Name: { this.state.schoolName}</p>  
				<p className="line">Tutition(in-state): {this.state.inState}</p>  
				<p className="line">Tutition(out-state): {this.state.outState} </p>  
				<p className="line">Median Earnings After 6 Years: {this.state.medianEarn} </p>  
			</div>
		)
	}
}
export default Result; 