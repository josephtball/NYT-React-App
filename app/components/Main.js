var React = require('react');

var Search = require('./Main/Search.js');
var Saved = require('./Main/Saved.js');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<header className='jumbotron'>
					<div className='container text-center'>
						<h1>New York Times Article Scrubber</h1>
						<p className='lead'>Search and annotate articles of interest!</p>
					</div>
				</header>
				<main className='container'>
					<Search />
					<Saved />
				</main>
				<footer>
				</footer>
			</div>
		);
	}
});

module.exports = Main;