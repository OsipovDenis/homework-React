import React from 'react';

export class Row extends React.Component {
	render(){
		return (
			<tr id={this.props.id}>
				<td><img src={this.props.avatar} width='50px' height="50px"></img></td>
				<td>{this.props.name}</td>
				<td>{this.props.surname}</td>
			</tr>
		);
	}
}