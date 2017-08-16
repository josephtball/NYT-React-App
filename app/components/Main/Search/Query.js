var React = require('react');

var Query = React.createClass({
	getInitialState: function() {
		return {
			topic: '',
			start: 0,
			end: 0,
			page: 0,
		}
	},
	render: function() {
		return (
			<div className='panel'>
				<h2 className='panel-header'>Search Articles</h2>
				<div className='panel-content'>
					<form>
						<div className='form-group'>
							<label htmlFor='topic'>Topic</label>
							<input type='text' className='form-control' id='topic' placeholder='Enter Topic' required='required'/>
						</div>
						<div className='form-group'>
							<label htmlFor='start-year'>Start Year</label>
							<input type='text' className='form-control' id='start-year' placeholder='Ex: 1999' />
						</div>
						<div className='form-group'>
							<label htmlFor='end-year'>End Year</label>
							<input type='text' className='form-control' id='end-year' placeholder='Ex: 1999' />
						</div>
						<button type="submit" className="btn btn-success">Search</button>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Query;