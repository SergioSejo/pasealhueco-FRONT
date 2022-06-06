import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { Principal } from '../components/principal/Principal';
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { startChecking } from '../actions/auth';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const { checking, uid } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(startChecking());
	}, [dispatch]);

	console.log('checking: ', checking);
	if (checking) {
		return <h1>Espere...</h1>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						path="/auth"
						component={AuthRouter}
						isAuthenticated={!!uid}
					/>
					<PrivateRoute
						exact
						path="/principal"
						component={Principal}
						isAuthenticated={!!uid}
					/>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
