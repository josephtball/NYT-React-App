import React from 'react';

import helpers from '../../utils/helpers';

import Query from './Search/Query';
import Results from './Search/Results';

export default class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			results: []
		}
		this.setQuery = this.setQuery.bind(this);
	}

	setQuery(newTopic, newStart, newEnd) {
		helpers.searchArticles(newTopic, newStart, newEnd, '0').then((data)=> {
			this.setState({ 
				results:  data 
			});
		});
	}

	render() {
		return (
			<div>
				<Query setQuery={this.setQuery} />
				<Results results={this.state.results} />
			</div>
		);
	}
};