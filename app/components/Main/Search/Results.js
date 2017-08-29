import React from 'react';

export default class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 0
		}
	}

	render() {
		console.log(this.props.results);
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
											<button className='btn btn-success btn-sm'>Save</button>
											</div>
										</div>
										)
								})
							}
					</div>
					<ul className='pagination justify-content-center'>
						<li className='page-item'><a className='page-link'><span aria-hidden='true'>&laquo;</span> Previous</a></li>
						<li className='page-item'><a className='page-link'>Next <span aria-hidden='true'>&raquo;</span></a></li>
					</ul>
				</div>
			);
		}
		return (<div></div>); // return empty div if nothing has been searched yet
	}
};