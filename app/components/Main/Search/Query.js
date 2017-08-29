import React from 'react';

export default class Query extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			topic: '',
			start: '',
			end: ''
		};

		this.searchSubmit = this.searchSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let newState = {};
		newState[event.target.id] = event.target.value.trim();
		this.setState(newState);
	}

	searchSubmit(event) {
		event.preventDefault();
		const {topic, start, end} = this.state;
		this.props.setQuery(topic, start, end);
	}

	render() {
		return (
			<div className='panel'>
				<h2 className='panel-header'>Search Articles</h2>
				<div className='panel-content'>
					<form onSubmit={this.searchSubmit}>
						<div className='form-group'>
							<label htmlFor='topic'>Topic</label>
							<input onChange={this.handleChange} type='text' className='form-control' id='topic' placeholder='Enter Topic' required='required'/>
						</div>
						<div className='form-group'>
							<label htmlFor='start'>Start Year</label>
							<input onChange={this.handleChange} type='text' className='form-control' id='start' placeholder='Ex: 1999'  required='required'/>
						</div>
						<div className='form-group'>
							<label htmlFor='end'>End Year</label>
							<input onChange={this.handleChange} type='text' className='form-control' id='end' placeholder='Ex: 1999'  required='required'/>
						</div>
						<button type="submit" className="btn btn-warning">Search</button>
					</form>
				</div>
			</div>
		);
	}
};