import React from 'react';

class Result extends React.Component{
	
	constructor(props)
	{
		super(props); 
		this.getInState = this.getInState.bind(this); 
	}
	
	getInState()
	{
		return this.props; 
	}
	
	render(){
		return(
			<div> 
				<p>Tutition(in-state): {this.getInState}</p>
				<p> </p> 
			</div>
		)
	}
}
export default Result; 