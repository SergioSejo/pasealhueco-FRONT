import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<div className="navbar">
			<span>{name}</span>

			<button className="btn btn-primary" onClick={handleLogout}>
				<i className="fas fa-sign-out-alt"></i>
				<span> Salir</span>
			</button>
		</div>
	);
};
