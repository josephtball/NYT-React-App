import React from 'react';

import Query from './Search/Query.js';
import Results from './Search/Results.js';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			topic: '',
			start: 0,
			end: 0,
		}

		this.setSearch = this.setSearch.bind(this);
	}

	setSearch(topic, start, end) {
		this.setState({
			topic: topic,
			start: start,
			end: end
		});
	}

	render() {
		return (
			<div>
				<Query setSearch={this.setSearch}/>
				<Results topic={this.state.topic} start={this.state.start} end={this.state.end}/>
			</div>
		);
	}
};

export default Search;