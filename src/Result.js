import React from 'react';

class Result extends React.Component{
	
	constructor(props)
	{
		super(props); 
		this.getInState = this.getInState.bind(this); 
		this.getOutState = this.getOutState.bind(this); 
		this.getSchoolName = this.getSchoolName.bind(this); 
		this.getMedianEarn = this.getMedianEarn.bind(this); 
	}
	
	getInState()
	{
		return this.props.inStateTuit; 
	}
	
	getOutState()
	{
		return this.props.outStateTuit;
	}
	
	getSchoolName()
	{
		return this.props.schoolName; 
	}
	
	getMedianEarn()
	{
		return this.props.medianEarnings6Yrs; 
	}
	
	render(){
		return(
			<div> 
				<p>School Name: { this.getSchoolName}</p>  <br/>
				<p>Tutition(in-state): {this.getInState}</p> <br/> 
				<p>Tutition(out-state): {this.getOutState} </p>  <br/>
				<p>Median Earnings After 6 Years: {this.getMedianEarn} </p>  <br/>
			</div>
		)
	}
}
export default Result; 