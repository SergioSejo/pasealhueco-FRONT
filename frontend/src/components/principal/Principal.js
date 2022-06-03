import React from 'react';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';

export const Principal = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<>
			<h3 className="auth__title">Principal</h3>

			<button
				type="submit"
				className="btn btn-primary btn-block"
				onClick={handleLogout}
			>
				Logout
			</button>
		</>
	);
};
