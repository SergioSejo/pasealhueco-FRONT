import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { Principal } from '../components/principal/Principal';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/auth" component={AuthRouter} />
					<Route exact path="/" component={Principal} />
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
