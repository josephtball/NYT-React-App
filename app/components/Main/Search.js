var React = require('react');

var Query = require('./Search/Query.js');
var Results = require('./Search/Results.js');

var Search = React.createClass({
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