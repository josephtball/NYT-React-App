var React = require('react');

var helpers = require('../../utils/helpers.js');
var Query = require('./Search/Query.js');
var Results = require('./Search/Results.js');

var Search = React.createClass({
	getInitialState: function() {
		return {
			topic: '',
			start: 0,
			end: 0,
			page: 0,
		}
	},
	render: function() {
		return (
			<div>
				<Query />
				<Results />
			</div>
		);
	}
});

module.exports = Search;