import React from 'react';

import Search from './Main/Search.js';
import Saved from './Main/Saved.js';

class Main extends React.Component {
	render() {
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
};

export default Main;