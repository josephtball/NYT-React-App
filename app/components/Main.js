import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
	render() {
		return (
			<div id='content'>
				<header className='jumbotron'>
					<div className='container text-center'>
						<h1>New York Times Article Scrubber</h1>
						<p className='lead'>Search and save articles of interest!</p>
						<Link to='/search'><button className='btn btn-outline-success mr-1'>Search for Articles</button></Link>
						<Link to='/saved'><button className='btn btn-outline-warning'>View Saved Articles</button></Link>
					</div>
				</header>
				<main className='container'>
					
					<div>
						{this.props.children}
					</div>
				</main>
				<footer>
					<div className='container'>
						<div className='row'>
							<div className='col text-center'>
								&copy; Copyright 2017 Joseph Ball
							</div>
						</div>
						<div className='row'>
							<div className='col text-center'>
								<a className='text-white' href='https://github.com/josephtball/NYT-React-App' target='_blank'><span className='icon'><i className='fa fa-github'></i></span> GitHub Repo</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
};