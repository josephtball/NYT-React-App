import React from 'react';

import helpers from '../../../utils/helpers.js';

export default class Results extends React.Component {
	constructor(props) {
		super(props);

		this.handleSave = this.handleSave.bind(this);
	}

	handleSave(data, index) {
		this.refs['btn'+index].setAttribute("disabled", "disabled");
		helpers.saveArticle(data);
	}

	render() {
		if (this.props.results.length > 0) {
			return (
				<div className='panel'>
					<h2 className='panel-header'>Results</h2>
					<div className='panel-content'>
							{
								this.props.results.map((result, index) => {
									let imgSrc, imgAlt;
									if (result.multimedia.hasOwnProperty('2')) {
										imgSrc = 'http://nytimes.com/'+result.multimedia[2].url;
										imgAlt = result.multimedia[2].subtype;
									} else {
										imgSrc = '';
										imgAlt = '';
									}
									return (
										<div key={index} className='article'>
											<div className='media'>
												<a href={result.web_url} target='_blank'>
													<img className='d-flex mr-3' src={imgSrc} alt={imgAlt} />
												</a>
												<div className='media-body'>
													<a href={result.web_url} target='_blank'>
														<h5 className='mt-0'>{result.headline.main}</h5>
													</a>
													{result.snippet}
												</div>
											</div>
											<div className='article-button'>
												<button className='btn btn-success btn-sm' ref={'btn'+index} onClick={(e) => this.handleSave(result, index)}>Save</button>
											</div>
										</div>
									)
								})
							}
					</div>
				</div>
			);
		}
		return (<div></div>); // return empty div if nothing has been searched yet
	}
};