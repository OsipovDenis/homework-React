import React from 'react';
import {Row} from './row';

export default class Table extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<table className="all--users">
				<tbody>
					{
						this.props.data.map((item, i) => {
							return <Row id={item.id} 
								name={item.first_name} 
								surname={item.last_name} 
								avatar={item.avatar} />
						})
					}
				</tbody>
			</table>
		);
	}

}
