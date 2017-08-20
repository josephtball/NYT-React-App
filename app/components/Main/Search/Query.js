import React from 'react';

class Query extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			topic: '',
			start: 0,
			end: 0
		};

		this.searchSubmit = this.searchSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	searchSubmit(event) {
		event.preventDefault();
		this.props.setSearch(this.state.topic, this.state.start, this.state.end);
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
							<input onChange={this.handleChange} type='text' className='form-control' id='start' placeholder='Ex: 1999' />
						</div>
						<div className='form-group'>
							<label htmlFor='end'>End Year</label>
							<input onChange={this.handleChange} type='text' className='form-control' id='end' placeholder='Ex: 1999' />
						</div>
						<button type="submit" className="btn btn-success">Search</button>
					</form>
				</div>
			</div>
		);
	}
};

export default Query;