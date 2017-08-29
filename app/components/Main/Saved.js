import React from 'react';

import helpers from '../../utils/helpers.js';

export default class Saved extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		}

		this.handleDelete = this.handleDelete.bind(this);
	}

	componentWillMount() {
		helpers.getArticles().then((data) => {
			this.setState({
				articles: data
			});
		});
	}

	handleDelete(data) {
		helpers.deleteArticle(data).then((response) =>  {
			this.componentWillMount();
		});
	}

	render() {
		if (this.state.articles.length > 0) {
			return (
				<div className='panel'>
					<h2 className='panel-header'>Saved Articles</h2>
					<div className='panel-content'>
						{
							this.state.articles.map((article, index) => {
								return (
									<div key={index} className='saved-article'>
										<div className='media'>
											<div className='media-body'>
												<a href={article.url} target='_blank'>
													<h5 className='mt-0'>{article.title}</h5>
												</a>
												Saved: {article.date}
												<button className='btn btn-danger btn-sm float-right' onClick={(e) => this.handleDelete(article)}>Delete</button>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			);
		}
		return (
			<div className='panel'>
				<h2 className='panel-header'>Saved Articles</h2>
				<div className='panel-content'>
					<h5 className='text-center'>No Saved Articles</h5>
				</div>
			</div>
		);
	}
};