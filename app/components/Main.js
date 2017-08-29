import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<header className='jumbotron'>
					<div className='container text-center'>
						<h1>New York Times Article Scrubber</h1>
						<p className='lead'>Search and save articles of interest!</p>
					</div>
				</header>
				<main className='container'>
					<Link to='/search'>Search</Link>
					<Link to='/saved'>Saved</Link>
					<div>
						{this.props.children}
					</div>
				</main>
				<footer>
				</footer>
			</div>
		);
	}
};