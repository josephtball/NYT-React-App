import React from 'react';

import helpers from '../../../utils/helpers.js';

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 0
		}
	}

	componentDidUpdate() {
		helpers.searchArticles(this.props.topic, this.props.start, this.props.end, this.state.page).then((data) => {
			const articles = data.response.docs;
		});
	}

	render() {
		const listItems = articles.map((data) => {
			<li>{data.headline.print_headline}</li>
		});
		return (
			<div className='panel'>
				<h2 className='panel-header'>Results</h2>
				<div className='panel-content'>
					<ul>
						{ listItems }
					</ul>
				</div>
			</div>
		);
	}
};

export default Results;