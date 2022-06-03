import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { Principal } from '../components/principal/Principal';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { login } from '../actions/auth';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		//TODO: DESCOMENTAR SI QUIERO ENTRAR EN LA PAGINA PRINCIPAL
		//dispatch(login('XYZ1234', 'Sergiete'));
		//setIsLoggedIn(true);
		setTimeout(() => {
			setChecking(false);
		}, 2000);

		/*firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}

			setChecking(false);
		});*/
	}, [dispatch, setChecking, setIsLoggedIn]);

	if (checking) {
		return <h1>Espere...</h1>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						isAuthenticated={isLoggedIn}
						path="/auth"
						component={AuthRouter}
					/>
					<PrivateRoute
						isAuthenticated={isLoggedIn}
						exact
						path="/"
						component={Principal}
					/>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
