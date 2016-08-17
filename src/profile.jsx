import React from 'react';

export default class Profile extends React.Component {
	render() {
		// console.log(this.props.data);
		return (
			<section className="robot--profile">
				<div className="robot--profile__info">
					<img src={this.props.data.avatar} height="200px" width="200px"></img>
				</div>
				<div className="robot--profile__state">
					<ul>
						<li>
							<p><b>First name:</b> {this.props.data.first_name}</p>
						</li>
						<li>
							<p><b>Last name:</b> {this.props.data.last_name}</p>
						</li>
						<li>
							<p><b>Gender:</b> {this.props.data.gender}</p>
						</li>
						<li>
							<p><b>E-mail:</b> {this.props.data.email}</p>
						</li>
					</ul>
				</div>
			</section>
		);
	}
}
