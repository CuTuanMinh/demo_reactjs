import React, { Component } from 'react';
// import logo from './logo.svg';

class MailComponent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<h1>Mail statistics</h1>
				{this.props.newMessages.length > 0 && 
					<h2>You have {this.props.newMessages.length} new massages</h2>
				// }
				// dk ben trai dung thi thuc hien cau lenh ben phai
			</div>
		);
	}
}

export default MailComponent;