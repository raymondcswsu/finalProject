import React from 'react'; 
import Result from './Result'; 


class ResultHolder extends React.Component{
	
	constructor(props){
		super(props); 
		console.log(props); 
		this.state = {
			"results": props.props
		}
		//console.log(this.state); 
		
	}
	
	
	render(){
		console.log(this.state.results); 
		return(
			<div>
				{
					this.state.results.map(result => <Result props={result}/>)
				}
			</div>
		)
	}
	
}
export default ResultHolder; 