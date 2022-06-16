import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import logo from '../../images/icono.png';

export const Login = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.ui);

	const [formValues, handleInputChange] = useForm({
		email: 'sergio.sejo@gmail.com',
		password: '123456',
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLogin(email, password));
	};

	return (
		<>
			<div className="auth__logoCenter">
				<img
					src={logo}
					alt="LOGO"
					width="80"
					height="80"
					className="center"
					rounded="true"
				/>
			</div>

			<h3 className="auth__title">Login</h3>

			<form onSubmit={handleLogin}>
				<div>
					<label>Email</label>
					<input
						name="email"
						type="email"
						className="auth__input"
						autoComplete="off"
						placeholder="name@example.com"
						value={email}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						name="password"
						type="password"
						className="auth__input"
						autoComplete="off"
						placeholder="name@example.com"
						value={password}
						onChange={handleInputChange}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary btn-block"
					disabled={loading}
				>
					Login
				</button>
				<a href="/auth/register" className="link">
					Create new account
				</a>
			</form>
		</>
	);
};
