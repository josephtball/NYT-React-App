import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Main from '../components/Main';
import Search from '../components/Main/Search';
import Saved from '../components/Main/Saved';

module.exports = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<Route path='Search' component={Search} />
			<Route path='Saved' component={Saved} />

			<IndexRoute component={Search} />
		</Route>
	</Router>
);