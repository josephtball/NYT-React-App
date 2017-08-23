import React from 'react';

export default class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 0
		}
	}

	render() {
		console.log(this.props.results)
		return (
			<div className='panel'>
				<h2 className='panel-header'>Results</h2>
				<div className='panel-content'>
					<ul>
						{
							this.props.results.map((result, index) => {
								return (
									<li key={index}>{result.headline.main}</li>
									)
							})
						}
					</ul>
				</div>
			</div>
		);
	}
};